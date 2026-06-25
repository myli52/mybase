<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20"
  >
    <div class="max-w-container mx-auto px-6 py-20 text-center">
      <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
        {{ profile.name }}
      </h1>
      <p class="text-2xl md:text-3xl text-primary-600 font-semibold mb-6">
        {{ profile.title }}
      </p>
      <p class="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
        {{ profile.summary }}
      </p>

      <!-- Core Skills Tags -->
      <div class="flex flex-wrap justify-center gap-3 mb-10">
        <span
          v-for="skill in coreSkills"
          :key="skill"
          class="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
        >
          {{ skill }}
        </span>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="scrollTo('projects')"
          class="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          查看项目经历
        </button>
        <NuxtLink
          to="/blog"
          class="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-50 transition-colors border border-primary-600"
        >
          阅读博客
        </NuxtLink>
        <button
          @click="scrollTo('contact')"
          class="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          联系我
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'

const coreSkills = [
  'Vue2 / Vue3',
  'TypeScript',
  'ECharts',
  'GIS',
  'Three.js',
  '微前端',
  '组件库',
  '小程序',
  '性能优化'
]

const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
