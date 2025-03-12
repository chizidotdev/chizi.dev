<script lang="ts">
  import { appConfig } from "$lib/config";
  import "../styles/app.css";

  import { page } from "$app/stores";
  import { Avatar } from "$lib/components/avatar";
  import { Heading, Paragraph } from "$lib/components/text";
  import { cn } from "$lib/utils";
  import Clock from "./clock.svelte";

  const navItems = [
    { title: "Work", href: "/", pathRegex: /\/$/ },
    { title: "Snippets", href: "/snippets", pathRegex: /\/snippets/ },
    { title: "Resume", href: "/resume", pathRegex: /\/resume/ },
  ];
</script>

<header class="container mt-24 space-y-6">
  <section class="flex items-center justify-between gap-2">
    <Avatar class="size-14 sm:size-20" />
    <Clock />
  </section>

  <div class="space-y-2">
    <Heading variant="h2">Chizi Victor</Heading>

    <Paragraph class="text-muted-foreground">
      {appConfig.description}
      Based in Port Harcourt, Nigeria. Building my own ideas, helping you launch yours.
    </Paragraph>
  </div>
</header>

<nav class="container sticky top-4 z-10 mt-6 flex items-center gap-1.5">
  {#each navItems as { href, title, pathRegex }}
    <a
      {href}
      class={cn(
        "rounded-md px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        pathRegex.test($page.url.pathname) && "bg-muted text-foreground"
      )}
    >
      {title}
    </a>
  {/each}
</nav>
