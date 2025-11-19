<template>
  <div class="glass-card rounded-xl overflow-hidden group cursor-pointer">
    <!-- Code Preview Header -->
    <div class="h-48 bg-gray-900 relative overflow-hidden border-b border-white/5">
      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      <div class="p-4 font-mono text-xs opacity-50 whitespace-pre-line" :class="project.codeColor">
        {{ project.codeSnippet }}
      </div>
      <div class="absolute bottom-4 left-4 z-20">
        <span class="px-2 py-1 text-black text-xs font-bold rounded" :class="project.categoryColor">
          {{ project.category }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-2xl font-bold text-white group-hover:text-neonBlue transition-colors mb-2">
        {{ project.title }}
      </h3>
      <p class="text-gray-400 text-sm mb-4">
        {{ project.description }}
      </p>

      <!-- Tech Stack Tags -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="tech in project.stack"
          :key="tech"
          class="text-xs border border-gray-700 px-2 py-1 rounded text-gray-300 hover:border-neonGreen hover:text-neonGreen transition-colors"
        >
          {{ tech }}
        </span>
      </div>

      <a href="#" class="text-neonBlue text-sm font-mono hover:underline inline-flex items-center gap-2">
        Ver Detalles
        <span class="group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/composables/useProjects'

defineProps<{
  project: Project
}>()
</script>
