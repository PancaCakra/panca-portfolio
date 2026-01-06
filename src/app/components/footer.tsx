import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left Section */}
          <div>
            <h3 className="font-semibold mb-1">Jauza Panca Erucakra</h3>
            <p className="text-gray-600 text-sm">UI Designer</p>
            <a 
              href="mailto:jauzapancaerucakra@gmail.com" 
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors inline-block mt-2"
            >
              jauzapancaerucakra@gmail.com
            </a>
          </div>

          {/* Right Section - Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/jauza-panca/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-700" />
            </a>
            <a
              href="mailto:jauzapancaerucakra@gmail.com"
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail size={20} className="text-gray-700" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Jauza Panca Erucakra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}