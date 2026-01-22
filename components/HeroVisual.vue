<template>
  <div class="hero-visual">
    <!-- Central Glowing Core -->
    <div class="central-core">
      <div class="core-inner">
        <Icon name="mdi:code-braces-box" class="text-5xl text-neonBlue" />
      </div>
      <div class="core-ring ring-1" />
      <div class="core-ring ring-2" />
      <div class="core-ring ring-3" />
    </div>

    <!-- Orbiting Tech Icons -->
    <div class="orbit orbit-1">
      <div 
        v-for="(tech, index) in orbit1" 
        :key="tech.name"
        class="orbit-item"
        :style="{ '--index': index, '--total': orbit1.length }"
      >
        <div class="tech-node group">
          <Icon :name="tech.icon" class="text-2xl" />
          <span class="tech-label">{{ tech.name }}</span>
        </div>
      </div>
    </div>

    <div class="orbit orbit-2">
      <div 
        v-for="(tech, index) in orbit2" 
        :key="tech.name"
        class="orbit-item"
        :style="{ '--index': index, '--total': orbit2.length }"
      >
        <div class="tech-node group">
          <Icon :name="tech.icon" class="text-xl" />
          <span class="tech-label">{{ tech.name }}</span>
        </div>
      </div>
    </div>

    <div class="orbit orbit-3">
      <div 
        v-for="(tech, index) in orbit3" 
        :key="tech.name"
        class="orbit-item"
        :style="{ '--index': index, '--total': orbit3.length }"
      >
        <div class="tech-node group">
          <Icon :name="tech.icon" class="text-lg" />
          <span class="tech-label">{{ tech.name }}</span>
        </div>
      </div>
    </div>

    <!-- Floating Particles -->
    <div class="particles">
      <div v-for="n in 20" :key="n" class="particle" :style="getParticleStyle(n)" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tech {
  name: string
  icon: string
}

// Inner orbit - Core technologies
const orbit1: Tech[] = [
  { name: 'Vue.js', icon: 'logos:vue' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Docker', icon: 'logos:docker-icon' },
]

// Middle orbit - Frameworks
const orbit2: Tech[] = [
  { name: 'Nuxt', icon: 'logos:nuxt-icon' },
  { name: 'Django', icon: 'logos:django-icon' },
  { name: 'Laravel', icon: 'logos:laravel' },
  { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
  { name: 'PostgreSQL', icon: 'logos:postgresql' },
]

// Outer orbit - Tools & Others
const orbit3: Tech[] = [
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'Linux', icon: 'logos:linux-tux' },
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'HTML5', icon: 'logos:html-5' },
  { name: 'CSS3', icon: 'logos:css-3' },
  { name: 'PHP', icon: 'logos:php' },
]

function getParticleStyle(n: number) {
  const delay = Math.random() * 5
  const duration = 3 + Math.random() * 4
  const size = 2 + Math.random() * 3
  const x = Math.random() * 100
  const y = Math.random() * 100
  
  return {
    '--delay': `${delay}s`,
    '--duration': `${duration}s`,
    '--size': `${size}px`,
    left: `${x}%`,
    top: `${y}%`,
  }
}
</script>

<style scoped>
.hero-visual {
  position: absolute;
  top: 0;
  right: 0;
  width: 55%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
}

@media (max-width: 768px) {
  .hero-visual {
    width: 100%;
    height: 50vh;
    position: relative;
    opacity: 0.6;
  }
}

/* Central Core */
.central-core {
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.core-inner {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(0, 243, 255, 0.1) 0%, rgba(0, 255, 157, 0.1) 100%);
  border: 2px solid rgba(0, 243, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 0 30px rgba(0, 243, 255, 0.3),
    inset 0 0 20px rgba(0, 243, 255, 0.1);
  animation: pulse-core 3s ease-in-out infinite;
  z-index: 10;
}

.core-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid;
  animation: expand-ring 3s ease-out infinite;
}

.ring-1 {
  width: 100px;
  height: 100px;
  border-color: rgba(0, 243, 255, 0.4);
  animation-delay: 0s;
}

