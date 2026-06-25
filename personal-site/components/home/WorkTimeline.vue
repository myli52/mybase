<template>
  <section id="experience" class="py-20 bg-white">
    <div class="max-w-container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-gray-900 mb-12">
        工作经历
      </h2>

      <div class="max-w-3xl mx-auto">
        <div class="space-y-8">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="relative pl-8 border-l-2 border-primary-200 pb-8 last:pb-0"
          >
            <div
              class="absolute -left-2.5 top-0 w-5 h-5 bg-primary-600 rounded-full border-4 border-white"
            ></div>
            <div class="bg-gray-50 rounded-lg p-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-semibold text-gray-900">
                  {{ exp.company }}
                </h3>
                <span class="text-sm text-gray-500">
                  {{ formatDate(exp.startDate) }} - {{ formatDate(exp.endDate) }}
                </span>
              </div>
              <p class="text-primary-600 font-medium mb-1">{{ exp.position }}</p>
              <p class="text-sm text-gray-600">{{ exp.industry }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experiences } from '~/data/experiences'

const formatDate = (date: string) => {
  return date.replace('-', '.')
}
</script>
