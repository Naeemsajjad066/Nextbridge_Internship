import FeatureCard from './FeatureCard'

function Features() {
  const features = [
    {
      icon: ({ className }) => (
        <svg
          className={className}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
          />
        </svg>
      ),
      title: 'Easy Documentation',
      description:
        'Create beautiful documents with our intuitive editor. Format, organize, and share your work effortlessly.',
    },
    {
      icon: ({ className }) => (
        <svg
          className={className}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      ),
      title: 'Team Collaboration',
      description:
        'Work together in real-time. Invite teammates, share feedback, and build something amazing together.',
    },
    {
      icon: ({ className }) => (
        <svg
          className={className}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
          />
        </svg>
      ),
      title: 'Secure & Private',
      description:
        'Your data is encrypted and secure. We take privacy seriously and protect your information at all times.',
    },
  ]

  return (
    <div className='mt-16 sm:mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  )
}

export default Features
