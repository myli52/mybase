<template>
  <section id="projects" class="py-20 bg-gray-50">
    <div class="max-w-container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-gray-900 mb-8">
        项目经历
      </h2>

      <!-- Filter -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          class="px-4 py-2 rounded-lg transition-all"
          :class="
            selectedCategory === category
              ? 'bg-primary-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          "
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="project in filteredProjects"
          :key="project.name"
          class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
          @click="toggleExpand(project.name)"
        >
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-xl font-semibold text-gray-900">
              {{ project.name }}
            </h3>
            <span class="text-sm text-gray-500">{{ project.period }}</span>
          </div>

          <p
            class="text-gray-600 mb-4 leading-relaxed"
            :class="{ 'line-clamp-2': !isExpanded(project.name) }"
          >
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.technologies.slice(0, isExpanded(project.name) ? undefined : 5)"
              :key="tech"
              class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {{ tech }}
            </span>
          </div>

          <div v-if="isExpanded(project.name)" class="mt-4 pt-4 border-t">
            <h4 class="font-semibold text-gray-900 mb-2">主要职责:</h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li
                v-for="(resp, idx) in project.responsibilities"
                :key="idx"
                class="flex items-start"
              >
                <span class="mr-2">•</span>
                <span>{{ resp }}</span>
              </li>
            </ul>
          </div>

          <button class="text-primary-600 text-sm mt-2 hover:text-primary-700">
            {{ isExpanded(project.name) ? '收起' : '查看详情' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '~/data/projects'

const selectedCategory = ref('全部')
const expandedProjects = ref<Set<string>>(new Set())

const categories = ['全部', '可视化', '教育平台', '组件库', '小程序', 'GIS', '微前端']

const filteredProjects = computed(() => {
  if (selectedCategory.value === '全部') {
    return projects
  }
  return projects.filter(p => p.category.includes(selectedCategory.value))
})

const isExpanded = (name: string) => expandedProjects.value.has(name)

const toggleExpand = (name: string) => {
  if (expandedProjects.value.has(name)) {
    expandedProjects.value.delete(name)
  } else {
    expandedProjects.value.add(name)
  }
}
</script>
