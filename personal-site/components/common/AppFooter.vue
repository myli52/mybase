<template>
  <footer class="bg-gray-900 text-gray-300 py-8">
    <div class="max-w-container mx-auto px-6 text-center">
      <p class="text-sm">
        © {{ currentYear }} 李明洋. All rights reserved.
      </p>
      <p class="text-xs mt-2 text-gray-500">
        Built with Nuxt 3, Vue 3, TypeScript & Tailwind CSS
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
