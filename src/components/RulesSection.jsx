import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['700']
})

export default function RulesSection() {
    return (
      <section className="mb-8 md:mb-12 max-w-[95%] sm:max-w-[85%] md:max-w-4xl mx-auto space-y-8 sm:space-y-12 md:space-y-16 p-2 sm:p-4">
        {/* About Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-ubuntu/20 to-arch/20 rounded-lg md:rounded-xl blur-md md:blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative backdrop-blur-sm bg-black/40 p-4 sm:p-6 md:p-8 rounded-lg md:rounded-xl border border-white/10 hover:border-ubuntu/30 transition-all">
            <div className="absolute -left-2 sm:-left-3 md:-left-4 -top-2 sm:-top-3 md:-top-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-black rounded-lg flex items-center justify-center border border-ubuntu">
              <span className="text-ubuntu font-mono text-base sm:text-lg md:text-xl">01</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-white pl-6 sm:pl-7 md:pl-8">
              About HackSource
            </h2>
            <div className="space-y-3 sm:space-y-4 md:space-y-6 text-gray-300">
              {[
                "Welcome to THE Open Source Festival of BITS Dubai!",
                "HackSource aims to simulate on a smaller scale, the beautiful world of Open Source Programming",
                "Build, contribute and make your resume standout",
                "Become a contributing member in the thriving Tech Community here at BITS Dubai!",
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3 md:gap-4 group/item">
                  <span className="text-ubuntu text-lg sm:text-xl md:text-2xl group-hover/item:text-arch transition-colors">⚡</span>
                  <p className="pt-0.5 sm:pt-1 text-sm sm:text-base md:text-lg">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Rules Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-arch/20 to-ubuntu/20 rounded-lg md:rounded-xl blur-md md:blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative backdrop-blur-sm bg-black/40 p-4 sm:p-6 md:p-8 rounded-lg md:rounded-xl border border-white/10 hover:border-arch/30 transition-all">
            <div className="absolute -left-2 sm:-left-3 md:-left-4 -top-2 sm:-top-3 md:-top-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-black rounded-lg flex items-center justify-center border border-arch">
              <span className="text-arch font-mono text-base sm:text-lg md:text-xl">02</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-white pl-6 sm:pl-7 md:pl-8">
              Competition Rules
            </h2>
            <div className="space-y-3 sm:space-y-4 md:space-y-6 text-gray-300">
              {[
                "Exclusive and free to all BITS Pilani Dubai students",
                "All projects must be hosted on public GitHub repositories",
                "Complete creative freedom - build any project that inspires you",
                "You get the choice to be a contributor or a creator or both!",
                "Contribute actively to other participants' projects",
                "Submit individual projects while encouraging collaborative development",
                "Projects must commence after February 15th - repositories with earlier commit history will be disqualified",
                "Competition concludes before semester finals - incomplete projects are okay given progress has been made",
                "Extra recognition for consistent contribution patterns and active GitHub presence"
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3 md:gap-4 group/item">
                  <span className="text-arch text-lg sm:text-xl md:text-2xl group-hover/item:text-ubuntu transition-colors">✦</span>
                  <p className="pt-0.5 sm:pt-1 text-sm sm:text-base md:text-lg">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Prizes Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-ubuntu/20 to-arch/20 rounded-lg md:rounded-xl blur-md md:blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative backdrop-blur-sm bg-black/40 p-4 sm:p-6 md:p-8 rounded-lg md:rounded-xl border border-white/10 hover:border-ubuntu/30 transition-all">
            <div className="absolute -left-2 sm:-left-3 md:-left-4 -top-2 sm:-top-3 md:-top-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-black rounded-lg flex items-center justify-center border border-ubuntu">
              <span className="text-ubuntu font-mono text-base sm:text-lg md:text-xl">03</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-white pl-6 sm:pl-7 md:pl-8">
              Prizes
            </h2>
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 group/item">
              <span className="text-ubuntu text-lg sm:text-xl md:text-2xl group-hover/item:text-arch transition-colors">🏆</span>
              <p className="pt-0.5 sm:pt-1 text-sm sm:text-base md:text-lg text-gray-300">
              Top 3 projects and outstanding contributors will receive great prizes! Stay tuned for exciting announcements 👀
              </p>
            </div>
          </div>
        </div>
        <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-arch/20 to-ubuntu/20 rounded-lg md:rounded-xl blur-md md:blur-xl group-hover:blur-2xl transition-all duration-300"></div>
        <div className="relative backdrop-blur-sm bg-black/40 p-4 sm:p-6 md:p-8 rounded-lg md:rounded-xl border border-white/10 hover:border-arch/30 transition-all">
          <div className="absolute -left-2 sm:-left-3 md:-left-4 -top-2 sm:-top-3 md:-top-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-black rounded-lg flex items-center justify-center border border-arch">
            <span className="text-arch font-mono text-base sm:text-lg md:text-xl">04</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-white pl-6 sm:pl-7 md:pl-8">
            Learning Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            {/* Git & GitHub */}
            <div className="space-y-3">
              <h3 className="text-ubuntu font-semibold text-lg">Git & GitHub</h3>
              <div className="space-y-2">
                {[
                  ["Git Basics", "https://git-scm.com/book/en/v2"],
                  ["GitHub Learning Lab", "https://skills.github.com"],
                  ["Interactive Git Tutorial", "https://learngitbranching.js.org"],
                ].map(([text, url], index) => (
                  <div key={index} className="flex items-center gap-2 group/item">
                    <span className="text-arch text-lg group-hover/item:text-ubuntu">→</span>
                    <a 
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-ubuntu transition-colors"
                    >
                      {text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Open Source */}
            <div className="space-y-3">
              <h3 className="text-ubuntu font-semibold text-lg">Open Source</h3>
              <div className="space-y-2">
                {[
                  ["First Contributions", "https://firstcontributions.github.io"],
                  ["Open Source Guides", "https://opensource.guide"],
                  ["Good First Issues", "https://goodfirstissues.com"],
                ].map(([text, url], index) => (
                  <div key={index} className="flex items-center gap-2 group/item">
                    <span className="text-arch text-lg group-hover/item:text-ubuntu">→</span>
                    <a 
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-ubuntu transition-colors"
                    >
                      {text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Documentation */}
            <div className="space-y-3">
              <h3 className="text-ubuntu font-semibold text-lg">Documentation</h3>
              <div className="space-y-2">
                {[
                  ["Writing Good Docs", "https://www.writethedocs.org/guide"],
                  ["Markdown Guide", "https://www.markdownguide.org"],
                  ["GitHub Docs", "https://docs.github.com"],
                ].map(([text, url], index) => (
                  <div key={index} className="flex items-center gap-2 group/item">
                    <span className="text-arch text-lg group-hover/item:text-ubuntu">→</span>
                    <a 
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-ubuntu transition-colors"
                    >
                      {text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Community */}
            <div className="space-y-3">
              <h3 className="text-ubuntu font-semibold text-lg">Community</h3>
              <div className="space-y-2">
                {[
                  ["Dev.to Open Source", "https://dev.to/t/opensource"],
                  ["GitHub Discussions", "https://github.com/discussions"],
                  ["Open Source Friday", "https://opensourcefriday.com"],
                ].map(([text, url], index) => (
                  <div key={index} className="flex items-center gap-2 group/item">
                    <span className="text-arch text-lg group-hover/item:text-ubuntu">→</span>
                    <a 
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-ubuntu transition-colors"
                    >
                      {text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 md:mt-12">
        <Link 
          href="/register" 
          className={`${jetbrains.className} 
            relative text-white border border-white 
            px-8 py-2 text-xl
            hover:text-arch hover:border-arch 
            hover:scale-110 hover:bg-black
            transition-all duration-300 rounded-lg
            animate-gradient-x-shadow`}>
          Register Now
        </Link>
      </div>
    </section>
  );
}
  