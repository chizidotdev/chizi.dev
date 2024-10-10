<script>
  import { CAL_LINK } from "$lib/config";
  import Button from "$lib/components/button.svelte";
  import Avatar from "$lib/components/avatar.svelte";
</script>

<nav
  class="fixed inset-x-0 bottom-0 z-10 flex h-[calc(var(--clamp-nav)-1vh)] items-center justify-center"
>
  <div
    class="flex items-center gap-2 [&>*]:rounded-full [&>*]:border [&>*]:border-muted-foreground/10 [&>*]:bg-background/50 [&>*]:backdrop-blur"
  >
    <a href="/">
      <Avatar class="size-10" />
    </a>

    <div
      class="flex items-center gap-6 px-5 py-2 [&>*]:transition-colors hover:[&>*]:text-muted-foreground"
    >
      <a class="hidden sm:inline-flex" href="#work">Work</a>
      <a href="#pricing">Pricing</a>
      <a class="hidden sm:inline-flex" href="#faq">FAQ</a>
    </div>

    <a href={CAL_LINK} class="mx-auto w-fit">
      <Button variant="default">Get in touch</Button>
    </a>
  </div>
</nav>

<div class="gradient-blur">
  {#each Array(6) as _}
    <div />
  {/each}
</div>

<style>
  .gradient-blur {
    position: fixed;
    z-index: 5;
    inset: auto 0 0 0;
    height: var(--clamp-nav);
    pointer-events: none;
  }
  .gradient-blur > div,
  .gradient-blur::before,
  .gradient-blur::after {
    position: absolute;
    inset: 0;
  }
  .gradient-blur::before {
    content: "";
    z-index: 1;
    backdrop-filter: blur(0.5px);
    mask: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 12.5%,
      rgba(0, 0, 0, 1) 25%,
      rgba(0, 0, 0, 0) 37.5%
    );
  }
  .gradient-blur > div:nth-of-type(1) {
    z-index: 2;
    backdrop-filter: blur(1px);
    mask: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 12.5%,
      rgba(0, 0, 0, 1) 25%,
      rgba(0, 0, 0, 1) 37.5%,
      rgba(0, 0, 0, 0) 50%
    );
  }
  .gradient-blur > div:nth-of-type(2) {
    z-index: 3;
    backdrop-filter: blur(2px);
    mask: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 25%,
      rgba(0, 0, 0, 1) 37.5%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0) 62.5%
    );
  }
  .gradient-blur > div:nth-of-type(3) {
    z-index: 4;
    backdrop-filter: blur(4px);
    mask: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 37.5%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 1) 62.5%,
      rgba(0, 0, 0, 0) 75%
    );
  }
  .gradient-blur > div:nth-of-type(4) {
    z-index: 5;
    backdrop-filter: blur(8px);
    mask: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 1) 62.5%,
      rgba(0, 0, 0, 1) 75%,
      rgba(0, 0, 0, 0) 87.5%
    );
  }
  .gradient-blur > div:nth-of-type(5) {
    z-index: 6;
    backdrop-filter: blur(16px);
    mask: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 62.5%,
      rgba(0, 0, 0, 1) 75%,
      rgba(0, 0, 0, 1) 87.5%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .gradient-blur > div:nth-of-type(6) {
    z-index: 7;
    backdrop-filter: blur(32px);
    mask: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 1) 87.5%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  .gradient-blur::after {
    content: "";
    z-index: 8;
    backdrop-filter: blur(64px);
    mask: linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%);
  }
</style>
