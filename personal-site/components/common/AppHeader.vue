<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{ 'bg-white/80 backdrop-blur-md shadow-sm': isScrolled }"
  >
    <nav class="max-w-container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="text-xl font-bold text-primary-600">
          李明洋
        </div>

        <ul class="hidden md:flex items-center space-x-8">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="text-gray-700 hover:text-primary-600 transition-colors"
              @click.prevent="scrollToSection(item.id)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>

        <button
          class="md:hidden text-gray-700"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div
        v-if="isMobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4"
      >
        <ul class="space-y-4">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="block text-gray-700 hover:text-primary-600"
              @click.prevent="scrollToSectionAndClose(item.id)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { id: 'home', label: '首页' },
  { id: 'skills', label: '技能' },
  { id: 'experience', label: '经历' },
  { id: 'projects', label: '项目' },
  { id: 'blog', label: '博客' },
  { id: 'contact', label: '联系我' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const scrollToSectionAndClose = (id: string) => {
  scrollToSection(id)
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
