export function AboutPreview() {
  return (
    <section id="about" className="bg-white py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div className="space-y-8">
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            I'm a UI Designer with a technical background in Informatics Engineering, 
            passionate about crafting visually clean and user-friendly digital products.
          </p>
          
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 border border-[#6366f1] text-[#6366f1] rounded-lg hover:bg-[#6366f1] hover:text-white transition-colors"
          >
            More About Me
          </a>
        </div>
      </div>
    </section>
  );
}
