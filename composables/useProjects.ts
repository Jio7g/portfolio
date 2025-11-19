export interface Project {
  id: number
  title: string
  description: string
  stack: string[]
  category: string
  categoryColor: string
  codeSnippet: string
  codeColor: string
}

export const useProjects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'ControlCE',
      description: 'Sistema integral para control de caja, registro de eventos y gestión de sucursales. Arquitectura robusta multi-usuario.',
      stack: ['Python', 'Django', 'Vue.js', 'PostgreSQL'],
      category: 'POS System',
      categoryColor: 'bg-neonBlue',
      codeSnippet: `> import django.db.models
> class Evento(models.Model):
>   titulo = models.CharField(...)
>   fecha = models.DateTimeField(...)`,
      codeColor: 'text-green-500'
    },
    {
      id: 2,
      title: 'CoffeeConnect',
      description: 'Plataforma de gestión de recetas fusionadas y control de inventarios para restauración. Cálculo de costos en tiempo real.',
      stack: ['Django REST', 'Vue.js', 'Docker'],
      category: 'Inventory',
      categoryColor: 'bg-orange-500',
      codeSnippet: `> npm run build
> Compiling Vue components...
> RecetaDetail.vue ... OK
> InventarioView.vue ... OK`,
      codeColor: 'text-orange-500'
    },
    {
      id: 3,
      title: 'Parqueo Público',
      description: 'Sistema de automatización para gestión de estacionamientos. Control de tickets, tarifas dinámicas y reportes financieros.',
      stack: ['Python', 'Django Templates', 'Bootstrap'],
      category: 'Management',
      categoryColor: 'bg-blue-500',
      codeSnippet: `> SELECT * FROM vehicles_vehicle
> WHERE entry_time > NOW() - INTERVAL '1 day'
> ... 142 rows returned`,
      codeColor: 'text-blue-500'
    },
    {
      id: 4,
      title: 'Control Flota',
      description: 'Software para administración logística: gestión de vehículos, asignación de choferes, control de combustible y mantenimiento.',
      stack: ['Django', 'Celery', 'Redis'],
      category: 'Logistics',
      categoryColor: 'bg-purple-500',
      codeSnippet: `> Celery task started: reportes.generate_pdf
> Processing fleet metrics...
> PDF Report Generated Successfully`,
      codeColor: 'text-purple-500'
    }
  ]

  return {
    projects
  }
}
