<script lang="ts">
  const pad = (n: number) => n.toString().padStart(2, "0");
  let date = $state(new Date());

  setInterval(() => {
    date = new Date();
  }, 1000);

  const hr = $derived(date.getUTCHours() + 1);
  const min = $derived(date.getUTCMinutes());
  const sec = $derived(date.getUTCSeconds());
</script>

<div class="flex items-center gap-4">
  <p class="text-muted-foreground/70 text-xs">
    (UTC +1)&nbsp;
    <span class="font-mono">{pad(hr)}:{pad(min)}:{pad(sec)}</span>
    {#if hr < 12}
      AM
    {:else}
      PM
    {/if}
  </p>

  <div
    style:--hour={`calc((${hr}/12) * 360)`}
    style:--minute={`calc((${min}/60) * 360)`}
    style:--second={`calc((${sec}/60) * 360)`}
    style:--width="2px"
    class="relative flex size-14 rounded-full rotate-180 items-center justify-center after:z-10 after:size-[5%] after:rounded-full after:bg-background sm:size-16 after:border-[0.5px]"
  >
    <div class="handle h-1/5 w-0.5 rotate-[calc(var(--hour)*1deg)] bg-muted-foreground"></div>
    <div class="handle h-1/3 w-0.5 rotate-[calc(var(--minute)*1deg)] bg-muted-foreground/50"></div>
    <div class="handle h-2/5 w-[0.4px] rotate-[calc(var(--second)*1deg)] bg-primary"></div>
  </div>
</div>

<style>
  .handle {
    position: absolute;
    top: 50%;
    left: calc(50% - var(--width) / 2);
    transform-origin: center 0;
  }
</style>
