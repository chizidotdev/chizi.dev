import type { APIRoute } from "astro";

import { getSecret } from "astro:env/server";

export const prerender = false;

/*
 * Railway redeploy webhook
 *
 * @see {@link https://www.postman.com/railway-4865/railway/request/50n615t/deploymentredeploy?tab=body}
 * */
export const POST: APIRoute = async () => {
  const railwayApiUrl = "https://backend.railway.app/graphql/v2";
  const railwayServiceId = getSecret("RAILWAY_SERVICE_ID");
  const railwayEnvironmentId = getSecret("RAILWAY_ENVIRONMENT_ID");
  const railwayApiToken = getSecret("RAILWAY_API_TOKEN");

  if (!railwayApiToken) {
    return new Response(JSON.stringify({ error: "RAILWAY_API_TOKEN is not set." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!railwayServiceId || !railwayEnvironmentId) {
    return new Response(JSON.stringify({ error: "serviceId and projectId are not set." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const mutation = `
    mutation DeploymentRedeploy($environmentId: String!, $serviceId: String!) {
      serviceInstanceDeploy(environmentId: $environmentId, serviceId: $serviceId)
    }
  `;

  try {
    const response = await fetch(railwayApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${railwayApiToken}`,
      },
      body: JSON.stringify({
        query: mutation,
        variables: {
          environmentId: railwayEnvironmentId,
          serviceId: railwayServiceId,
        },
      }),
    });

    const data = await response.json();

    if (data.errors) {
      console.error("GraphQL Errors:", data.errors);
      return new Response(
        JSON.stringify({ error: "Failed to trigger rebuild", details: data.errors }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check the response to confirm the redeploy was triggered
    const redeployStatus = data.data.serviceInstanceDeploy;
    if (!redeployStatus) {
      return new Response(
        JSON.stringify({
          error: "Failed to trigger rebuild: No redeploy status returned.",
          response: data,
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        message: "Rebuild triggered successfully!",
        serviceId: railwayServiceId,
        redeployStatus: redeployStatus,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error triggering Railway rebuild:", error);

    return new Response(
      JSON.stringify({ error: "Internal server error while triggering rebuild." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
