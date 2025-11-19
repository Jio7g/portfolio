export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const command = body.command?.toLowerCase().trim()

  if (!command) {
    return {
      output: 'No command provided',
      isError: true
    }
  }

  // Command handlers
  const commands: Record<string, string | string[]> = {
    help: [
      'Available commands:',
      '  help      - Show this help message',
      '  about     - Information about the engineer',
      '  stack     - Display technology stack',
      '  projects  - List all projects',
      '  contact   - Get contact information',
      '  clear     - Clear terminal screen',
      '  date      - Show current date'
    ],
    about: 'Ingeniero en Sistemas y Desarrollador Web. Con enfoque en codigo seguro y arquitectura de software.',
    stack: [
      'Frontend: Vue.js, Nuxt.js, Tailwind CSS',
      'Backend: Python, Django, PHP, Laravel',
      'Database: PostgreSQL, MySQL, Redis',
      'DevOps: Docker, Linux, Git',
      'Security: ISO 27001, NIST Framework'
    ],
    projects: [
      '1. ControlCE - Sistema POS y gestión de eventos',
      '2. CoffeeConnect - Gestión de inventarios para restauración',
      '3. Parqueo Público - Automatización de estacionamientos',
      '4. Control Flota - Administración logística'
    ],
    contact: [
      'Email: cramos07g@proton.me',
      'GitHub: github.com/jiodev',
      'LinkedIn: linkedin.com/in/cramosj7',
      ' '
    ],
    date: new Date().toString()
  }

  if (commands[command]) {
    return {
      output: commands[command],
      isError: false
    }
  }

  return {
    output: `Command not found: ${command}. Type 'help' for available commands.`,
    isError: true
  }
})
