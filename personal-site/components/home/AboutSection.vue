<template>
  <section id="about" class="py-20 bg-white">
    <div class="max-w-container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-gray-900 mb-12">
        个人简介
      </h2>

      <div class="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-sm">
        <div class="space-y-4">
          <div class="flex items-start">
            <span class="text-gray-600 w-24 flex-shrink-0">姓名</span>
            <span class="text-gray-900 font-medium">{{ profile.name }}</span>
          </div>
          <div class="flex items-start">
            <span class="text-gray-600 w-24 flex-shrink-0">职业定位</span>
            <span class="text-gray-900 font-medium">{{ profile.title }}</span>
          </div>
          <div class="flex items-start">
            <span class="text-gray-600 w-24 flex-shrink-0">教育背景</span>
            <span class="text-gray-900">
              {{ profile.education.school }}，{{ profile.education.major }}，{{ profile.education.degree }}
            </span>
          </div>
          <div class="flex items-start">
            <span class="text-gray-600 w-24 flex-shrink-0">语言能力</span>
            <span class="text-gray-900">{{ profile.languages.join('、') }}</span>
          </div>
          <div class="flex items-start">
            <span class="text-gray-600 w-24 flex-shrink-0">所在城市</span>
            <span class="text-gray-900">{{ profile.location }}</span>
          </div>
          <div class="flex items-start">
            <span class="text-gray-600 w-24 flex-shrink-0">邮箱</span>
            <a
              :href="`mailto:${profile.email}`"
              class="text-primary-600 hover:text-primary-700"
            >
              {{ profile.email }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'
</script>
