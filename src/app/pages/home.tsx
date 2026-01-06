import { ProjectCard } from "../components/project-card";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/language-context";
import berUangThumbnail from "../../assets/562556db7c8dd8bb0a5ddd1c16408c8ec58976a8.png";
import tennisThumbnail from "../../assets/f455eda8304f770e618ec77098eda24899548324.png";
import ispThumbnail from "../../assets/60e2b7e2f7079ee0210504cde893d7ffd57611d5.png";

interface HomePageProps {
  onNavigateToWork: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
  onProjectClick?: (project: any) => void;
}

export function HomePage({
  onNavigateToWork,
  onNavigateToAbout,
  onNavigateToContact,
  onProjectClick,
}: HomePageProps) {
  const { language } = useLanguage();

  const content = {
    en: {
      greeting: "Hi, I'm Panca",
      heroTitle: "UI Designer crafting clean and intuitive digital interfaces",
      heroDesc:
        "Focused on visual clarity, usability, and meaningful user experiences.",
      viewWork: "View My Work",
      contactMe: "Contact Me",
      selectedWork: "Selected Work",
      workDesc: "A curated collection of recent projects",
      aboutTitle: "About Me",
      aboutDesc:
        "I'm a UI Designer with a technical background in Informatics Engineering, passionate about crafting visually clean and user-friendly digital products. I believe great design bridges the gap between functionality and aesthetics, creating experiences that are both beautiful and intuitive.",
      moreAbout: "More About Me",
      contactTitle: "Let's Work Together",
      contactDesc:
        "I'm currently available for freelance projects and full-time opportunities. Let's create something amazing together.",
      getInTouch: "Get In Touch",
      projectBerUang: {
        title: "BerUang",
        description: "Personal finance management platform",
        category: "UI Design / Website",
      },
      projectISP: {
        title: "Internet Service Provider Website",
        description: "Telecommunication service platform",
        category: "UI Design / Website",
      },
      projectTennis: {
        title: "Tennis Club Website",
        description: "Sports club branding and information",
        category: "UI Design / Website",
      },
    },
    id: {
      greeting: "Halo, saya Panca",
      heroTitle:
        "UI Designer yang menciptakan antarmuka digital yang bersih dan intuitif",
      heroDesc:
        "Fokus pada kejelasan visual, kegunaan, dan pengalaman pengguna yang bermakna.",
      viewWork: "Lihat Karya Saya",
      contactMe: "Hubungi Saya",
      selectedWork: "Karya Pilihan",
      workDesc: "Koleksi kurasi dari proyek-proyek terbaru",
      aboutTitle: "Tentang Saya",
      aboutDesc:
        "Saya adalah UI Designer dengan latar belakang teknis di bidang Teknik Informatika, yang passionate dalam menciptakan produk digital yang bersih secara visual dan ramah pengguna. Saya percaya desain yang hebat menjembatani kesenjangan antara fungsionalitas dan estetika, menciptakan pengalaman yang indah dan intuitif.",
      moreAbout: "Selengkapnya Tentang Saya",
      contactTitle: "Mari Bekerja Sama",
      contactDesc:
        "Saya saat ini terbuka untuk proyek freelance dan peluang penuh waktu. Mari ciptakan sesuatu yang luar biasa bersama.",
      getInTouch: "Hubungi Saya",
      projectBerUang: {
        title: "BerUang",
        description: "Platform manajemen keuangan pribadi",
        category: "Desain UI / Website",
      },
      projectISP: {
        title: "Website Penyedia Layanan Internet",
        description: "Platform layanan telekomunikasi",
        category: "Desain UI / Website",
      },
      projectTennis: {
        title: "Website Klub Tenis",
        description: "Branding dan informasi klub olahraga",
        category: "Desain UI / Website",
      },
    },
  };

  const t = content[language];

  const projects = [
    {
      id: 1,
      image: berUangThumbnail,
      title: t.projectBerUang.title,
      description: t.projectBerUang.description,
      category: t.projectBerUang.category,
      role: "UI Designer",
      tools: "Figma",
      type: "Website UI Design",
    },
    {
      id: 9,
      image: ispThumbnail,
      title: t.projectISP.title,
      description: t.projectISP.description,
      category: t.projectISP.category,
      role: "UI Designer",
      tools: "Figma",
      type: "Website UI Design",
    },
    {
      id: 7,
      image: tennisThumbnail,
      title: t.projectTennis.title,
      description: t.projectTennis.description,
      category: t.projectTennis.category,
      role: "UI Designer",
      tools: "Figma",
      type: "Website UI Design",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-100/40 via-purple-50/30 to-transparent blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <p className="text-gray-600">{t.greeting}</p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {t.heroTitle}
              </h1>
              <p className="text-gray-600 text-lg max-w-xl">{t.heroDesc}</p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={onNavigateToWork}
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20"
                >
                  {t.viewWork}
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={onNavigateToContact}
                  className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  {t.contactMe}
                </button>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/30 via-purple-200/20 to-pink-200/30 rounded-full blur-2xl"></div>
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-indigo-300/40 rounded-full blur-3xl animate-pulse"></div>
                <div
                  className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-300/30 rounded-full blur-3xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.selectedWork}</h2>
            <p className="text-gray-600">{t.workDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                category={project.category}
                onClick={() => onProjectClick && onProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t.aboutTitle}</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            {t.aboutDesc}
          </p>
          <button
            onClick={onNavigateToAbout}
            className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all group"
          >
            {t.moreAbout}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t.contactTitle}</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            {t.contactDesc}
          </p>
          <button
            onClick={onNavigateToContact}
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20"
          >
            {t.getInTouch}
          </button>
        </div>
      </section>
    </>
  );
}
