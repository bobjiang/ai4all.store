export default function WhoIsThisFor() {
  const profiles = [
    {
      role: 'Founders',
      description: 'You have a product idea but no technical co-founder',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#wg-blue)" strokeWidth={1.5}>
          <defs><linearGradient id="wg-blue" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#818cf8" /></linearGradient></defs>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
    },
    {
      role: 'Product Managers',
      description: 'You want to prototype and validate ideas without waiting for engineering',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#wg-purple)" strokeWidth={1.5}>
          <defs><linearGradient id="wg-purple" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#c084fc" /></linearGradient></defs>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
    },
    {
      role: 'Solo Creators',
      description: 'You want to build and launch your own digital products',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#wg-violet)" strokeWidth={1.5}>
          <defs><linearGradient id="wg-violet" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#c084fc" /><stop offset="100%" stopColor="#f472b6" /></linearGradient></defs>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      role: 'Team Leaders',
      description: 'You want your team to leverage AI for faster product development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="url(#wg-pink)" strokeWidth={1.5}>
          <defs><linearGradient id="wg-pink" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#f472b6" /></linearGradient></defs>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 px-4 bg-primary-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12 tracking-tight">
          Who This Is For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-primary-900 border border-primary-700 rounded-xl p-6 text-center"
            >
              <div className="flex justify-center mb-4">{profile.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{profile.role}</h3>
              <p className="text-sm text-slate-400">{profile.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xl font-bold text-white">
          No coding experience required.
        </p>
      </div>
    </section>
  )
}
