import React, { useState } from 'react';
import { MapPin, Mail, Github, Linkedin, FileText } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Sidebar: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <header className="flex flex-col lg:flex-row lg:items-start lg:gap-16">

      {/* 
          PROFILE IMAGE
      */}
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 shrink-0 mb-8 lg:mb-0">
        {!imgError ? (
          <img
            src="/img/Profile.jpeg"
            alt="Obed Honour Eje"
            className="w-full h-full rounded-2xl object-cover shadow-sm"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full rounded-2xl bg-slate-200 flex items-center justify-center shadow-sm">
            <span className="text-4xl sm:text-6xl font-bold text-slate-400 tracking-wider">OH</span>
          </div>
        )}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 pointer-events-none"></div>
      </div>

      <div className="flex-1">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900">
          Obed Honour Eje
        </h1>

        <div className="flex items-center mt-6 text-slate-500 text-base sm:text-lg font-medium">
          <MapPin className="w-5 h-5 mr-2" />
          <span>FUT Minna, Nigeria</span>
        </div>

        <p className="mt-8 text-slate-600 leading-relaxed text-lg sm:text-xl md:text-2xl">
          Engineering student exploring the computational foundations of autonomy, robotics, and intelligent automation.
        </p>

        <div className="mt-10">
          <nav className="flex flex-wrap items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base font-semibold text-slate-500 hover:text-teal-700 transition-colors group"
                aria-label={link.label}
              >
                <span className="group-hover:text-teal-700 transition-colors">
                  {link.icon === 'mail' && <Mail className="w-5 h-5" />}
                  {link.icon === 'github' && <Github className="w-5 h-5" />}
                  {link.icon === 'linkedin' && <Linkedin className="w-5 h-5" />}
                  {link.icon === 'file-text' && <FileText className="w-5 h-5" />}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;