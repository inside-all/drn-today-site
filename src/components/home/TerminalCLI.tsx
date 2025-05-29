'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const fakeResponses: Record<string, string> = {
  'generate resume': 'Opening ResumeBuilder...',
  'launch ai-agent': 'Deploying intelligent agent...',
  'seo-analyze site.com': 'Analyzing SEO metrics for site.com...',
  'request project': 'Redirecting to contact form...',
}

export function TerminalCLI() {
  const [lines, setLines] = useState<string[]>([])
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const response = fakeResponses[input.trim().toLowerCase()] || 'Command not recognized.'
      setLines([...lines, $ , response])
      if (input.trim() === 'request project') window.location.href = '/contact'
      if (input.trim() === 'generate resume') window.location.href = '/resume'
      setInput('')
    }
  }

  return (
    <div className='bg-black text-green-500 font-mono rounded-xl p-6 min-h-[60vh] max-w-4xl mx-auto shadow-xl border border-white/10'>
      {lines.map((line, i) => (
        <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='whitespace-pre-wrap'>
          {line}
        </motion.div>
      ))}
      <div className='flex items-center gap-2'>
        <span>$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          className='bg-transparent border-none outline-none text-green-400 w-full animate-pulse caret-green-300'
          autoFocus
        />
      </div>
    </div>
  )
}