.ring-2 {
  width: 100px;
  height: 100px;
  border-color: rgba(0, 255, 157, 0.4);
  animation-delay: 1s;
}

.ring-3 {
  width: 100px;
  height: 100px;
  border-color: rgba(188, 19, 254, 0.4);
  animation-delay: 2s;
}

@keyframes pulse-core {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes expand-ring {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

/* Orbits */
.orbit {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  animation: rotate-orbit linear infinite;
}

.orbit-1 {
  width: 280px;
  height: 280px;
  animation-duration: 90s;
}

.orbit-2 {
  width: 420px;
  height: 420px;
  animation-duration: 120s;
  animation-direction: reverse;
}

.orbit-3 {
  width: 560px;
  height: 560px;
  animation-duration: 150s;
}

@keyframes rotate-orbit {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Orbit Items */
.orbit-item {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform: rotate(calc(360deg / var(--total) * var(--index)));
}

.orbit-1 .orbit-item .tech-node {
  transform: translateX(140px) rotate(calc(-360deg / var(--total) * var(--index)));
  animation: counter-rotate 90s linear infinite;
}

.orbit-2 .orbit-item .tech-node {
  transform: translateX(210px) rotate(calc(-360deg / var(--total) * var(--index)));
  animation: counter-rotate-reverse 120s linear infinite;
}

.orbit-3 .orbit-item .tech-node {
  transform: translateX(280px) rotate(calc(-360deg / var(--total) * var(--index)));
  animation: counter-rotate 150s linear infinite;
}

@keyframes counter-rotate {
  from { transform: translateX(inherit) rotate(0deg); }
  to { transform: translateX(inherit) rotate(-360deg); }
}

@keyframes counter-rotate-reverse {
  from { transform: translateX(inherit) rotate(0deg); }
  to { transform: translateX(inherit) rotate(360deg); }
}

/* Tech Node */
.tech-node {
  position: relative;
  width: 50px;
  height: 50px;
  background: rgba(10, 10, 15, 0.9);
  border: 1px solid rgba(0, 243, 255, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  pointer-events: auto;
  cursor: pointer;
}

/* Larger hover area for easier interaction */
.tech-node::before {
  content: '';
  position: absolute;
  inset: -15px;
  border-radius: 20px;
}

.orbit-2 .tech-node {
  width: 45px;
  height: 45px;
  border-color: rgba(0, 255, 157, 0.3);
}

.orbit-3 .tech-node {
  width: 40px;
  height: 40px;
  border-color: rgba(188, 19, 254, 0.3);
}

.tech-node:hover {
  transform: scale(1.3) !important;
  border-color: #00f3ff;
  box-shadow: 0 0 25px rgba(0, 243, 255, 0.6);
  z-index: 100;
}

/* Pause ALL animations when hovering on a tech node */
.tech-node:hover ~ .orbit,
.orbit-item:hover ~ .orbit-item,
.hero-visual:has(.tech-node:hover) .orbit {
  animation-play-state: paused !important;
}

.hero-visual:has(.tech-node:hover) .tech-node {
  animation-play-state: paused !important;
}

.tech-label {
  position: absolute;
  bottom: -28px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Fira Code', monospace;
  font-size: 11px;
  color: #fff;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: rgba(0, 0, 0, 0.9);
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid rgba(0, 243, 255, 0.3);
  pointer-events: none;
}

.tech-node:hover .tech-label {
  opacity: 1;
}

/* Floating Particles */
.particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle, rgba(0, 243, 255, 0.8) 0%, transparent 70%);
  border-radius: 50%;
  animation: float-particle var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
  opacity: 0;
}

@keyframes float-particle {
  0%, 100% {
    opacity: 0;
    transform: translateY(0) scale(0);
  }
  10% {
    opacity: 0.8;
    transform: translateY(-10px) scale(1);
  }
  90% {
    opacity: 0.8;
    transform: translateY(-80px) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px) scale(0);
  }
}

/* Pause animation on hover for better interaction */
.hero-visual:hover .orbit {
  animation-play-state: paused;
}

.hero-visual:hover .tech-node {
  animation-play-state: paused;
}
</style>
