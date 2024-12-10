<script>
  import { personalData } from "$lib/config";
</script>

<footer
  class="my-20 flex flex-col items-center justify-between gap-12 pb-[calc(var(--clamp-nav)+2vh)] pt-16 sm:items-start"
>
  <div class="container flex w-fit items-center gap-3 blur">
    {#each personalData.socials as link}
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

  <p class="container max-w-md text-center blur">
    Developed by <span class="text-muted-foreground">@chizidotdev</span>. Built with
    <a href="https://svelte.dev/docs/kit" class="link" target="_blank" rel="noopener noreferrer">
      SvelteKit
    </a>
    and
    <a href="https://tailwindcss.com" class="link" target="_blank" rel="noopener noreferrer">
      TailwindCSS,
    </a>
    deployed on
    <a href="https://railway.app" class="link" target="_blank" rel="noopener noreferrer">
      Railway.
    </a>
  </p>
</footer>
