<template>
  <div class="min-h-screen">
    <!-- Cyber Grid Background -->
    <div class="cyber-grid" />

    <!-- Navigation -->
    <nav class="fixed w-full z-50 glass-panel border-b border-white/5">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="text-2xl font-bold font-mono text-white tracking-tighter">
          <span class="text-neonBlue">&lt;</span>Jio<span class="text-neonGreen">Dev</span><span class="text-neonBlue">/&gt;</span>
        </div>
        <div class="hidden md:flex space-x-8 text-sm font-mono">
          <a href="#about" class="hover:text-neonGreen transition-colors">./PERFIL</a>
          <a href="#skills" class="hover:text-neonBlue transition-colors">./STACK</a>
          <a href="#projects" class="hover:text-neonPurple transition-colors">./PROYECTOS</a>
          <a href="#security" class="hover:text-red-500 transition-colors">./SEGURIDAD</a>
          <a href="#contact" class="hover:text-cyan-400 transition-colors">./CONTACTO</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative h-screen flex items-center pt-20 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 z-10 pointer-events-none">
        <div class="flex flex-col justify-center pointer-events-auto">
          <div class="inline-block px-3 py-1 mb-4 text-xs font-mono text-neonGreen border border-neonGreen/30 rounded-full w-fit bg-green-900/10">
            SYSTEMS_INITIALIZED_v2.0
          </div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Ingeniero de <br>
            <span class="gradient-text text-glow-blue">Sistemas & Cloud</span>
          </h1>
          <p class="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            Diseño y construyo sistemas que funcionan. Me apasiona transformar ideas complejas en soluciones técnicas sólidas, desde la infraestructura hasta el código final.
          </p>
          <div class="flex gap-4">
            <a href="#projects" class="px-8 py-3 bg-neonBlue/10 border border-neonBlue text-neonBlue font-mono hover:bg-neonBlue hover:text-black transition-all duration-300 rounded-sm group">
              Ver Proyectos <Icon name="mdi:arrow-right" class="ml-2 group-hover:translate-x-1 transition-transform inline-block" />
            </a>
            <a href="#contact" class="px-8 py-3 border border-white/10 text-white font-mono hover:bg-white/5 transition-all rounded-sm">
              Contactar
            </a>
          </div>
          <div class="mt-4">
            <a 
              href="/pdf/CarlosJorvannyRamosGuerraCV.pdf" 
              download
              target="_blank"
              type="application/pdf"
              class="inline-flex items-center gap-2 px-8 py-3 bg-neonPurple/10 border border-neonPurple text-neonPurple font-mono hover:bg-neonPurple hover:text-black transition-all duration-300 rounded-sm group"
            >
              <Icon name="mdi:download" class="group-hover:animate-bounce" />
              Descargar CV
            </a>
          </div>
        </div>
      </div>
      <ClientOnly>
        <HeroVisual />
      </ClientOnly>
    </header>

    <!-- About Section -->
    <section id="about" class="py-24 relative z-10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="glass-card p-8 rounded-xl relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-50 transition-opacity">
              <Icon name="mdi:server" class="text-6xl text-neonGreen" />
            </div>
            <h3 class="text-xl font-mono text-neonGreen mb-2">01. Infraestructura</h3>
            <p class="text-gray-400 text-sm">
              Administración de servidores Linux/Windows. Despliegue de contenedores Docker y orquestación de servicios.
            </p>
          </div>

          <div class="glass-card p-8 rounded-xl relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-50 transition-opacity">
              <Icon name="mdi:code-tags" class="text-6xl text-neonBlue" />
            </div>
            <h3 class="text-xl font-mono text-neonBlue mb-2">02. Desarrollo Web</h3>
            <p class="text-gray-400 text-sm">
              Full Stack Developer con Django, Laravel, Vue.js y Tailwind. Creación de sistemas de gestión complejos (ERP/POS).
            </p>
          </div>

          <div class="glass-card p-8 rounded-xl relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-50 transition-opacity">
              <Icon name="mdi:shield-check" class="text-6xl text-neonPurple" />
            </div>
            <h3 class="text-xl font-mono text-neonPurple mb-2">03. Seguridad & Normativas</h3>
            <p class="text-gray-400 text-sm">
              Implementación de estándares ISO 27001 y NIST. Auditoría de seguridad y hardening de servidores.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-neonBlue/5 to-transparent" />

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-2">
            <span class="text-neonBlue">./</span> Stack Tecnológico
          </h2>
          <p class="text-gray-500 font-mono text-sm">Herramientas y tecnologías que domino</p>
        </div>

        <!-- Tech Stack with Categories -->
        <TechStack />

      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-24 bg-black/50 relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-end justify-between mb-12">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-2">
              <span class="text-neonBlue">./</span> Proyectos Destacados
            </h2>
            <p class="text-gray-500 font-mono text-sm">Sistemas desarrollados e implementados</p>
          </div>
          <div class="hidden md:block h-px bg-gray-800 flex-grow ml-8" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section id="security" class="py-24 relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neonGreen to-transparent opacity-30" />

      <div class="max-w-7xl mx-auto px-6">
        <div class="glass-panel p-10 rounded-2xl border border-neonGreen/20">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center gap-2 text-neonGreen mb-4 font-mono">
                <Icon name="mdi:lock" />
                <span>SECURE_INFRASTRUCTURE</span>
              </div>
              <h2 class="text-3xl font-bold mb-6">Cumplimiento Normativo & Seguridad</h2>
              <p class="text-gray-400 mb-6">
                Diseño arquitecturas que no solo son escalables, sino que cumplen rigurosamente con estándares internacionales de seguridad de la información.
              </p>

              <ul class="space-y-4 mb-8">
                <li class="flex items-start gap-3">
                  <Icon name="mdi:check-circle" class="text-neonGreen mt-1 flex-shrink-0" />
                  <div>
                    <strong class="text-white block">ISO 27001</strong>
                    <span class="text-sm text-gray-500">Implementación de controles de seguridad de la información y gestión de riesgos.</span>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="mdi:check-circle" class="text-neonGreen mt-1 flex-shrink-0" />
                  <div>
                    <strong class="text-white block">NIST Framework</strong>
                    <span class="text-sm text-gray-500">Adhesión a estándares del National Institute of Standards and Technology para ciberseguridad.</span>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <Icon name="mdi:check-circle" class="text-neonGreen mt-1 flex-shrink-0" />
                  <div>
                    <strong class="text-white block">Hardening de Servidores</strong>
                    <span class="text-sm text-gray-500">Configuración segura de entornos Linux/Windows y segmentación de redes.</span>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Terminal Preview -->
            <div class="bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm h-full shadow-lg shadow-neonGreen/5">
              <div class="flex gap-2 mb-4 border-b border-gray-800 pb-2">
                <div class="w-3 h-3 rounded-full bg-red-500" />
                <div class="w-3 h-3 rounded-full bg-yellow-500" />
                <div class="w-3 h-3 rounded-full bg-green-500" />
                <span class="ml-auto text-gray-600 text-xs">root@server:~</span>
              </div>
              <div class="space-y-2 text-gray-300">
                <p><span class="text-neonGreen">root@server:~$</span> docker ps</p>
                <p class="text-gray-500">CONTAINER ID   IMAGE          STATUS    PORTS</p>
                <p>a1b2c3d4e5     nginx:alpine   Up 2 days 0.0.0.0:80->80/tcp</p>
                <p>f6g7h8i9j0     postgres:14    Up 2 days 5432/tcp</p>
                <br>
                <p><span class="text-neonGreen">root@server:~$</span> ./security_audit.sh</p>
                <p class="text-yellow-400">[INFO] Checking firewall rules...</p>
                <p class="text-green-400">[PASS] Port 22 restricted</p>
                <p class="text-green-400">[PASS] SSL/TLS Certificates valid</p>
                <p class="text-neonBlue">[DONE] System Secure.</p>
                <p><span class="text-neonGreen">root@server:~$</span> <span class="cursor-blink">_</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-end justify-between mb-12">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-2">
              <span class="text-neonGreen">./</span> Conectemos
            </h2>
            <p class="text-gray-500 font-mono text-sm">Siempre abierto a nuevos proyectos y colaboraciones</p>
          </div>
          <div class="hidden md:block h-px bg-gray-800 flex-grow ml-8" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Contact Info Cards -->
          <div class="space-y-4">
            <div class="glass-card p-6 rounded-xl group hover:border-neonBlue transition-all">
              <div class="flex items-start gap-4">
                <div class="p-3 bg-neonBlue/10 rounded-lg group-hover:bg-neonBlue/20 transition-colors">
                  <Icon name="mdi:email" class="text-2xl text-neonBlue" />
                </div>
                <div class="flex-grow">
                  <h3 class="text-white font-mono mb-1">Email</h3>
                  <a href="mailto:cramos07g@proton.me" class="text-gray-400 hover:text-neonBlue transition-colors text-sm">
                    cramos07g@proton.me
                  </a>
                </div>
              </div>
            </div>

            <div class="glass-card p-6 rounded-xl group hover:border-neonGreen transition-all">
              <div class="flex items-start gap-4">
                <div class="p-3 bg-neonGreen/10 rounded-lg group-hover:bg-neonGreen/20 transition-colors">
                  <Icon name="mdi:github" class="text-2xl text-neonGreen" />
                </div>
                <div class="flex-grow">
                  <h3 class="text-white font-mono mb-1">GitHub</h3>
                  <a href="https://github.com/Jio7g" target="_blank" class="text-gray-400 hover:text-neonGreen transition-colors text-sm">
                    github.com/Jio7g
                  </a>
                </div>
              </div>
            </div>

            <div class="glass-card p-6 rounded-xl group hover:border-neonPurple transition-all">
              <div class="flex items-start gap-4">
                <div class="p-3 bg-neonPurple/10 rounded-lg group-hover:bg-neonPurple/20 transition-colors">
                  <Icon name="mdi:linkedin" class="text-2xl text-neonPurple" />
                </div>
                <div class="flex-grow">
                  <h3 class="text-white font-mono mb-1">LinkedIn</h3>
                  <a href="https://linkedin.com/in/cramosj7" target="_blank" class="text-gray-400 hover:text-neonPurple transition-colors text-sm">
                    linkedin.com/in/cramosj7
                  </a>
                </div>
              </div>
            </div>

            <div class="glass-card p-6 rounded-xl group hover:border-cyan-400 transition-all">
              <div class="flex items-start gap-4">
                <div class="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors">
                  <Icon name="mdi:map-marker" class="text-2xl text-cyan-400" />
                </div>
                <div class="flex-grow">
                  <h3 class="text-white font-mono mb-1">Ubicación</h3>
                  <p class="text-gray-400 text-sm">Disponible para proyectos remotos</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="glass-panel p-8 rounded-2xl border border-gray-800">
            <form class="space-y-6" @submit.prevent="handleContactSubmit">
              <div>
                <label for="name" class="block text-sm font-mono text-gray-400 mb-2">
                  <span class="text-neonGreen">$</span> nombre
                </label>
                <input
                  id="name"
                  v-model="contactForm.name"
                  type="text"
                  required
                  class="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-neonGreen focus:outline-none transition-colors font-mono"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-mono text-gray-400 mb-2">
                  <span class="text-neonBlue">$</span> email
                </label>
                <input
                  id="email"
                  v-model="contactForm.email"
                  type="email"
                  required
                  class="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-neonBlue focus:outline-none transition-colors font-mono"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label for="subject" class="block text-sm font-mono text-gray-400 mb-2">
                  <span class="text-neonPurple">$</span> asunto
                </label>
                <input
                  id="subject"
                  v-model="contactForm.subject"
                  type="text"
                  required
                  class="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-neonPurple focus:outline-none transition-colors font-mono"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-mono text-gray-400 mb-2">
                  <span class="text-yellow-400">$</span> mensaje
                </label>
                <textarea
                  id="message"
                  v-model="contactForm.message"
                  required
                  rows="4"
                  class="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors font-mono resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                class="w-full px-8 py-3 bg-gradient-to-r from-neonBlue to-neonGreen text-black font-mono font-bold rounded-lg hover:shadow-lg hover:shadow-neonGreen/50 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Enviar Mensaje</span>
                <Icon name="mdi:send" class="group-hover:translate-x-1 transition-transform" />
              </button>

              <p v-if="submitMessage" class="text-center text-sm font-mono" :class="submitSuccess ? 'text-neonGreen' : 'text-red-500'">
                {{ submitMessage }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-gray-800 py-8">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-gray-500 font-mono text-sm">
            <span class="text-neonBlue">&lt;</span>JioDev<span class="text-neonBlue">/&gt;</span> © 2025
          </div>
          <div class="flex gap-6">
            <a href="https://github.com/jiodev" target="_blank" class="text-gray-500 hover:text-neonGreen transition-colors">
              <Icon name="mdi:github" class="text-xl" />
            </a>
            <a href="https://linkedin.com/in/jiodev" target="_blank" class="text-gray-500 hover:text-neonBlue transition-colors">
              <Icon name="mdi:linkedin" class="text-xl" />
            </a>
            <a href="mailto:contact@jiodev.com" class="text-gray-500 hover:text-neonPurple transition-colors">
              <Icon name="mdi:email" class="text-xl" />
            </a>
          </div>
          <div class="text-gray-600 font-mono text-xs">
            Built with Nuxt 4 & TailwindCSS
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
const { projects } = useProjects()

// Contact form state
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitMessage = ref('')
const submitSuccess = ref(false)

const handleContactSubmit = async () => {
  submitMessage.value = ''

  try {
    // Aquí puedes integrar con un servicio de email como EmailJS, Formspree, o tu propio endpoint
    // Por ahora, simulamos el envío
    await new Promise(resolve => setTimeout(resolve, 1000))

    submitMessage.value = '¡Mensaje enviado! Te contactaré pronto.'
    submitSuccess.value = true

    // Limpiar formulario
    contactForm.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    // Limpiar mensaje después de 5 segundos
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  } catch (error) {
    submitMessage.value = 'Error al enviar. Intenta nuevamente.'
    submitSuccess.value = false
  }
}
</script>
