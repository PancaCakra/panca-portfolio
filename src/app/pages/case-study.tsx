import { ArrowLeft } from 'lucide-react';
import { WorkProject } from '../components/work-project-card';
import { useLanguage } from '../contexts/language-context';
import { ExternalLink } from 'lucide-react';
import berUangHero from 'figma:asset/90762cb20cef1358f19cd22960f3ea20b89172e5.png';
import wireframe1 from 'figma:asset/fdafd5137ef01e451fd925fe773a0f6a09f61b3d.png';
import wireframe2 from 'figma:asset/0c5be2996349b0226ccbd98d5d749607b3b7ab15.png';
import highFidelity1 from 'figma:asset/5753108340a326e78414a8a1a4cf63d8b75d85bf.png';
import highFidelity2 from 'figma:asset/5b3f73d92efe2a030685044a172c672a7c868371.png';
import finalUI1 from 'figma:asset/ec0e85f59647a2dcad09c5f1de4ad41b8ca13532.png';
import finalUI2 from 'figma:asset/f20a55aa5e91afed598acc7893d790b039f5466e.png';
import finalUI3 from 'figma:asset/0c603b663b34f02821d68f48986bc431b036aaf5.png';
import tennisWireframe1 from 'figma:asset/e5b789ba5cd55fe5b7793631bfbf260ba3b67f4e.png';
import tennisWireframe2 from 'figma:asset/71c5c8e29c6b8dce0ddc7c9f49a82aa1cb491eba.png';
import tennisHighFidelity1 from 'figma:asset/7ef0d6ffa24bad566f40c4284d0509057c254302.png';
import tennisHighFidelity2 from 'figma:asset/d58adb15f3499c92279aee4ff925872893007b91.png';
import tennisFinalUI1 from 'figma:asset/1fc305e6aee811a16dadcfbca329a4f1511748fe.png';
import tennisFinalUI2 from 'figma:asset/30e62a12929fb60ca3b3dad85485a32a6ed5ed2e.png';
import tennisFinalUI3 from 'figma:asset/e6a86687b4dfb00cfc42deb29c224eb2fc98c09d.png';
import tennisHero from 'figma:asset/384264fec1ff8230abe8bd5d47df7409cea64fb3.png';
import churchWireframe1 from 'figma:asset/84e0ed7ec66a6839a9995607f41b200837b35e23.png';
import churchWireframe2 from 'figma:asset/256e2025597a0dd3666049103cfbd04519a74322.png';
import churchHighFidelity1 from 'figma:asset/f64a61d944ecb621a3bf73a8cfd82f6b325add1c.png';
import churchHighFidelity2 from 'figma:asset/386d0fd112b69501ff83f51b7f5fe1b8209b6a1b.png';
import churchFinalUI1 from 'figma:asset/ab8b831e8ed334041a8791efcb29378f39731e94.png';
import churchFinalUI2 from 'figma:asset/adc85677300f3549a4daf072dac667e88fa37a6e.png';
import churchFinalUI3 from 'figma:asset/b975f4ceecdee1e457b123622e7c213935997869.png';
import churchHero from 'figma:asset/47006263c09db965e5e0ceaea499e0090de441d4.png';
import ispWireframe1 from 'figma:asset/3fa5946c07289cd05328e666f7528b10f04e5170.png';
import ispWireframe2 from 'figma:asset/4b5135c113af6ced0a833d1d0fb92fedc51ae63f.png';
import ispHighFidelity1 from 'figma:asset/244cff67b2b59c62763376a15b928e70cdba2f44.png';
import ispHighFidelity2 from 'figma:asset/66b76ca6a73ba04e0c0ff708bc35508b8d5beedd.png';
import ispFinalUI1 from 'figma:asset/8c649bf47b043b1de3472256a772d3b41c6cdd58.png';
import ispFinalUI2 from 'figma:asset/f73aa1ae978bd7dde8b54f33f28da3f6e6245e6d.png';
import ispFinalUI3 from 'figma:asset/3207047d8134b1944672fdf252b7f363c9af7fb9.png';
import ispHero from 'figma:asset/c9ae326644c80d7a0020ca29f7fdf7b4bfa93017.png';

interface CaseStudyPageProps {
  project: WorkProject;
  onBack: () => void;
}

