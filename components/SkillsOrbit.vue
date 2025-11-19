<template>
  <div ref="containerRef" class="w-full h-full" />
</template>

<script setup lang="ts">
import * as THREE from 'three'

const containerRef = ref<HTMLElement | null>(null)

const skills = [
  { name: 'Python', color: '#3776ab', category: 'backend' },
  { name: 'Django', color: '#0c4b33', category: 'backend' },
  { name: 'PHP', color: '#777bb4', category: 'backend' },
  { name: 'Laravel', color: '#ff2d20', category: 'backend' },
  { name: 'Vue.js', color: '#42b883', category: 'frontend' },
  { name: 'Nuxt', color: '#00dc82', category: 'frontend' },
  { name: 'Tailwind', color: '#06b6d4', category: 'frontend' },
  { name: 'HTML5', color: '#e34f26', category: 'frontend' },
  { name: 'CSS3', color: '#1572b6', category: 'frontend' },
  { name: 'JavaScript', color: '#f7df1e', category: 'frontend' },
  { name: 'TypeScript', color: '#3178c6', category: 'frontend' },
  { name: 'Docker', color: '#2496ed', category: 'devops' },
  { name: 'Linux', color: '#fcc624', category: 'devops' },
  { name: 'Git', color: '#f05032', category: 'devops' },
  { name: 'PostgreSQL', color: '#336791', category: 'database' },
  { name: 'MySQL', color: '#4479a1', category: 'database' },
  { name: 'Redis', color: '#dc382d', category: 'database' },
  { name: 'ISO 27001', color: '#00ff9d', category: 'security' },
  { name: 'NIST', color: '#00f3ff', category: 'security' }
]

onMounted(() => {
  if (!containerRef.value) return

  const container = containerRef.value
  const scene = new THREE.Scene()

  // Camera setup
  const camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  )
  camera.position.z = 35

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setClearColor(0x000000, 0)
  container.appendChild(renderer.domElement)

  // Create particles/spheres for each skill
  const skillObjects: Array<{
    mesh: THREE.Mesh
    text: THREE.Sprite
    angle: number
    radius: number
    speed: number
    verticalOffset: number
  }> = []

  skills.forEach((skill, i) => {
    // Create sphere for skill
    const geometry = new THREE.SphereGeometry(0.8, 32, 32)
    const material = new THREE.MeshPhongMaterial({
      color: skill.color,
      emissive: skill.color,
      emissiveIntensity: 0.3,
      shininess: 100,
      transparent: true,
      opacity: 0.9
    })
    const sphere = new THREE.Mesh(geometry, material)

    // Create text sprite
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    if (context) {
      canvas.width = 512
      canvas.height = 128

      context.font = 'Bold 48px "Fira Code"'
      context.fillStyle = skill.color
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      context.fillText(skill.name, canvas.width / 2, canvas.height / 2)

      const texture = new THREE.CanvasTexture(canvas)
      const spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
        transparent: true
      })
      const sprite = new THREE.Sprite(spriteMaterial)
      sprite.scale.set(6, 1.5, 1)

      // Position in orbit
      const angle = (i / skills.length) * Math.PI * 2
      const radius = 12 + Math.random() * 8
      const verticalOffset = (Math.random() - 0.5) * 6

      sphere.position.x = Math.cos(angle) * radius
      sphere.position.z = Math.sin(angle) * radius
      sphere.position.y = verticalOffset

      sprite.position.copy(sphere.position)
      sprite.position.y += 1.5

      scene.add(sphere)
      scene.add(sprite)

      skillObjects.push({
        mesh: sphere,
        text: sprite,
        angle,
        radius,
        speed: 0.0003 + Math.random() * 0.0002,
        verticalOffset
      })
    }
  })

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
  scene.add(ambientLight)

  const pointLight1 = new THREE.PointLight(0x00ff9d, 1, 100)
  pointLight1.position.set(10, 10, 10)
  scene.add(pointLight1)

  const pointLight2 = new THREE.PointLight(0x00f3ff, 1, 100)
  pointLight2.position.set(-10, -10, 10)
  scene.add(pointLight2)

  // Mouse interaction
  let mouseX = 0
  let mouseY = 0
  let targetRotationY = 0
  let targetRotationX = 0

  const onMouseMove = (event: MouseEvent) => {
    mouseX = (event.clientX - window.innerWidth / 2) * 0.0003
    mouseY = (event.clientY - window.innerHeight / 2) * 0.0003
  }

  document.addEventListener('mousemove', onMouseMove)

  // Animation loop
  let time = 0
  const animate = () => {
    requestAnimationFrame(animate)
    time += 0.01

    // Rotate all skills in orbit
    skillObjects.forEach((obj, i) => {
      obj.angle += obj.speed

      obj.mesh.position.x = Math.cos(obj.angle) * obj.radius
      obj.mesh.position.z = Math.sin(obj.angle) * obj.radius
      obj.mesh.position.y = obj.verticalOffset + Math.sin(time + i) * 0.5

      obj.text.position.copy(obj.mesh.position)
      obj.text.position.y += 1.5

      // Rotate spheres
      obj.mesh.rotation.y += 0.01
      obj.mesh.rotation.x += 0.005
    })

    // Smooth camera rotation based on mouse
    targetRotationY += (mouseX - targetRotationY) * 0.05
    targetRotationX += (mouseY - targetRotationX) * 0.05

    scene.rotation.y = targetRotationY
    scene.rotation.x = targetRotationX * 0.3

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
    if (container.contains(renderer.domElement)) {
      container.removeChild(renderer.domElement)
    }
  })
})
</script>
