import { Hero } from '@/components/home/Hero'
import { Services } from '@/components/home/Services'

export default function HomePage() {
  return (
    <div className='space-y-12'>
      <Hero />
      <Services />
    </div>
  )
}
