import Card from '../ui/Card'

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card variant='feature' className='p-8'>
      <div className='w-12 h-12 bg-[var(--color-icon-bg)] rounded-xl flex items-center justify-center mb-4 shadow-md'>
        <Icon className='w-6 h-6 text-[var(--color-button-bg)]' />
      </div>
      <h3 className='text-xl font-semibold text-[var(--color-text-dark)] mb-3'>
        {title}
      </h3>
      <p className='text-sm text-[var(--color-text-muted)] leading-relaxed'>
        {description}
      </p>
    </Card>
  )
}

export default FeatureCard
