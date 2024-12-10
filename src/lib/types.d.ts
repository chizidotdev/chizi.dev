declare module "*.md" {
  import type { SvelteComponent } from "svelte";

  export default class Comp extends SvelteComponent {}

  export const metadata: Record<string, unknown>;
}

type Snippet = {
  title: string;
  description: string;
  date: string;
  published: boolean;
  featured: boolean;
  slug: string;
};
