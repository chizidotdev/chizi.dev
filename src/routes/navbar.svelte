<script>
  import { Avatar } from "$lib/components/avatar";
</script>

<nav
  class="fixed inset-x-0 bottom-0 z-10 flex h-[calc(var(--clamp-nav))] items-center justify-center"
>
  <div
    class="flex items-center gap-2 [&>*]:rounded-full [&>*]:border [&>*]:bg-background/40 [&>*]:backdrop-blur-sm"
  >
    <a href="/">
      <Avatar class="size-10" />
    </a>

    <div
      class="flex items-center gap-6 px-5 py-2 [&>*]:transition-colors hover:[&>*]:text-muted-foreground"
    >
      <a href="/work">Work</a>
      <a href="/snippets">Snippets</a>
    </div>
  </div>
</nav>
