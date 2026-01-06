import { ArrowRight } from 'lucide-react';

export interface WorkProject {
  id: number;
  image: string;
  title: string;
  description: string;
  role: string;
  tools: string;
  type: string;
}

interface WorkProjectCardProps {
  project: WorkProject;
  onClick: () => void;
}

export function WorkProjectCard({ project, onClick }: WorkProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Project Info */}
      <div className="p-6 lg:p-8">
        <h3 className="text-2xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-6">{project.description}</p>

        {/* Meta Info */}
        <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-100">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Role</p>
            <p className="text-sm font-medium">{project.role}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Tools</p>
            <p className="text-sm font-medium">{project.tools}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Type</p>
            <p className="text-sm font-medium">{project.type}</p>
          </div>
        </div>

        {/* View Case Study Button */}
        <button className="inline-flex items-center gap-2 text-gray-900 font-medium group-hover:gap-3 transition-all">
          View Case Study
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
