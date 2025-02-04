import { JetBrains_Mono } from 'next/font/google'
import Link from 'next/link'

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['700']
})

export default function LandingTitle() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">

      {/* Main content */}
      <div className="relative w-full max-w-4xl mx-auto px-8">
        {/* Main title */}
        <h1 className={`${jetbrains.className} 
          text-4xl md:text-5xl lg:text-7xl xl:text-8xl
          font-bold text-transparent bg-clip-text 
          animate-gradient-x
          tracking-[.2em] md:tracking-[.25em]
          hover:scale-105 transition-transform duration-300
          text-center whitespace-nowrap overflow-visible w-full`}
          style={{
            backgroundImage: 'linear-gradient(to right, #E95420, #1793D1, #E95420)',
            backgroundSize: '200% 100%',
          }}>
          HACKSOURCE
        </h1>
        <h3 className={`${jetbrains.className} 
          text-3xl md:text-4xl lg:text-6xl xl:text-7xl
          font-bold text-transparent bg-clip-text 
          animate-gradient-x
          tracking-[.2em] md:tracking-[.25em]
          hover:scale-105 transition-transform duration-300
          text-center whitespace-nowrap overflow-visible w-full`}
          style={{
            backgroundImage: 'linear-gradient(to right, #1793D1, #E95420, #1793D1)',
            backgroundSize: '200% 100%',
          }}>
          2025
        </h3>

        {/* Registration button */}
        <Link 
          href="/rules" 
          className={`${jetbrains.className} 
            absolute left-1/2 -translate-x-1/2
            mt-16 text-white border border-white 
            px-8 py-2 text-sm lg:text-xl
            hover:text-arch hover:border-arch 
            hover:scale-110 hover:bg-black
            transition-all duration-300 rounded-lg
            animate-gradient-x-shadow`}>
          About
        </Link>
      </div>
    </div>
  );
}
