<script lang="ts">
  import { personalData } from "$lib/config";
  import Avatar from "$lib/components/avatar.svelte";
  import { CAL_LINK } from "$lib/config";
  import { buttonStyles, Text } from "$lib/components";
  import { TwitterIcon, GithubIcon, LinkedinIcon, MailIcon } from "$lib/icons";
  import Button from "$lib/components/button.svelte";
</script>

<footer
  class="mt-14 flex flex-col items-center justify-between gap-12 pb-[var(--clamp-nav)] sm:items-start"
>
  <div class="container mb-10 max-w-xl">
    <div class="flex flex-col gap-6 text-center">
      <Text variant="h1">It's your move. Let's chat!</Text>
      <Text>
        <span class="hidden sm:inline">We'll determine if there's a fit to work together.</span> No
        sales pitches, just a productive 30-minute conversation. If you prefer to work async, you
        can email me at
        <span class="text-muted-foreground">hello@chizi.dev</span>
      </Text>
    </div>

    <a href={CAL_LINK} class="mx-auto mt-10 block w-fit">
      <Button variant="primary"><Avatar /> Book a Free Discovery Call</Button>
    </a>
  </div>

  <!-- <div class="flex items-center gap-6">
    <a href="/" class={buttonStyles({ variant: "link" })}>home</a>
    <a href="/work" class={buttonStyles({ variant: "link" })}>work</a>
    <a href="/snippets" class={buttonStyles({ variant: "link" })}>snippets</a>
    <a href="/animations" class={buttonStyles({ variant: "link" })}>animations</a>
  </div> -->

  <div class="container flex w-fit items-center gap-3">
    {#each personalData.socials as link}
      <a
        href={link.url}
        class={buttonStyles({ variant: "outline", size: "icon" })}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.id}
      >
        {#if link.id === "twitter"}
          <TwitterIcon />
        {:else if link.id === "github"}
          <GithubIcon />
        {:else if link.id === "linkedin"}
          <LinkedinIcon class="p-0.5" />
        {:else if link.id === "mail"}
          <MailIcon class="p-0.5" />
        {/if}
      </a>
    {/each}
  </div>

  <Text class="container max-w-md text-center">
    Developed by <span class="text-muted-foreground">@chizidotdev</span>. Built with
    <a
      href="https://kit.svelte.dev"
      class={buttonStyles({ variant: "link" })}
      target="_blank"
      rel="noopener noreferrer"
    >
      SvelteKit
    </a>
    and
    <a
      href="https://tailwindcss.com/"
      class={buttonStyles({ variant: "link" })}
      target="_blank"
      rel="noopener noreferrer"
    >
      TailwindCSS,
    </a>
    deployed on
    <a
      href="https://railway.app/"
      class={buttonStyles({ variant: "link" })}
      target="_blank"
      rel="noopener noreferrer"
    >
      Railway.
    </a>
  </Text>
</footer>
