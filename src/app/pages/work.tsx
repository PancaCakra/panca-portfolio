../../assetsimport { WorkProjectCard, WorkProject } from '../components/work-project-card';
import { useLanguage } from '../contexts/language-context';
import berUangThumbnail from '../../assets/562556db7c8dd8bb0a5ddd1c16408c8ec58976a8.png';
import tennisThumbnail from 'f../../assets/f455eda8304f770e618ec77098eda24899548324.png';
import churchThumbnail from '../../assets/13fe596af0102fcb3ffa0061656855854b4cef6f.png';
import ispThumbnail from '../../assets/60e2b7e2f7079ee0210504cde893d7ffd57611d5.png';

interface WorkPageProps {
  onProjectClick: (project: WorkProject) => void;
}

export function WorkPage({ onProjectClick }: WorkPageProps) {
  const { language } = useLanguage();

  const content = {
    en: {
      pageTitle: "Selected Work",
      pageDesc: "A collection of UI design projects focused on clarity, usability, and visual consistency.",
      projects: [
        {
          id: 1,
          title: 'BerUang',
          description: 'BerUang helps users manage their finances in a simple, friendly, and effective way. Start your financial journey today.',
          role: 'UI Designer',
          tools: 'Figma',
          type: 'Website UI Design',
        },
        {
          id: 7,
          title: 'Tennis Club Website',
          description: 'A website designed to strengthen the branding of a tennis club, providing information about schedules, events, gallery, and contact details in a clear and organized layout.',
          role: 'UI Designer',
          tools: 'Figma',
          type: 'Website UI Design',
        },
        {
          id: 8,
          title: 'Church Website',
          description: 'A website designed to strengthen church branding while providing clear information about worship schedules, ministries, church news, and contact details.',
          role: 'UI Designer',
          tools: 'Figma',
          type: 'Website UI Design',
        },
        {
          id: 9,
          title: 'Internet Service Provider Website',
          description: 'A telecommunication service website designed to strengthen brand presence and sell internet services, featuring product plans, coverage checker, online registration, customer support, and a customer dashboard.',
          role: 'UI Designer',
          tools: 'Figma',
          type: 'Website UI Design',
        },
      ]
    },
    id: {
      pageTitle: "Karya Pilihan",
      pageDesc: "Koleksi proyek desain UI yang fokus pada kejelasan, kegunaan, dan konsistensi visual.",
      projects: [
        {
          id: 1,
          title: 'BerUang',
          description: 'BerUang membantu pengguna mengelola keuangan mereka dengan cara yang sederhana, ramah, dan efektif. Mulai perjalanan finansial Anda hari ini.',
          role: 'UI Designer',
          tools: 'Figma',
          type: 'Desain UI Website',
        },
        {
          id: 7,
          title: 'Website Klub Tenis',
          description: 'Sebuah website yang dirancang untuk memperkuat branding klub tenis, menyediakan informasi tentang jadwal, acara, galeri, dan detail kontak dalam tata letak yang jelas dan terorganisir.',
          role: 'UI Designer',
          tools: 'Figma',
          type: 'Desain UI Website',
        },
        {
          id: 8,
          title: 'Website Gereja',
          description: 'Sebuah website yang dirancang untuk memperkuat branding gereja sambil menyediakan informasi yang jelas tentang jadwal ibadah, minyakat, berita gereja, dan detail kontak.',
          role: 'UI Designer',
          tools: 'Figma',
          type: 'Desain UI Website',
        },
        {
          id: 9,
          title: 'Website Penyedia Layanan Internet',
          description: 'Sebuah website layanan telekomunikasi yang dirancang untuk memperkuat kehadiran merek dan menjual layanan internet, dengan fitur rencana produk, pengecekan cakupan, pendaftaran online, dukungan pelanggan, dan dasbor pelanggan.',
          role: 'UI Designer',
          tools: 'Figma',
          type: 'Desain UI Website',
        },
      ]
    }
  };

  const t = content[language];

  const projects: WorkProject[] = t.projects.map((project, index) => ({
    ...project,
    image: [
      berUangThumbnail,
      tennisThumbnail,
      churchThumbnail,
      ispThumbnail,
    ][index]
  }));

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

      {/* Projects Grid */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project) => (
              <WorkProjectCard
                key={project.id}
                project={project}
                onClick={() => onProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}