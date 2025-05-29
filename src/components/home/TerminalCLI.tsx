'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const TerminalCLI = () => {
  const [input, setInput] = useState('')
  const [lines, setLines] = useState<string[]>([
    'Welcome to DRN Terminal. Type a command:',
    "• request project – to request freelance work",
    "• generate resume – to generate your portfolio",
  ])

  const fakeResponses: Record<string, string> = {
    'request project': 'Redirecting to /contact...',
    'generate resume': 'Opening your resume...',
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const response =
        fakeResponses[input.trim().toLowerCase()] ||
        'Command not recognized.'
      setLines([...lines, '$ ' + input, response])
      if (input.trim() === 'request project') window.location.href = '/contact'
      if (input.trim() === 'generate resume') window.location.href = '/resume'
      setInput('')
    }
  }

  return (
    <div className="bg-black text-green-500 font-mono rounded-xl p-6 min-h-[60vh] max-w-4xl mx-auto shadow-xl border border-white/10">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="whitespace-pre-wrap"
        >
          {line}
        </motion.div>
      ))}
      <div className="flex">
        <span className="mr-2">$</span>
        <input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          className="bg-transparent outline-none text-green-400 w-full"
        />
      </div>
    </div>
  )
}

export default TerminalCLI

