'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function Hero() {
  const [text, setText] = useState('')
  const fullText = 'echo \"Welcome to the Future.\"'

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, i++))
      if (i > fullText.length) clearInterval(interval)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className='flex flex-col items-center justify-center min-h-[60vh] text-center gap-6'>
      <pre className='text-xl md:text-2xl font-mono text-primary bg-white/5 p-4 rounded-xl'>
        {text}
      </pre>
      <p className='text-lg max-w-xl text-white/80'>
        DRN.today is the future of freelancing. Built with code. Powered by intelligence.
      </p>
      <div className='flex gap-4 flex-wrap justify-center'>
        <Link href='/terminal' className='bg-primary text-black px-6 py-2 rounded-lg font-bold hover:scale-105 transition'>Launch Terminal</Link>
        <Link href='/contact' className='border border-white px-6 py-2 rounded-lg text-white hover:bg-white/10 transition'>Request Quote</Link>
        <a href='https://forms.gle' target='_blank' className='text-white/70 underline'>Apply as Freelancer</a>
      </div>
    </section>
  )
}
