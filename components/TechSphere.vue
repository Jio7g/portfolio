<template>
  <div ref="canvasContainer" class="canvas-container" />
</template>

<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import * as THREE from 'three'

const canvasContainer = ref<HTMLElement | null>(null)

const skills = [
  'Python', 'Django', 'PHP', 'Laravel', 'Vue.js',
  'Tailwind', 'HTML5', 'CSS3', 'JavaScript', 'Git',
  'Linux', 'Docker', 'Windows', 'SQL', 'NIST', 'ISO 27001'
]

onMounted(() => {
  if (!canvasContainer.value) return

  const container = canvasContainer.value
  const scene = new THREE.Scene()

  // Camera setup
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  )
  camera.position.z = 25

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(container.clientWidth, container.clientHeight)
  container.appendChild(renderer.domElement)

  // Create group for all sprites
  const group = new THREE.Group()
  scene.add(group)

  // Create text sprites for each skill
  skills.forEach((skill, i) => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    if (!context) return

    canvas.width = 512
    canvas.height = 256

    context.font = 'Bold 60px "Fira Code"'
    context.fillStyle = i % 2 === 0 ? '#00ff9d' : '#00f3ff'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText(skill, canvas.width / 2, canvas.height / 2)

    const texture = new THREE.CanvasTexture(canvas)
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true })
    const sprite = new THREE.Sprite(material)

    // Fibonacci sphere distribution
    const phi = Math.acos(-1 + (2 * i) / skills.length)
    const theta = Math.sqrt(skills.length * Math.PI) * phi
    const radius = 12

    sprite.position.x = radius * Math.cos(theta) * Math.sin(phi)
    sprite.position.y = radius * Math.sin(theta) * Math.sin(phi)
    sprite.position.z = radius * Math.cos(phi)

    sprite.scale.set(10, 5, 1)

    group.add(sprite)
  })

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  // Mouse interaction
  let mouseX = 0
  let mouseY = 0

  const onMouseMove = (event: MouseEvent) => {
    mouseX = (event.clientX - window.innerWidth / 2) * 0.001
    mouseY = (event.clientY - window.innerHeight / 2) * 0.001
  }

  document.addEventListener('mousemove', onMouseMove)

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate)

    group.rotation.y += 0.002
    group.rotation.x += 0.001

    group.rotation.y += mouseX * 0.05
    group.rotation.x += mouseY * 0.05

    renderer.render(scene, camera)
  }

  animate()

  // Resize handler
  const onResize = () => {
    const width = container.clientWidth
    const height = container.clientHeight
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }

  window.addEventListener('resize', onResize)

  // Cleanup
  onBeforeUnmount(() => {
    document.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('resize', onResize)
    renderer.dispose()
    container.removeChild(renderer.domElement)
  })
})
</script>
