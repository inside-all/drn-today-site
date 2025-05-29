'use client'

import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'XAU/USD ML Trading Bot',
    tech: ['Python', 'MetaTrader 5', 'Telegram API'],
    tags: ['AI', 'Finance'],
    github: 'https://github.com/your-xau-bot',
    demo: '',
  },
  {
    title: 'AI Resume Generator',
    tech: ['Next.js', 'OpenAI API', 'pdf-lib'],
    tags: ['AI', 'Tools'],
    github: 'https://github.com/your-resume-tool',
    demo: '',
  },
  {
    title: 'SEO Analyzer Pro',
    tech: ['Node.js', 'Replit', 'React'],
    tags: ['SEO'],
    github: '',
    demo: 'https://seo-analyzer.drn.today',
  },
]

export function PortfolioGrid() {
  return (
    <div className='grid md:grid-cols-2 gap-6'>
      {projects.map((project, idx) => (
        <div key={idx} className='bg-glass p-6 rounded-xl border border-white/10 backdrop-blur-md hover:scale-[1.02] transition shadow-xl'>
          <h3 className='text-lg font-semibold text-white'>{project.title}</h3>
          <div className='text-sm text-white/70 mt-1'>{project.tech.join(', ')}</div>
          <div className='flex gap-2 mt-3 flex-wrap'>
            {project.tags.map((tag) => (
              <span key={tag} className='text-xs bg-primary/20 px-2 py-1 rounded-full text-primary'>
                {tag}
              </span>
            ))}
          </div>
          <div className='flex gap-3 mt-4'>
            {project.github && (
              <a href={project.github} target='_blank' title='GitHub'>
                <Github className='h-5 w-5 text-white hover:text-primary' />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target='_blank' title='Live Demo'>
                <ExternalLink className='h-5 w-5 text-white hover:text-primary' />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
