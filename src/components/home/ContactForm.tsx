'use client'

import { useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const res = await fetch('YOUR_FORM_ENDPOINT_HERE', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
    if (res.ok) {
      setStatus('Message sent successfully!')
      form.reset()
    } else {
      setStatus('Failed to send message.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4 max-w-xl mx-auto text-white'>
      <input name='name' required placeholder='Your Name' className='w-full p-3 bg-glass border border-white/10 rounded-md' />
      <input name='email' type='email' required placeholder='Your Email' className='w-full p-3 bg-glass border border-white/10 rounded-md' />
      <textarea name='message' rows={4} required placeholder='Your Message' className='w-full p-3 bg-glass border border-white/10 rounded-md' />
      <button type='submit' className='bg-primary text-black px-6 py-2 rounded-md font-bold hover:scale-105 transition'>Send</button>
      {status && <p className='text-sm text-green-400 mt-2'>{status}</p>}
      <div className='text-right'>
        <a href='https://forms.gle/YOUR_GOOGLE_FORM_LINK' target='_blank' className='text-white/60 underline text-sm'>Apply as Freelancer</a>
      </div>
    </form>
  )
}
