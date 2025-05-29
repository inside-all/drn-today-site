import { Brain, Code, BarChart3 } from 'lucide-react'

const services = [
  {
    title: 'AI / ML Services',
    icon: Brain,
    description: 'Custom LLMs, data pipelines, intelligent agents.',
  },
  {
    title: 'Full Stack Builds',
    icon: Code,
    description: 'Advanced apps built with modern stacks like Next.js, Supabase, and more.',
  },
  {
    title: 'SEO Growth Tools',
    icon: BarChart3,
    description: 'Automated keyword tools, site analyzers, and performance dashboards.',
  },
]

export function Services() {
  return (
    <section className='grid md:grid-cols-3 gap-6 px-4'>
      {services.map(({ title, icon: Icon, description }) => (
        <div key={title} className='p-6 rounded-xl bg-glass backdrop-blur border border-white/10 text-white hover:border-primary hover:scale-[1.02] transition'>
          <Icon className='h-8 w-8 text-primary mb-4' />
          <h3 className='font-semibold text-lg'>{title}</h3>
          <p className='text-sm text-white/70 mt-2'>{description}</p>
        </div>
      ))}
    </section>
  )
}
