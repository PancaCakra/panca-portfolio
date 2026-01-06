interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  onClick?: () => void;
}

export function ProjectCard({ image, title, description, category, onClick }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1.5 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Case Study
        </div>
      </div>
      <h3 className="font-semibold mb-1 group-hover:text-gray-600 transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <span className="inline-block mt-2 text-xs text-gray-500 uppercase tracking-wider">{category}</span>
    </div>
  );
}