interface SkillTagProps {
  name: string;
}

export function SkillTag({ name }: SkillTagProps) {
  return (
    <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
      {name}
    </span>
  );
}
