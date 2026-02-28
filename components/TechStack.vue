<template>
  <div class="tech-stack-container">
    <!-- Category Tabs - Scrollable on mobile -->
    <div class="flex overflow-x-auto pb-2 mb-8 sm:mb-10 scrollbar-hide sm:flex-wrap sm:justify-center gap-2">
      <button
        v-for="category in categories"
        :key="category.id"
        class="tab-button font-mono text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg border transition-all duration-300 whitespace-nowrap flex-shrink-0"
        :class="[
          activeCategory === category.id
            ? `active border-${category.color} text-${category.color} bg-${category.color}/10 shadow-glow-${category.id}`
            : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
        ]"
        @click="setActiveCategory(category.id)"
      >
        <Icon :name="category.icon" class="inline-block mr-1 sm:mr-2" />
        {{ category.label }}
      </button>
    </div>

    <!-- Tech Cards Grid -->
    <TransitionGroup
      name="tech-cards"
      tag="div"
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
    >
      <div
        v-for="tech in filteredTechnologies"
        :key="tech.name"
        class="tech-card glass-card p-5 rounded-xl group cursor-pointer"
        :class="`hover:border-${getCategoryColor(tech.category)}`"
      >
        <!-- Icon Container -->
        <div
          class="icon-container w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300"
          :class="`bg-${getCategoryColor(tech.category)}/10 group-hover:bg-${getCategoryColor(tech.category)}/20`"
        >
          <Icon
            :name="tech.icon"
            class="text-3xl transition-all duration-300"
            :class="`text-${getCategoryColor(tech.category)}`"
          />
        </div>

        <!-- Tech Name -->
        <h4
          class="text-center font-mono text-sm text-gray-300 group-hover:text-white transition-colors duration-300"
        >
          {{ tech.name }}
        </h4>

        <!-- Category Badge -->
        <div
          class="mt-2 text-center"
        >
          <span
            class="text-xs font-mono px-2 py-0.5 rounded-full transition-all duration-300"
            :class="`text-${getCategoryColor(tech.category)}/70 bg-${getCategoryColor(tech.category)}/5`"
          >
            {{ getCategoryLabel(tech.category) }}
          </span>
        </div>

        <!-- Glow Effect on Hover -->
        <div
          class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          :class="`tech-glow-${tech.category}`"
        />
      </div>
    </TransitionGroup>

    <!-- Empty State -->
    <div
      v-if="filteredTechnologies.length === 0"
      class="text-center py-12 text-gray-500 font-mono"
    >
      <Icon name="mdi:code-brackets" class="text-4xl mb-3 opacity-50" />
      <p>No se encontraron tecnologías</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Technology {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'devops' | 'database'
}

interface Category {
  id: 'all' | 'frontend' | 'backend' | 'devops' | 'database'
  label: string
  icon: string
  color: 'neonBlue' | 'neonGreen' | 'neonPurple' | 'cyan-400'
}

// Categories configuration
const categories: Category[] = [
  { id: 'all', label: 'Todos', icon: 'mdi:view-grid', color: 'neonBlue' },
  { id: 'frontend', label: 'Frontend', icon: 'mdi:palette', color: 'neonBlue' },
  { id: 'backend', label: 'Backend', icon: 'mdi:server', color: 'neonGreen' },
  { id: 'devops', label: 'DevOps', icon: 'mdi:docker', color: 'neonPurple' },
  { id: 'database', label: 'Base de Datos', icon: 'mdi:database', color: 'cyan-400' }
]

