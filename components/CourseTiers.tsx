const tiers = [
  {
    name: 'Half-Day',
    descriptor: 'Intensive',
    price: '799',
    accent: 'sky',
    gradientFrom: 'from-sky-400',
    gradientTo: 'to-indigo-400',
    labelColor: 'text-sky-400',
    checkoutUrl: 'https://buy.stripe.com/6oU4gB3Wi7Fs5Rxa8y0gw08',
    detailsUrl: '/course-1',
    features: [
      'Ship a working app in the first 45 minutes',
      'AI-native mindset & Agent Manager model',
      'Prompt engineering (3 core techniques)',
      'Context engineering essentials',
      'Build & deploy from spec to live URL',
    ],
    featured: false,
  },
  {
    name: 'Full-Day',
    descriptor: 'Comprehensive',
    price: '999',
    accent: 'indigo',
    gradientFrom: 'from-indigo-400',
    gradientTo: 'to-violet-400',
    labelColor: 'text-indigo-400',
    checkoutUrl: 'https://buy.stripe.com/3cI14p3WiaREa7NbcC0gw09',
    detailsUrl: null,
    features: [
      'Everything in Half-Day',
      'Full PRD & specification writing',
      '5-technique prompt engineering framework',
      'Professional dev environment setup (Cursor, Git, Vercel)',
      'Build & deploy interactive multi-feature app',
    ],
    featured: true,
  },
  {
    name: 'Two-Day',
    descriptor: 'Complete',
    price: '1,799',
    accent: 'violet',
    gradientFrom: 'from-violet-400',
    gradientTo: 'to-pink-400',
    labelColor: 'text-violet-400',
    checkoutUrl: 'https://buy.stripe.com/dRm28takGbVI1Bh3Ka0gw0a',
    detailsUrl: null,
    features: [
      'Everything in Full-Day',
      'Rapid prototyping sprint (5 prototypes)',
      'Database & user authentication (Supabase)',
      'Payment processing (Stripe)',
      'Testing, QA & production deployment',
    ],
    featured: false,
  },
]

export default function CourseTiers() {
  return (
    <section id="courses" className="py-20 px-4 bg-primary-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4 tracking-tight">
          Choose Your Workshop
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Individual registration. Available in-person or online.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl p-8 text-center ${
                tier.featured
                  ? 'bg-gradient-to-b from-primary-800 to-primary-900 border-2 border-indigo-400 shadow-[0_0_30px_rgba(129,140,248,0.15)] md:scale-105 relative'
                  : 'bg-primary-900 border border-primary-700'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-indigo-400 to-violet-400 text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <p className={`text-xs uppercase tracking-[0.2em] ${tier.labelColor} font-semibold mb-2`}>
                {tier.descriptor}
              </p>
              <p className="text-3xl font-extrabold text-white">{tier.name}</p>

              <p className="text-3xl font-bold text-white mt-4 mb-1">${tier.price}</p>
              <p className="text-xs text-slate-500 mb-6">AUD / person</p>

              <ul className="text-left space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-400">
                    <span className={`${tier.labelColor} mr-2 mt-0.5 flex-shrink-0`}>&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={tier.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full bg-gradient-to-r ${tier.gradientFrom} ${tier.gradientTo} text-slate-900 font-bold py-3 px-6 rounded-lg text-sm hover:opacity-90 transition-opacity`}
              >
                Book Now
              </a>

              {tier.detailsUrl && (
                <a
                  href={tier.detailsUrl}
                  className={`block mt-3 text-xs ${tier.labelColor} hover:underline`}
                >
                  Learn more about {tier.name} &rarr;
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          Not sure which format is right for you?{' '}
          <a href="mailto:bob@ai4all.store" className="text-indigo-400 underline hover:text-indigo-300">
            Get in touch
          </a>{' '}
          and we&apos;ll help you decide.
        </p>
      </div>
    </section>
  )
}
