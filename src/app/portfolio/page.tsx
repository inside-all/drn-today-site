import { PortfolioGrid } from '@/components/home/PortfolioGrid'

export default function PortfolioPage() {
  return (
    <div className='p-4'>
      <h1 className='text-3xl font-orbitron text-primary mb-6'>My Projects</h1>
      <PortfolioGrid />
    </div>
  )
}
