<template>
  <div class="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 hidden md:block">
    <!-- Toggle Button (always visible) -->
    <button
      v-if="isHidden"
      class="console-toggle-btn glass-card px-4 py-3 rounded-lg border border-neonGreen/30 hover:border-neonGreen transition-all duration-300 flex items-center gap-2 group"
      @click="showTerminal"
    >
      <Icon name="mdi:console" class="text-neonGreen text-xl" />
      <span class="text-xs font-mono text-gray-400 group-hover:text-neonGreen transition-colors">Abrir Consola</span>
    </button>

    <!-- Terminal Window -->
    <div
      v-else
      class="w-full max-w-md"
    >
      <div
        class="glass-panel rounded-lg border border-gray-700 shadow-2xl overflow-hidden transition-all duration-300"
        :class="{ 'translate-y-60 opacity-50': isMinimized }"
      >
        <!-- Header -->
        <div
          class="bg-gray-900 px-4 py-2 flex justify-between items-center"
        >
          <span class="text-xs font-mono text-gray-400 cursor-pointer" @click="toggleMinimize">User Interactive Console</span>
          <div class="flex gap-3">
            <button 
              class="text-gray-500 hover:text-yellow-400 transition-colors" 
              title="Minimizar"
              @click="toggleMinimize"
            >
              <Icon name="mdi:minus" class="text-sm" />
            </button>
            <button 
              class="text-gray-500 hover:text-red-400 transition-colors" 
              title="Cerrar consola"
              @click="hideTerminal"
            >
              <Icon name="mdi:close" class="text-sm" />
            </button>
          </div>
        </div>

        <!-- Terminal Output -->
        <div ref="outputRef" class="bg-black/90 p-4 h-64 overflow-y-auto font-mono text-xs md:text-sm">
          <div class="text-gray-500 mb-2">Welcome to Portfolio CLI [Version 1.0.2]</div>
          <div class="text-gray-500 mb-4">Type 'help' to see available commands.</div>

          <!-- History -->
          <div v-for="(entry, idx) in history" :key="idx" class="mb-2">
            <div class="flex">
              <span class="text-neonGreen mr-2">visitor@portfolio:~$</span>
              <span class="text-white">{{ entry.command }}</span>
            </div>
            <div
              v-if="entry.response"
              class="ml-4 mt-1"
              :class="entry.isError ? 'text-red-500' : 'text-neonBlue'"
            >
              <div v-if="Array.isArray(entry.response)">
                <div v-for="(line, i) in entry.response" :key="i">{{ line }}</div>
              </div>
              <div v-else>=> {{ entry.response }}</div>
            </div>
          </div>

          <!-- Input Line -->
          <div class="flex mt-2">
            <span class="text-neonGreen mr-2">visitor@portfolio:~$</span>
            <input
              v-model="currentInput"
              type="text"
              class="bg-transparent border-none outline-none text-white flex-grow"
              autocomplete="off"
              @keydown.enter="handleCommand"
            />
            <span class="cursor-blink">_</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface HistoryEntry {
  command: string
  response: string | string[]
  isError: boolean
}

const isHidden = ref(false)
const isMinimized = ref(false)
const currentInput = ref('')
const history = ref<HistoryEntry[]>([])
const outputRef = ref<HTMLElement | null>(null)

const showTerminal = () => {
  isHidden.value = false
  isMinimized.value = false
}

const hideTerminal = () => {
  isHidden.value = true
}

const toggleMinimize = () => {
  isMinimized.value = !isMinimized.value
}

const handleCommand = async () => {
  const command = currentInput.value.toLowerCase().trim()

  if (!command) return

  // Add command to history
  const entry: HistoryEntry = {
    command: currentInput.value,
    response: '',
    isError: false
  }

  if (command === 'clear') {
    history.value = []
    currentInput.value = ''
    return
  }

  try {
    // Call API endpoint
    const response = await $fetch('/api/terminal', {
      method: 'POST',
      body: { command }
    })

    entry.response = response.output
    entry.isError = response.isError || false
  } catch (error) {
    entry.response = `Error: Failed to execute command`
    entry.isError = true
  }

  history.value.push(entry)
  currentInput.value = ''

  // Scroll to bottom
  nextTick(() => {
    if (outputRef.value) {
      outputRef.value.scrollTop = outputRef.value.scrollHeight
    }
  })
}
</script>

<style scoped>
.console-toggle-btn {
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(0, 255, 157, 0.2);
  }
  50% {
    box-shadow: 0 0 15px rgba(0, 255, 157, 0.4);
  }
}
</style>
