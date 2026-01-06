import { useState } from 'react';
import { LanguageProvider } from './contexts/language-context';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { HomePage } from './pages/home';
import { WorkPage } from './pages/work';
import { AboutPage } from './pages/about';
import { ContactPage } from './pages/contact';
import { CaseStudyPage } from './pages/case-study';
import { WorkProject } from './components/work-project-card';

type Page = 'home' | 'work' | 'about' | 'contact' | 'case-study';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  const handleProjectClick = (project: WorkProject) => {
    setSelectedProject(project);
    setCurrentPage('case-study');
    window.scrollTo(0, 0);
  };

  const handleNavigateToWork = () => {
    setCurrentPage('work');
    window.scrollTo(0, 0);
  };

  const handleNavigateToHome = () => {
    setCurrentPage('home');
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  const handleNavigateToAbout = () => {
    setCurrentPage('about');
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  const handleNavigateToContact = () => {
    setCurrentPage('contact');
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  const handleBackToWork = () => {
    setCurrentPage('work');
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  const handleNavbarNavigate = (page: 'home' | 'work' | 'about' | 'contact') => {
    setSelectedProject(null);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Determine the current page for navbar highlighting
  // Case study pages should highlight Work in the navbar
  const navbarCurrentPage = currentPage === 'case-study' ? 'work' : currentPage;

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar 
          currentPage={navbarCurrentPage} 
          onNavigate={handleNavbarNavigate} 
        />

        {currentPage === 'home' && (
          <HomePage 
            onNavigateToWork={handleNavigateToWork}
            onNavigateToAbout={handleNavigateToAbout}
            onNavigateToContact={handleNavigateToContact}
            onProjectClick={handleProjectClick}
          />
        )}

        {currentPage === 'work' && (
          <WorkPage onProjectClick={handleProjectClick} />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigateToWork={handleNavigateToWork} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigateToWork={handleNavigateToWork} />
        )}

        {currentPage === 'case-study' && selectedProject && (
          <CaseStudyPage project={selectedProject} onBack={handleBackToWork} />
        )}

        <Footer />
      </div>
    </LanguageProvider>
  );
}