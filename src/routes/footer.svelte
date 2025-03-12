<script>
  import { ThemeToggle } from "$lib/components/theme-toggle";
  import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-svelte";

  const socials = [
    { icon: GithubIcon, id: "github", name: "Github", url: "https://github.com/chizidotdev" },
    { icon: TwitterIcon, id: "twitter", name: "Twitter", url: "https://twitter.com/chizidotdev" },
    {
      icon: LinkedinIcon,
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/chizi-wokoma-1b486a226/",
    },
    { icon: MailIcon, id: "email", name: "Email", url: "mailto:chiziwokoma@gmail.com" },
  ];
</script>

<footer class="container my-20 space-y-4 pt-10">
  <div class="flex items-center justify-between">
    <div class="flex w-fit items-center gap-3">
      {#each socials as link}
        <a
          href={link.url}
          class="inline-flex size-9 items-center justify-center rounded-full border bg-background"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.id}
        >
          <link.icon class="size-4" />
        </a>
      {/each}
    </div>
    <ThemeToggle />
  </div>

  <p class="max-w-md text-sm">
    Developed by <span class="text-muted-foreground">@chizidotdev</span>. Built with
    <a href="https://svelte.dev/docs/kit" class="link" target="_blank" rel="noopener noreferrer">
      SvelteKit
    </a>
    and
    <a href="https://tailwindcss.com" class="link" target="_blank" rel="noopener noreferrer">
      TailwindCSS,
    </a>
    deployed on
    <a href="https://railway.com" class="link" target="_blank" rel="noopener noreferrer">
      Railway.
    </a>
  </p>
</footer>
