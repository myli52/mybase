<template>
  <section id="contact" class="py-20 bg-gray-50">
    <div class="max-w-container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-gray-900 mb-12">
        联系方式
      </h2>

      <div class="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-sm">
        <div class="space-y-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-600">邮箱</p>
              <a :href="`mailto:${profile.email}`" class="text-lg font-medium text-gray-900 hover:text-primary-600">
                {{ profile.email }}
              </a>
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-600">所在地</p>
              <p class="text-lg font-medium text-gray-900">{{ profile.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'
</script>
