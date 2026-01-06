export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <p className="text-muted-foreground">Hi, I'm Panca</p>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl tracking-tight">
              UI Designer crafting clean and intuitive digital interfaces
            </h1>
            
            <p className="text-muted-foreground max-w-lg">
              Focused on visual clarity, usability, and meaningful user experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#6366f1] text-white rounded-lg hover:bg-[#4f46e5] transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 text-foreground hover:text-[#6366f1] transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Content - Gradient Visual */}
          <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
            {/* Gradient Circle 1 */}
            <div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              }}
            />
            
            {/* Gradient Circle 2 */}
            <div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
              style={{
                background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
              }}
            />

            {/* Accent Circle */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full opacity-10 blur-2xl"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
