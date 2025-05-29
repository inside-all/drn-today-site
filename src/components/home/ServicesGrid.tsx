import { Brain, Code2, BarChart3 } from 'lucide-react'

const services = [
  {
    title: 'AI / ML App Development',
    icon: Brain,
    details: 'LLMs, data pipelines, intelligent agents, ML dashboards, and offline-first models.',
  },
  {
    title: 'Full Stack Web Solutions',
    icon: Code2,
    details: 'Modern apps built using Next.js, Supabase, Vercel, Tailwind, and cloud backends.',
  },
  {
    title: 'SEO Automation + Optimization',
    icon: BarChart3,
    details: 'Technical SEO, keyword automation tools, content strategy, growth tracking.',
  },
]

export function ServicesGrid() {
  return (
    <div className='grid md:grid-cols-3 gap-6'>
      {services.map(({ title, icon: Icon, details }) => (
        <div key={title} className='p-6 rounded-xl bg-glass backdrop-blur border border-white/10 text-white hover:scale-[1.02] transition shadow-xl'>
          <Icon className='h-7 w-7 text-primary mb-3' />
          <h3 className='text-lg font-semibold'>{title}</h3>
          <p className='text-sm text-white/70 mt-2'>{details}</p>
        </div>
      ))}
    </div>
  )
}
