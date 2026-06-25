<template>
  <section id="skills" class="py-20 bg-gray-50">
    <div class="max-w-container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-gray-900 mb-12">
        技术能力
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="group in skills"
          :key="group.title"
          class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            {{ group.title }}
          </h3>
          <p class="text-sm text-gray-600 mb-4 leading-relaxed">
            {{ group.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in group.skills"
              :key="skill"
              class="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skills } from '~/data/skills'
</script>
