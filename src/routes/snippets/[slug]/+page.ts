import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  try {
    const snippet = await import(`../../../content/snippets/${params.slug}.md`);

    return {
      content: snippet.default,
      meta: snippet.metadata as Snippet,
    };
  } catch (e) {
    error(404, "Snippet not found");
  }
};
