# Portfolio Profesional - Tech Noir

Portafolio profesional para Ingeniero en Sistemas con estética Tech-Noir (Cyberpunk elegante).

## 🚀 Stack Tecnológico

- **Core:** Nuxt 4 (última versión estable)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS + CSS Variables para efectos de neón
- **3D/Gráficos:** TresJS (ecosistema Three.js para Vue) para visualización de skills
- **Iconos:** Nuxt Icon
- **Backend:** Nuxt Nitro (Server Routes) para API de terminal interactiva
- **Despliegue:** Docker (Multi-stage build optimizado)

## 🎨 Características

### Diseño Tech-Noir
- Paleta oscura con acentos neón (Green #00ff9d, Cyan #00f3ff, Purple #bc13fe)
- Efectos Glassmorphism en paneles y tarjetas
- Grid cibernético animado en el fondo
- Tipografías: 'Fira Code' (código) y 'Outfit' (UI)

### Componentes Interactivos

#### 1. **TechSphere** (Nube 3D)
Visualización 3D interactiva de tecnologías usando Three.js que reacciona al movimiento del mouse.

#### 2. **TheTerminal** (Consola Interactiva)
Terminal funcional en la esquina inferior derecha con comandos:
- `help` - Lista de comandos disponibles
- `about` - Información del ingeniero
- `stack` - Stack tecnológico
- `projects` - Lista de proyectos
- `contact` - Información de contacto
- `clear` - Limpiar terminal
- `date` - Fecha actual

#### 3. **ProjectCard**
Tarjetas de proyectos con preview de código y hover effects.

### Proyectos Destacados

1. **ControlCE** - Sistema POS y gestión de eventos (Django, Vue.js, PostgreSQL)
2. **CoffeeConnect** - Gestión de inventarios para restauración (Django REST, Vue.js, Docker)
3. **Parqueo Público** - Automatización de estacionamientos (Django, Bootstrap)
4. **Control Flota** - Administración logística (Django, Celery, Redis)

### Sección de Seguridad

Destacando expertise en:
- Hardening de Servidores (Linux/Windows)
- Implementación ISO 27001 y Framework NIST
- Auditoría de infraestructura y redes

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 20+
- npm o pnpm

### Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de producción
npm run preview
```

## 🐳 Docker Deployment

### Build y Run Local

```bash
# Build imagen
docker build -t portfolio-nuxt .

# Run contenedor
docker run -p 3000:3000 portfolio-nuxt
```

### Deploy en Railway

1. Conecta tu repositorio a Railway
2. Railway detectará automáticamente el Dockerfile
3. Configura las variables de entorno si es necesario
4. Deploy automático en cada push

## 📁 Estructura del Proyecto

```
portfolio-nuxt/
├── assets/
│   └── css/
│       └── main.css          # Estilos globales y clases personalizadas
├── components/
│   ├── ProjectCard.vue       # Tarjeta de proyecto
│   ├── TheTerminal.vue       # Terminal interactiva
│   └── TechSphere.vue        # Visualización 3D de skills
├── composables/
│   └── useProjects.ts        # Datos de proyectos
├── server/
│   └── api/
│       └── terminal.post.ts  # API para comandos de terminal
├── app.vue                   # Componente principal
├── nuxt.config.ts            # Configuración de Nuxt
├── tailwind.config.ts        # Configuración de Tailwind
├── Dockerfile                # Multi-stage Docker build
└── .dockerignore
```

## 🎯 Configuración de Tailwind

Colores personalizados Tech-Noir:
- `bg-bg`: #050505 (Fondo principal)
- `text-neonGreen`: #00ff9d (Acento verde neón)
- `text-neonBlue`: #00f3ff (Acento cyan)
- `text-neonPurple`: #bc13fe (Acento púrpura)

## 🔧 API Routes

### POST /api/terminal

Procesa comandos de la terminal interactiva.

**Request:**
```json
{
  "command": "help"
}
```

**Response:**
```json
{
  "output": ["Lista de comandos..."],
  "isError": false
}
```

## 📝 Personalización

### Actualizar Proyectos
Edita `composables/useProjects.ts` para agregar o modificar proyectos.

### Modificar Comandos de Terminal
Edita `server/api/terminal.post.ts` para agregar nuevos comandos.

### Cambiar Tecnologías en 3D
Edita el array `skills` en `components/TechSphere.vue`.

## 🚢 Production Build

El Dockerfile multi-stage optimiza la imagen final:
- Etapa 1: Instala dependencias
- Etapa 2: Construye la aplicación
- Etapa 3: Imagen de producción mínima con usuario non-root

**Tamaño final:** ~150-200MB (Alpine Linux + Node 20)

## 📄 Licencia


## 👤 Autor

