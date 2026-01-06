interface ExperienceCardProps {
  role: string;
  organization: string;
  description: string;
  period: string;
}

export function ExperienceCard({ role, organization, description, period }: ExperienceCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">{role}</h3>
          <p className="text-gray-600">{organization}</p>
        </div>
        <span className="text-sm text-gray-500 whitespace-nowrap">{period}</span>
      </div>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}
