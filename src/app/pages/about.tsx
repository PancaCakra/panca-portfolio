import { SkillTag } from '../components/skill-tag';
import { ExperienceCard } from '../components/experience-card';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import profileImage from 'figma:asset/243b83051d6125042ea934e8b1e0d003cbb81e59.png';

interface AboutPageProps {
  onNavigateToWork: () => void;
}

export function AboutPage({ onNavigateToWork }: AboutPageProps) {
  const { language } = useLanguage();

  const content = {
    en: {
      pageTitle: "About Me",
      pageDesc: "Designing interfaces that balance clarity, usability, and visual impact.",
      bioTitle: "Hi, I'm Jauza Panca Erucakra",
      bio1: "I'm a UI Designer with a background in Informatics Engineering, focused on creating clean, intuitive, and visually consistent digital interfaces. I enjoy turning complex ideas into simple and user-friendly designs.",
      bio2: "My technical background helps me bridge the gap between design and development, ensuring that my designs are not only beautiful but also practical and implementable.",
      bio3: "When I'm not designing, I enjoy exploring new design trends, learning about user psychology, and contributing to design communities.",
      languageNote: "Languages:",
      languageValue: "English (EN) / Bahasa Indonesia (ID)",
      skillsTitle: "Skills & Tools",
      skillGroups: [
        {
          category: 'UI Design',
          skills: ['Layout', 'Visual Hierarchy', 'Design Systems', 'Typography'],
        },
        {
          category: 'Tools',
          skills: ['Figma', 'Adobe Premiere', 'Canva', 'Photoshop'],
        },
        {
          category: 'Technical Awareness',
          skills: ['HTML', 'CSS', 'Basic Programming', 'Responsive Design'],
        },
        {
          category: 'Soft Skills',
          skills: ['Communication', 'Teamwork', 'Adaptability', 'Problem Solving'],
        },
      ],
      experienceTitle: "Experience",
      experiences: [
        {
          role: 'Internship – Fakultas Teknologi Informasi',
          organization: 'Universitas Kristen Satya Wacana',
          description: 'Assisting the head of the study program in creating a website for students of the computer science study program.',
          period: 'November 2024 – May 2025',
        },
        {
          role: 'UI/UX Designer (Freelance)',
          organization: 'PT. Eintio',
          description: 'Working as a UI/UX Designer on freelance projects, focusing on interface design and user experience improvements.',
          period: 'Present',
        },
      ],
      philosophyTitle: "Design Approach",
      philosophy1: "I believe good UI design is not just about aesthetics, but about clarity, consistency, and solving real user problems through thoughtful visual decisions. Every design choice should serve a purpose and enhance the user experience.",
      philosophy2: "My approach combines technical understanding with creative problem-solving, always keeping the end user at the center of every decision. I strive to create interfaces that are both beautiful and functional.",
      ctaTitle: "Let's Create Something Great",
      ctaDesc: "Interested in working together or just want to say hello? I'd love to hear from you.",
      viewWork: "View My Work",
      contactMe: "Contact Me"
    },
    id: {
      pageTitle: "Tentang Saya",
      pageDesc: "Mendesain antarmuka yang menyeimbangkan kejelasan, kegunaan, dan dampak visual.",
      bioTitle: "Halo, saya Jauza Panca Erucakra",
      bio1: "Saya adalah UI Designer dengan latar belakang Teknik Informatika, fokus menciptakan antarmuka digital yang bersih, intuitif, dan konsisten secara visual. Saya senang mengubah ide kompleks menjadi desain yang sederhana dan ramah pengguna.",
      bio2: "Latar belakang teknis saya membantu saya menjembatani kesenjangan antara desain dan pengembangan, memastikan bahwa desain saya tidak hanya indah tetapi juga praktis dan dapat diimplementasikan.",
      bio3: "Saat tidak mendesain, saya senang menjelajahi tren desain baru, mempelajari psikologi pengguna, dan berkontribusi pada komunitas desain.",
      languageNote: "Bahasa:",
      languageValue: "Bahasa Indonesia (ID) / English (EN)",
      skillsTitle: "Keahlian & Alat",
      skillGroups: [
        {
          category: 'Desain UI',
          skills: ['Tata Letak', 'Hierarki Visual', 'Design System', 'Tipografi'],
        },
        {
          category: 'Alat',
          skills: ['Figma', 'Adobe Premiere', 'Canva', 'Photoshop'],
        },
        {
          category: 'Kesadaran Teknis',
          skills: ['HTML', 'CSS', 'Pemrograman Dasar', 'Desain Responsif'],
        },
        {
          category: 'Soft Skills',
          skills: ['Komunikasi', 'Kerja Tim', 'Adaptabilitas', 'Pemecahan Masalah'],
        },
      ],
      experienceTitle: "Pengalaman",
      experiences: [
        {
          role: 'Internship – Fakultas Teknologi Informasi',
          organization: 'Universitas Kristen Satya Wacana',
          description: 'Membantu kepala program studi dalam membuat website untuk mahasiswa program studi ilmu komputer.',
          period: 'November 2024 – Mei 2025',
        },
        {
          role: 'UI/UX Designer (Freelance)',
          organization: 'PT. Eintio',
          description: 'Bekerja sebagai UI/UX Designer pada proyek freelance, fokus pada desain antarmuka dan peningkatan pengalaman pengguna.',
          period: 'Saat Ini',
        },
      ],
      philosophyTitle: "Pendekatan Desain",
      philosophy1: "Saya percaya desain UI yang baik bukan hanya tentang estetika, tetapi tentang kejelasan, konsistensi, dan menyelesaikan masalah pengguna yang nyata melalui keputusan visual yang bijaksana. Setiap pilihan desain harus memiliki tujuan dan meningkatkan pengalaman pengguna.",
      philosophy2: "Pendekatan saya menggabungkan pemahaman teknis dengan pemecahan masalah kreatif, selalu menempatkan pengguna akhir di pusat setiap keputusan. Saya berusaha menciptakan antarmuka yang indah dan fungsional.",
      ctaTitle: "Mari Ciptakan Sesuatu yang Hebat",
      ctaDesc: "Tertarik untuk bekerja sama atau hanya ingin menyapa? Saya akan senang mendengar dari Anda.",
      viewWork: "Lihat Karya Saya",
      contactMe: "Hubungi Saya"
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gray-50 border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-indigo-100/40 via-purple-50/30 to-transparent blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 relative">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">{t.pageTitle}</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            {t.pageDesc}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Profile Image */}
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                <ImageWithFallback
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-indigo-200/30 via-purple-200/20 to-pink-200/30 rounded-full blur-3xl -z-10"></div>
            </div>

            {/* Right - Bio */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">{t.bioTitle}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t.bio1}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t.bio2}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t.bio3}
              </p>
              
              {/* Language Note */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  <span className="font-medium">{t.languageNote}</span> {t.languageValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">{t.skillsTitle}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {t.skillGroups.map((group) => (
              <div key={group.category} className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100">
                <h3 className="font-semibold mb-4 text-gray-900">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">{t.experienceTitle}</h2>
          
          <div className="space-y-6">
            {t.experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                role={exp.role}
                organization={exp.organization}
                description={exp.description}
                period={exp.period}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t.philosophyTitle}</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            {t.philosophy1}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            {t.philosophy2}
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t.ctaTitle}</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            {t.ctaDesc}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={onNavigateToWork}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20"
            >
              {t.viewWork}
              <ArrowRight size={18} />
            </button>
            <a
              href="mailto:jauzapancaerucakra@gmail.com"
              className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              {t.contactMe}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}