// Technologies data
const technologies: Technology[] = [
  // Frontend
  { name: 'Vue.js', icon: 'logos:vue', category: 'frontend' },
  { name: 'Nuxt', icon: 'logos:nuxt-icon', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', category: 'frontend' },
  { name: 'HTML5', icon: 'logos:html-5', category: 'frontend' },
  { name: 'CSS3', icon: 'logos:css-3', category: 'frontend' },
  { name: 'JavaScript', icon: 'logos:javascript', category: 'frontend' },
  { name: 'TypeScript', icon: 'logos:typescript-icon', category: 'frontend' },

  // Backend
  { name: 'Python', icon: 'logos:python', category: 'backend' },
  { name: 'Django', icon: 'logos:django-icon', category: 'backend' },
  { name: 'PHP', icon: 'logos:php', category: 'backend' },
  { name: 'Laravel', icon: 'logos:laravel', category: 'backend' },

  // DevOps & Cloud
  { name: 'Docker', icon: 'logos:docker-icon', category: 'devops' },
  { name: 'Linux', icon: 'logos:linux-tux', category: 'devops' },
  { name: 'Git', icon: 'logos:git-icon', category: 'devops' },

  // Database
  { name: 'PostgreSQL', icon: 'logos:postgresql', category: 'database' },
  { name: 'MySQL', icon: 'logos:mysql', category: 'database' },
  { name: 'Redis', icon: 'logos:redis', category: 'database' }
]

// State
const activeCategory = ref<Category['id']>('all')

// Computed
const filteredTechnologies = computed(() => {
  if (activeCategory.value === 'all') {
    return technologies
  }
  return technologies.filter(tech => tech.category === activeCategory.value)
})

// Methods
function setActiveCategory(categoryId: Category['id']) {
  activeCategory.value = categoryId
}

function getCategoryColor(category: Technology['category']): string {
  const colorMap: Record<Technology['category'], string> = {
    frontend: 'neonBlue',
    backend: 'neonGreen',
    devops: 'neonPurple',
    database: 'cyan-400'
  }
  return colorMap[category]
}

function getCategoryLabel(category: Technology['category']): string {
  const labelMap: Record<Technology['category'], string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    devops: 'DevOps',
    database: 'Database'
  }
  return labelMap[category]
}
</script>

<style scoped>
/* Tab Button Active States */
.tab-button.active {
  position: relative;
}

.shadow-glow-all,
.shadow-glow-frontend {
  box-shadow: 0 0 20px rgba(0, 243, 255, 0.3), inset 0 0 15px rgba(0, 243, 255, 0.1);
}

.shadow-glow-backend {
  box-shadow: 0 0 20px rgba(0, 255, 157, 0.3), inset 0 0 15px rgba(0, 255, 157, 0.1);
}

.shadow-glow-devops {
  box-shadow: 0 0 20px rgba(188, 19, 254, 0.3), inset 0 0 15px rgba(188, 19, 254, 0.1);
}

.shadow-glow-database {
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 15px rgba(34, 211, 238, 0.1);
}

.shadow-glow-security {
  box-shadow: 0 0 20px rgba(248, 113, 113, 0.3), inset 0 0 15px rgba(248, 113, 113, 0.1);
}

/* Tech Card Glow Effects */
.tech-card {
  position: relative;
  overflow: hidden;
}

.tech-glow-frontend {
  box-shadow: inset 0 0 30px rgba(0, 243, 255, 0.1);
}

.tech-glow-backend {
  box-shadow: inset 0 0 30px rgba(0, 255, 157, 0.1);
}

.tech-glow-devops {
  box-shadow: inset 0 0 30px rgba(188, 19, 254, 0.1);
}

.tech-glow-database {
  box-shadow: inset 0 0 30px rgba(34, 211, 238, 0.1);
}

.tech-glow-security {
  box-shadow: inset 0 0 30px rgba(248, 113, 113, 0.1);
}

/* Transition Group Animations */
.tech-cards-move,
.tech-cards-enter-active,
.tech-cards-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}

.tech-cards-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

.tech-cards-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(-20px);
}

.tech-cards-leave-active {
  position: absolute;
}

/* Icon Hover Animation */
.tech-card:hover .icon-container {
  transform: scale(1.1);
}

.tech-card:hover .icon-container .iconify {
  filter: drop-shadow(0 0 8px currentColor);
}

/* Pulse animation on hover */
@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

.tech-card:hover::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, currentColor, transparent, currentColor);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: xor;
  -webkit-mask-composite: xor;
  animation: pulse-glow 2s ease-in-out infinite;
  pointer-events: none;
}
</style>
