import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative flex flex-col h-full transition-all hover:bg-slate-50/50 rounded-lg -mx-4 p-4 md:mx-0 md:p-0 hover:md:bg-transparent">
      
      <div className="flex items-center justify-between mb-4">
         <span className="text-sm font-semibold uppercase tracking-wider text-slate-500" aria-label={project.year}>
            {project.year}
         </span>
         
         {/* Links moved to top-right for cleaner card look */}
         <div className="flex gap-4">
            {project.links && project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                aria-label={`${link.label} for ${project.title}`}
                className="text-slate-500 hover:text-teal-700 transition-colors"
              >
                {link.type === 'github' ? (
                  <Github className="w-5 h-5" />
                ) : (
                  <ArrowUpRight className="w-5 h-5" />
                )}
              </a>
            ))}
         </div>
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
        <a href={project.links?.[0]?.url || '#'} className="focus:outline-none">
           <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
           {project.title}
        </a>
      </h3>
      
      {/* Removed max-w constraints to fill the grid cell */}
      <p className="text-slate-600 leading-relaxed text-base flex-grow">
        {project.description}
      </p>

    </div>
  );
};

export default ProjectCard;