export function CaseStudyPage({ project, onBack }: CaseStudyPageProps) {
  const { language } = useLanguage();
  
  // BerUang specific case study content
  const isBerUang = project.title === 'BerUang';
  
  // Tennis Club Website specific case study content
  const isTennisClub = project.title === 'Tennis Club Website' || project.title === 'Website Klub Tenis';
  
  // Church Website specific case study content
  const isChurchWebsite = project.title === 'Church Website' || project.title === 'Website Gereja';
  
  // Internet Service Provider Website specific case study content
  const isISPWebsite = project.title === 'Internet Service Provider Website' || project.title === 'Website Penyedia Layanan Internet';
  
  const berUangContent = {
    en: {
      backButton: 'Back to Work',
      duration: '1 week',
      durationLabel: 'Duration',
      roleLabel: 'Role',
      toolsLabel: 'Tools',
      typeLabel: 'Type',
      overview: 'BerUang helps users manage their finances in a simple, friendly, and effective way.',
      designProcessTitle: 'Design Process',
      wireframeTitle: 'Wireframe',
      wireframeDesc: 'Initial wireframes focused on creating a simple and intuitive layout for users to track their income, expenses, and financial goals. The design prioritizes ease of use and clear visual hierarchy.',
      wireframePlaceholder1: 'Wireframe Placeholder 1',
      wireframePlaceholder2: 'Wireframe Placeholder 2',
      highFidelityTitle: 'High Fidelity Design',
      highFidelityDesc: 'The high-fidelity designs introduced a friendly color palette with soft indigo accents and clean typography. The visual system emphasizes clarity and approachability to make financial management less intimidating.',
      highFidelityPlaceholder1: 'High Fidelity Design Placeholder 1',
      highFidelityPlaceholder2: 'High Fidelity Design Placeholder 2',
      finalUITitle: 'Final UI',
      finalUIPlaceholder1: 'Final UI Placeholder 1',
      finalUIPlaceholder2: 'Final UI Placeholder 2',
      finalUIPlaceholder3: 'Final UI Placeholder 3',
      ctaTitle: 'Interested in seeing more?',
      ctaButton: 'View All Projects',
    },
    id: {
      backButton: 'Kembali ke Karya',
      duration: '1 minggu',
      durationLabel: 'Durasi',
      roleLabel: 'Peran',
      toolsLabel: 'Alat',
      typeLabel: 'Tipe',
      overview: 'BerUang membantu pengguna mengelola keuangan mereka dengan cara yang sederhana, ramah, dan efektif.',
      designProcessTitle: 'Proses Desain',
      wireframeTitle: 'Wireframe',
      wireframeDesc: 'Wireframe awal berfokus pada pembuatan tata letak yang sederhana dan intuitif bagi pengguna untuk melacak pendapatan, pengeluaran, dan tujuan keuangan mereka. Desain memprioritaskan kemudahan penggunaan dan hierarki visual yang jelas.',
      wireframePlaceholder1: 'Placeholder Wireframe 1',
      wireframePlaceholder2: 'Placeholder Wireframe 2',
      highFidelityTitle: 'Desain High Fidelity',
      highFidelityDesc: 'Desain high-fidelity memperkenalkan palet warna yang ramah dengan aksen indigo lembut dan tipografi yang bersih. Sistem visual menekankan kejelasan dan kemudahan untuk membuat manajemen keuangan tidak terlalu menakutkan.',
      highFidelityPlaceholder1: 'Placeholder Desain High Fidelity 1',
      highFidelityPlaceholder2: 'Placeholder Desain High Fidelity 2',
      finalUITitle: 'UI Final',
      finalUIPlaceholder1: 'Placeholder UI Final 1',
      finalUIPlaceholder2: 'Placeholder UI Final 2',
      finalUIPlaceholder3: 'Placeholder UI Final 3',
      ctaTitle: 'Tertarik melihat lebih banyak?',
      ctaButton: 'Lihat Semua Proyek',
    }
  };

  const t = berUangContent[language];

  if (isBerUang) {
    return (
      <div className="min-h-screen bg-white">
        {/* Back Button */}
        <div className="border-b border-gray-100 sticky top-16 bg-white/80 backdrop-blur-md z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              {t.backButton}
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={berUangHero}
                alt="BerUang Project Cover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-gray-600 text-lg mb-12">{t.overview}</p>

            {/* Project Details Grid */}
            <div className="grid md:grid-cols-4 gap-8 p-8 bg-gray-50 rounded-2xl">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{t.roleLabel}</p>
                <p className="font-medium">{project.role}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{t.toolsLabel}</p>
                <p className="font-medium">{project.tools}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{t.typeLabel}</p>
                <p className="font-medium">{project.type}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{t.durationLabel}</p>
                <p className="font-medium">{t.duration}</p>
              </div>
            </div>

            {/* View Figma File Link */}
            <div className="mt-10">
              <a
                href="https://www.figma.com/design/sNIL8RhhZoKYjS32YSGzKb/Website-Management-Keuangan?node-id=4-2022&t=8lmgODcgLmuKmI4l-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 group"
              >
                <ExternalLink size={14} className="text-gray-500 group-hover:text-gray-700 transition-colors" />
                <span className="group-hover:underline">View Figma File</span>
              </a>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">{t.designProcessTitle}</h2>

            {/* Wireframe */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-6">{t.wireframeTitle}</h3>
              <p className="text-gray-600 mb-8 max-w-3xl">
                {t.wireframeDesc}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={wireframe1}
                    alt="BerUang Wireframe 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={wireframe2}
                    alt="BerUang Wireframe 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* High Fidelity Design */}
            <div>
              <h3 className="text-xl font-semibold mb-6">{t.highFidelityTitle}</h3>
              <p className="text-gray-600 mb-8 max-w-3xl">
                {t.highFidelityDesc}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={highFidelity1}
                    alt="BerUang High Fidelity Design 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={highFidelity2}
                    alt="BerUang High Fidelity Design 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final UI */}
        <section className="py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">{t.finalUITitle}</h2>
            
            <div className="space-y-6">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-gray-200">
                <img
                  src={finalUI1}
                  alt="BerUang Final UI - Goals"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={finalUI2}
                    alt="BerUang Final UI - Reports"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={finalUI3}
                    alt="BerUang Final UI - Budgeting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">{t.ctaTitle}</h3>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20"
            >
              {t.ctaButton}
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Tennis Club Website specific case study content
  const tennisClubContent = {
    en: {
      backButton: 'Back to Work',
      duration: '2 weeks',
      durationLabel: 'Duration',
      roleLabel: 'Role',
      toolsLabel: 'Tools',
      typeLabel: 'Type',
      overview: 'A website designed to support the branding of a tennis club while providing clear access to schedules, events, gallery, and contact information.',
      designProcessTitle: 'Design Process',
      wireframeTitle: 'Wireframe',
      wireframeDesc: 'Initial wireframes established the site structure, focusing on intuitive navigation and clear presentation of schedules, events, and club information. The layout prioritizes accessibility and visual balance.',
      highFidelityTitle: 'High Fidelity Design',
      highFidelityDesc: 'The high-fidelity designs introduced a professional color scheme that reflects the club\'s brand identity. The visual system emphasizes elegance and energy, capturing the spirit of the sport while maintaining clarity.',
      finalUITitle: 'Final UI',
      ctaTitle: 'Interested in seeing more?',
      ctaButton: 'View All Projects',
    },
    id: {
      backButton: 'Kembali ke Karya',
      duration: '2 minggu',
      durationLabel: 'Durasi',
      roleLabel: 'Peran',
      toolsLabel: 'Alat',
      typeLabel: 'Tipe',
      overview: 'Sebuah website yang dirancang untuk mendukung branding klub tenis sambil menyediakan akses yang jelas ke jadwal, acara, galeri, dan informasi kontak.',
      designProcessTitle: 'Proses Desain',
      wireframeTitle: 'Wireframe',
      wireframeDesc: 'Wireframe awal menetapkan struktur situs, fokus pada navigasi intuitif dan presentasi jelas dari jadwal, acara, dan informasi klub. Tata letak memprioritaskan aksesibilitas dan keseimbangan visual.',
      highFidelityTitle: 'Desain High Fidelity',
      highFidelityDesc: 'Desain high-fidelity memperkenalkan skema warna profesional yang mencerminkan identitas merek klub. Sistem visual menekankan keanggunan dan energi, menangkap semangat olahraga sambil mempertahankan kejelasan.',
      finalUITitle: 'UI Final',
      ctaTitle: 'Tertarik melihat lebih banyak?',
      ctaButton: 'Lihat Semua Proyek',
    }
  };

  const tc = tennisClubContent[language];

  if (isTennisClub) {
    return (
      <div className="min-h-screen bg-white">
        {/* Back Button */}
        <div className="border-b border-gray-100 sticky top-16 bg-white/80 backdrop-blur-md z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              {tc.backButton}
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={tennisHero}
                alt="Tennis Club Project Cover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {language === 'en' ? 'Tennis Club Website' : 'Website Klub Tenis'}
            </h1>
            <p className="text-gray-600 text-lg mb-12">{tc.overview}</p>

            {/* Project Details Grid */}
            <div className="grid md:grid-cols-4 gap-8 p-8 bg-gray-50 rounded-2xl">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{tc.roleLabel}</p>
                <p className="font-medium">{project.role}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{tc.toolsLabel}</p>
                <p className="font-medium">{project.tools}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{tc.typeLabel}</p>
                <p className="font-medium">{project.type}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{tc.durationLabel}</p>
                <p className="font-medium">{tc.duration}</p>
              </div>
            </div>

            {/* View Figma File Link */}
            <div className="mt-10">
              <a
                href="https://www.figma.com/design/YT50yVQ5brlu87UCSG2VVv/Website-Club-Tenis?node-id=8-559&t=sckdkt7vIetQ6VCx-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 group"
              >
                <ExternalLink size={14} className="text-gray-500 group-hover:text-gray-700 transition-colors" />
                <span className="group-hover:underline">View Figma File</span>
              </a>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">{tc.designProcessTitle}</h2>

            {/* Wireframe */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-6">{tc.wireframeTitle}</h3>
              <p className="text-gray-600 mb-8 max-w-3xl">
                {tc.wireframeDesc}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={tennisWireframe1}
                    alt="Tennis Club Wireframe 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={tennisWireframe2}
                    alt="Tennis Club Wireframe 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* High Fidelity Design */}
            <div>
              <h3 className="text-xl font-semibold mb-6">{tc.highFidelityTitle}</h3>
              <p className="text-gray-600 mb-8 max-w-3xl">
                {tc.highFidelityDesc}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={tennisHighFidelity1}
                    alt="Tennis Club High Fidelity Design 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={tennisHighFidelity2}
                    alt="Tennis Club High Fidelity Design 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final UI */}
        <section className="py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">{tc.finalUITitle}</h2>
            
            <div className="space-y-6">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-gray-200">
                <img
                  src={tennisFinalUI1}
                  alt="Tennis Club Final UI 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={tennisFinalUI2}
                    alt="Tennis Club Final UI 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={tennisFinalUI3}
                    alt="Tennis Club Final UI 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">{tc.ctaTitle}</h3>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20"
            >
              {tc.ctaButton}
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Church Website specific case study content
  const churchWebsiteContent = {
    en: {
      backButton: 'Back to Work',
      duration: '1 week',
      durationLabel: 'Duration',
      roleLabel: 'Role',
      toolsLabel: 'Tools',
      typeLabel: 'Type',
      overview: 'A website designed to strengthen church branding while providing clear information about worship schedules, ministries, church news, and contact details.',
      designProcessTitle: 'Design Process',
      wireframeTitle: 'Wireframe',
      wireframeDesc: 'Initial wireframes focused on creating a welcoming and organized layout for visitors to find worship schedules, ministry information, and community news. The design prioritizes accessibility and clear visual hierarchy.',
      highFidelityTitle: 'High Fidelity Design',
      highFidelityDesc: 'The high-fidelity designs introduced a warm and inviting color palette that reflects the church\'s welcoming spirit. The visual system emphasizes clarity, warmth, and spiritual connection while maintaining professional presentation.',
      finalUITitle: 'Final UI',
      ctaTitle: 'Interested in seeing more?',
      ctaButton: 'View All Projects',
    },
    id: {
      backButton: 'Kembali ke Karya',
      duration: '1 minggu',
      durationLabel: 'Durasi',
      roleLabel: 'Peran',
      toolsLabel: 'Alat',
      typeLabel: 'Tipe',
      overview: 'Sebuah website yang dirancang untuk memperkuat branding gereja sambil menyediakan informasi yang jelas tentang jadwal ibadah, pelayanan, berita gereja, dan detail kontak.',
      designProcessTitle: 'Proses Desain',
      wireframeTitle: 'Wireframe',
      wireframeDesc: 'Wireframe awal berfokus pada pembuatan tata letak yang ramah dan terorganisir bagi pengunjung untuk menemukan jadwal ibadah, informasi pelayanan, dan berita komunitas. Desain memprioritaskan aksesibilitas dan hierarki visual yang jelas.',
      highFidelityTitle: 'Desain High Fidelity',
      highFidelityDesc: 'Desain high-fidelity memperkenalkan palet warna yang hangat dan mengundang yang mencerminkan semangat sambutan gereja. Sistem visual menekankan kejelasan, kehangatan, dan koneksi spiritual sambil mempertahankan presentasi profesional.',
      finalUITitle: 'UI Final',
      ctaTitle: 'Tertarik melihat lebih banyak?',
      ctaButton: 'Lihat Semua Proyek',
    }
  };

  const cw = churchWebsiteContent[language];

  if (isChurchWebsite) {
    return (
      <div className="min-h-screen bg-white">
        {/* Back Button */}
        <div className="border-b border-gray-100 sticky top-16 bg-white/80 backdrop-blur-md z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              {cw.backButton}
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={churchHero}
                alt="Church Project Cover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {language === 'en' ? 'Church Website' : 'Website Gereja'}
            </h1>
            <p className="text-gray-600 text-lg mb-12">{cw.overview}</p>

            {/* Project Details Grid */}
            <div className="grid md:grid-cols-4 gap-8 p-8 bg-gray-50 rounded-2xl">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{cw.roleLabel}</p>
                <p className="font-medium">{project.role}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{cw.toolsLabel}</p>
                <p className="font-medium">{project.tools}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{cw.typeLabel}</p>
                <p className="font-medium">{project.type}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{cw.durationLabel}</p>
                <p className="font-medium">{cw.duration}</p>
              </div>
            </div>

            {/* View Figma File Link */}
            <div className="mt-10">
              <a
                href="https://www.figma.com/design/WfBlLwNyudqV0hjGxaEVKZ/Website-Gereja?node-id=1-525&t=fBjUW47BU9ahxpIE-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 group"
              >
                <ExternalLink size={14} className="text-gray-500 group-hover:text-gray-700 transition-colors" />
                <span className="group-hover:underline">View Figma File</span>
              </a>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">{cw.designProcessTitle}</h2>

            {/* Wireframe */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-6">{cw.wireframeTitle}</h3>
              <p className="text-gray-600 mb-8 max-w-3xl">
                {cw.wireframeDesc}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={churchWireframe1}
                    alt="Church Wireframe 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={churchWireframe2}
                    alt="Church Wireframe 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* High Fidelity Design */}
            <div>
              <h3 className="text-xl font-semibold mb-6">{cw.highFidelityTitle}</h3>
              <p className="text-gray-600 mb-8 max-w-3xl">
                {cw.highFidelityDesc}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={churchHighFidelity1}
                    alt="Church High Fidelity Design 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={churchHighFidelity2}
                    alt="Church High Fidelity Design 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final UI */}
        <section className="py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">{cw.finalUITitle}</h2>
            
            <div className="space-y-6">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-gray-200">
                <img
                  src={churchFinalUI1}
                  alt="Church Final UI 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={churchFinalUI2}
                    alt="Church Final UI 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={churchFinalUI3}
                    alt="Church Final UI 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">{cw.ctaTitle}</h3>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20"
            >
              {cw.ctaButton}
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Internet Service Provider Website specific case study content
  const ispWebsiteContent = {
    en: {
      backButton: 'Back to Work',
      duration: '2 weeks',
      durationLabel: 'Duration',
      roleLabel: 'Role',
      toolsLabel: 'Tools',
      typeLabel: 'Type',
      overview: 'A telecommunication service website designed to support branding and online sales of internet services, including product plans, coverage checker, online registration, customer support center, and a customer dashboard.',
      designProcessTitle: 'Design Process',
      wireframeTitle: 'Wireframe',
      wireframeDesc: 'Initial wireframes focused on creating a clear and intuitive layout for users to explore internet plans, check coverage availability, and complete online registration. The design prioritizes ease of navigation and conversion optimization.',
      highFidelityTitle: 'High Fidelity Design',
      highFidelityDesc: 'The high-fidelity designs introduced a modern and professional color scheme that reflects trust and technological advancement. The visual system emphasizes clarity, speed, and reliability—core values of internet service.',
      finalUITitle: 'Final UI',
      ctaTitle: 'Interested in seeing more?',
      ctaButton: 'View All Projects',
    },
    id: {
      backButton: 'Kembali ke Karya',
      duration: '2 minggu',
      durationLabel: 'Durasi',
      roleLabel: 'Peran',
      toolsLabel: 'Alat',
      typeLabel: 'Tipe',
      overview: 'Sebuah website layanan telekomunikasi yang dirancang untuk mendukung branding dan penjualan online layanan internet, termasuk paket produk, pengecekan cakupan, pendaftaran online, pusat dukungan pelanggan, dan dasbor pelanggan.',
      designProcessTitle: 'Proses Desain',
      wireframeTitle: 'Wireframe',
      wireframeDesc: 'Wireframe awal berfokus pada pembuatan tata letak yang jelas dan intuitif bagi pengguna untuk menjelajahi paket internet, memeriksa ketersediaan cakupan, dan menyelesaikan pendaftaran online. Desain memprioritaskan kemudahan navigasi dan optimasi konversi.',
      highFidelityTitle: 'Desain High Fidelity',
      highFidelityDesc: 'Desain high-fidelity memperkenalkan skema warna modern dan profesional yang mencerminkan kepercayaan dan kemajuan teknologi. Sistem visual menekankan kejelasan, kecepatan, dan keandalan—nilai inti layanan internet.',
      finalUITitle: 'UI Final',
      ctaTitle: 'Tertarik melihat lebih banyak?',
      ctaButton: 'Lihat Semua Proyek',
    }
  };

  const isp = ispWebsiteContent[language];

  if (isISPWebsite) {
    return (
      <div className="min-h-screen bg-white">
        {/* Back Button */}
        <div className="border-b border-gray-100 sticky top-16 bg-white/80 backdrop-blur-md z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              {isp.backButton}
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={ispHero}
                alt="ISP Project Cover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {language === 'en' ? 'Internet Service Provider Website' : 'Website Penyedia Layanan Internet'}
            </h1>
            <p className="text-gray-600 text-lg mb-12">{isp.overview}</p>

            {/* Project Details Grid */}
            <div className="grid md:grid-cols-4 gap-8 p-8 bg-gray-50 rounded-2xl">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{isp.roleLabel}</p>
                <p className="font-medium">{project.role}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{isp.toolsLabel}</p>
                <p className="font-medium">{project.tools}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{isp.typeLabel}</p>
                <p className="font-medium">{project.type}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{isp.durationLabel}</p>
                <p className="font-medium">{isp.duration}</p>
              </div>
            </div>

            {/* View Figma File Link */}
            <div className="mt-10">
              <a
                href="https://www.figma.com/design/23gvZaGWxDRAsbNwpH4V9h/Telecommunications-Website?node-id=12-4274&t=5omq2iO67Pt1vs48-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 group"
              >
                <ExternalLink size={14} className="text-gray-500 group-hover:text-gray-700 transition-colors" />
                <span className="group-hover:underline">View Figma File</span>
              </a>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">{isp.designProcessTitle}</h2>

            {/* Wireframe */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-6">{isp.wireframeTitle}</h3>
              <p className="text-gray-600 mb-8 max-w-3xl">
                {isp.wireframeDesc}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={ispWireframe1}
                    alt="ISP Wireframe 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={ispWireframe2}
                    alt="ISP Wireframe 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* High Fidelity Design */}
            <div>
              <h3 className="text-xl font-semibold mb-6">{isp.highFidelityTitle}</h3>
              <p className="text-gray-600 mb-8 max-w-3xl">
                {isp.highFidelityDesc}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={ispHighFidelity1}
                    alt="ISP High Fidelity Design 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={ispHighFidelity2}
                    alt="ISP High Fidelity Design 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final UI */}
        <section className="py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">{isp.finalUITitle}</h2>
            
            <div className="space-y-6">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-gray-200">
                <img
                  src={ispFinalUI1}
                  alt="ISP Final UI 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={ispFinalUI2}
                    alt="ISP Final UI 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-200">
                  <img
                    src={ispFinalUI3}
                    alt="ISP Final UI 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">{isp.ctaTitle}</h3>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20"
            >
              {isp.ctaButton}
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Default case study template for other projects
  const defaultContent = {
    en: {
      backButton: 'Back to Work',
      duration: '4 weeks',
      durationLabel: 'Duration',
      roleLabel: 'Role',
      toolsLabel: 'Tools',
      typeLabel: 'Type',
      problemStatement: 'Problem Statement',
      designProcess: 'Design Process',
      wireframe: 'Wireframe',
      highFidelity: 'High Fidelity Design',
      finalUI: 'Final UI',
      reflection: 'Reflection',
      ctaTitle: 'Interested in seeing more?',
      ctaButton: 'View All Projects',
    },
    id: {
      backButton: 'Kembali ke Karya',
      duration: '4 minggu',
      durationLabel: 'Durasi',
      roleLabel: 'Peran',
      toolsLabel: 'Alat',
      typeLabel: 'Tipe',
      problemStatement: 'Pernyataan Masalah',
      designProcess: 'Proses Desain',
      wireframe: 'Wireframe',
      highFidelity: 'Desain High Fidelity',
      finalUI: 'UI Final',
      reflection: 'Refleksi',
      ctaTitle: 'Tertarik melihat lebih banyak?',
      ctaButton: 'Lihat Semua Proyek',
    }
  };

  const dt = defaultContent[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="border-b border-gray-100 sticky top-16 bg-white/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            {dt.backButton}
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{project.title}</h1>
          <p className="text-gray-600 text-lg mb-12">{project.description}</p>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-4 gap-8 p-8 bg-gray-50 rounded-2xl">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{dt.roleLabel}</p>
              <p className="font-medium">{project.role}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{dt.toolsLabel}</p>
              <p className="font-medium">{project.tools}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{dt.typeLabel}</p>
              <p className="font-medium">{project.type}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{dt.durationLabel}</p>
              <p className="font-medium">{dt.duration}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">{dt.problemStatement}</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Many users struggle with managing their daily tasks due to cluttered interfaces 
              and overwhelming feature sets. The challenge was to design a clean, intuitive 
              interface that prioritizes core functionality while maintaining visual appeal.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              The goal was to create a solution that helps users quickly add, organize, and 
              track their tasks without friction, making productivity feel effortless rather 
              than overwhelming.
            </p>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">{dt.designProcess}</h2>

          {/* Wireframe */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6">{dt.wireframe}</h3>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Initial wireframes focused on establishing clear information hierarchy and user 
              flow. The layout prioritizes task visibility and quick access to key actions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzY3NjA2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Wireframe 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzY3NjA2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Wireframe 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* High Fidelity Design */}
          <div>
            <h3 className="text-xl font-semibold mb-6">{dt.highFidelity}</h3>
            <p className="text-gray-600 mb-8 max-w-3xl">
              The high-fidelity designs introduced the visual system, including color palette, 
              typography, and component styles. Emphasis was placed on creating a calm, 
              distraction-free environment.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMG1vY2t1cCUyMHNjcmVlbnxlbnwxfHx8fDE3Njc2MDY1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="High Fidelity Design 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMG1vY2t1cCUyMHNjcmVlbnxlbnwxfHx8fDE3Njc2MDY1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="High Fidelity Design 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final UI */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">{dt.finalUI}</h2>
          
          <div className="space-y-6">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={project.image}
                alt="Final UI 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt="Final UI 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt="Final UI 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">{dt.reflection}</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                This project reinforced the importance of restraint in UI design. By focusing 
                on essential features and removing visual noise, the interface became more 
                approachable and easier to use.
              </p>
              <p>
                Key learnings included the value of whitespace in guiding user attention, 
                the importance of consistent visual language, and how subtle animations can 
                enhance the overall user experience without being distracting.
              </p>
              <p>
                If I were to continue this project, I would focus on adding more personalization 
                options while maintaining the clean aesthetic, and conduct user testing to 
                validate design decisions with real user feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">{dt.ctaTitle}</h3>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20"
          >
            {dt.ctaButton}
          </button>
        </div>
      </section>
    </div>
  );
}