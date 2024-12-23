export const prerender = true;
import { json } from "@sveltejs/kit";

async function getSnippets() {
  let snippets: any[] = [];
  const paths = import.meta.glob("/src/content/snippets/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").pop()?.split(".").shift();

    if (!file || typeof file !== "object" || !("metadata" in file) || !slug) continue;
    const metadata = file.metadata as Omit<Snippet, "slug">;
    const snippet = { ...metadata, slug } satisfies Snippet;
    snippets.push(snippet);
  }

  snippets = snippets.sort((a, b) => (a.date > b.date ? -1 : 1));

  return snippets;
}

export async function GET() {
  const snippets = await getSnippets();

  return json(snippets);
}
