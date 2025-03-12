<script lang="ts">
  let date = $state(new Date());

  setInterval(() => {
    date = new Date();
  }, 1000);

  const hr = $derived(date.getHours());
  const min = $derived(date.getMinutes());
  const sec = $derived(date.getSeconds());
</script>

<div
  style:--hour={`calc((${hr}/12) * 360)`}
  style:--minute={`calc((${min}/60) * 360)`}
  style:--second={`calc((${sec}/60) * 360)`}
  style:--width="2px"
  class="relative flex size-12 rotate-180 items-center justify-center after:size-[5%] after:rounded-full after:bg-primary sm:size-12"
>
  <div class="handle h-1/4 rotate-[calc(var(--hour)*1deg)] bg-muted-foreground"></div>
  <div class="handle h-1/3 rotate-[calc(var(--minute)*1deg)] bg-muted-foreground/80"></div>
  <div class="handle h-2/5 rotate-[calc(var(--second)*1deg)] bg-muted-foreground/30"></div>
</div>

<style>
  .handle {
    position: absolute;
    top: 50%;
    left: calc(50%-var(--width) / 2);
    width: var(--width);
    transform-origin: center 0;
  }
</style>
