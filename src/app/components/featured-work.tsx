import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "UI Design / Website",
    image: "https://images.unsplash.com/photo-1725267196915-7700df784ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NzU1Njg2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Analytics Platform",
    description: "UI Design / Dashboard",
    image: "https://images.unsplash.com/photo-1748609278627-4b0e483b9b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NzYwNjMwMnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "UI Design / Mobile App",
    image: "https://images.unsplash.com/photo-1759505017950-25e0733b9e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3Njc2MDYzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function FeaturedWork() {
  return (
    <section id="work" className="bg-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="mb-12 lg:mb-16">Selected Work</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project) => (
            <a
              key={project.id}
              href="#"
              className="group block bg-white rounded-xl overflow-hidden border border-border hover:border-[#6366f1] transition-all hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3>{project.title}</h3>
                  <span className="inline-block px-3 py-1 bg-[#6366f1]/10 text-[#6366f1] rounded-full">
                    Case Study
                  </span>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
