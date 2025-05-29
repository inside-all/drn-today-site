'use client'

import { Sparkles, BarChart3, FileText, Bot } from 'lucide-react'

const tools = [
  {
    title: 'GPT SEO Generator',
    icon: Sparkles,
    description: 'Generate optimized blog titles, meta tags, and keyword-rich content using GPT.',
    url: '/tools/seo-generator',
  },
  {
    title: 'XAU/USD ML Bot Dashboard',
    icon: BarChart3,
    description: 'Visualize and track predictions, performance, and live trades from your gold trading bot.',
    url: '/tools/trading-dashboard',
  },
  {
    title: 'AI Resume Analyzer',
    icon: FileText,
    description: 'Upload resumes and receive intelligent feedback, keyword match, and suggestions.',
    url: '/tools/resume-analyzer',
  },
  {
    title: 'Keyword Rank Estimator',
    icon: Bot,
    description: 'Predict keyword rank potential based on search volume, difficulty, and intent.',
    url: '/tools/rank-estimator',
  },
]

export function ToolsGrid() {
  return (
    <div className='grid md:grid-cols-2 gap-6'>
      {tools.map((tool, idx) => (
        <a
          key={idx}
          href={tool.url}
          className='block bg-glass p-6 rounded-xl border border-white/10 backdrop-blur-md hover:scale-[1.02] transition shadow-xl text-white'
        >
          <tool.icon className='h-7 w-7 text-primary mb-3' />
          <h3 className='text-lg font-semibold'>{tool.title}</h3>
          <p className='text-sm text-white/70 mt-1'>{tool.description}</p>
        </a>
      ))}
    </div>
  )
}
