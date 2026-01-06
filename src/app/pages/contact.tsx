import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from "../contexts/language-context";

interface ContactPageProps {
  onNavigateToWork?: () => void;
}

export function ContactPage({ onNavigateToWork }: ContactPageProps) {
  const { language } = useLanguage();

  const content = {
    en: {
      pageTitle: "Let's Connect",
      pageDesc:
        "I'm open to internship opportunities, full-time roles, and design collaborations. Feel free to reach out if you'd like to work together.",
      sectionTitle: "Get In Touch",
      sectionDesc:
        "I'm open to internship opportunities, full-time roles, and design collaborations. Feel free to reach out directly—I'd love to hear from you!",
      email: "Email",
      linkedIn: "LinkedIn Profile",
      availTitle: "Open to Opportunities",
      availDesc:
        "I’m open to internship opportunities, full-time roles, and design collaborations. I typically respond within 1–2 days.",
      viewWork: "View My Work",
    },
    id: {
      pageTitle: "Mari Terhubung",
      pageDesc:
        "Saya terbuka untuk kesempatan magang, posisi penuh waktu, dan kolaborasi desain. Jangan ragu untuk menghubungi saya jika Anda ingin bekerja sama.",
      sectionTitle: "Hubungi Saya",
      sectionDesc:
        "Saya terbuka untuk kesempatan magang, posisi penuh waktu, dan kolaborasi desain. Silakan hubungi saya langsung—saya akan senang mendengar dari Anda!",
      email: "Email",
      linkedIn: "Profil LinkedIn",
      availTitle: "Terbuka untuk Peluang",
      availDesc:
        "Saya terbuka untuk peluang magang, posisi penuh waktu, dan kolaborasi desain. Saya biasanya merespons pesan dalam waktu 1–2 hari.",
      viewWork: "Lihat Karya Saya",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gray-50 border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-indigo-100/40 via-purple-50/30 to-transparent blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 relative">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">{t.pageTitle}</h1>
          <p className="text-gray-600 text-lg max-w-3xl">{t.pageDesc}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.sectionTitle}</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
              {t.sectionDesc}
            </p>
          </div>

          {/* Contact Details - Centered */}
          <div className="max-w-xl mx-auto space-y-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Mail size={24} className="text-gray-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{t.email}</h3>
                  <a
                    href="mailto:jauzapancaerucakra@gmail.com"
                    className="text-gray-600 hover:text-gray-900 transition-colors break-all block"
                  >
                    jauzapancaerucakra@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Linkedin size={24} className="text-gray-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{t.linkedIn}</h3>
                  <a
                    href="https://www.linkedin.com/in/jauza-panca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors block"
                  >
                    linkedin.com/in/jauza-panca
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.availTitle}</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            {t.availDesc}
          </p>
          {onNavigateToWork && (
            <button
              onClick={onNavigateToWork}
              className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              {t.viewWork}
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
