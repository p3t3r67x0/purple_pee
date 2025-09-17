<template>
  <div class="relative min-h-screen overflow-hidden text-slate-100 antialiased">
    <div class="pointer-events-none absolute inset-0 -z-10 bg-cosmic-gradient bg-[length:180%_180%] opacity-90 animate-gradient-move"></div>
    <div class="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[55vw] bg-aurora-gradient blur-3xl opacity-60"></div>
    <div class="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-[35rem] w-[35rem] rounded-full bg-gradient-to-br from-cosmic-flare/40 via-cosmic-aurora/40 to-transparent blur-3xl"></div>
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
