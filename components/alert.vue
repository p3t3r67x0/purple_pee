<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="space-y-4">
      <div class="flex items-start gap-4 rounded-lg border-l-4 border-green-500 bg-green-50 p-4">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
          <span class="text-xl font-bold">✓</span>
        </div>
        <div>
          <p class="text-sm font-semibold text-green-800 sm:text-base">Success alert</p>
          <p class="text-sm text-green-700">Description text</p>
        </div>
      </div>

      <div class="flex items-start gap-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">
          <span class="text-xl font-bold">ℹ</span>
        </div>
        <div>
          <p class="text-sm font-semibold text-blue-800 sm:text-base">Info alert</p>
          <p class="text-sm text-blue-700">Description text</p>
        </div>
      </div>

      <div class="flex items-start gap-4 rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
          <span class="text-xl font-bold">!</span>
        </div>
        <div>
          <p class="text-sm font-semibold text-orange-800 sm:text-base">Warning alert</p>
          <p class="text-sm text-orange-700">Description text</p>
        </div>
      </div>

      <div class="flex items-start gap-4 rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
          <span class="text-xl font-bold">!</span>
        </div>
        <div>
          <p class="text-sm font-semibold text-red-800 sm:text-base">Danger alert</p>
          <p class="text-sm text-red-700">Description text</p>
        </div>
      </div>
    </div>
  </div>
</template>
