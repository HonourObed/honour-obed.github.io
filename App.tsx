import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import NewsList from './components/NewsList';
import { PROJECTS, NEWS_ITEMS, PRESENTATIONS } from './constants';

const App: React.FC = () => {
  return (
    <div
      className="bg-slate-50 min-h-screen selection:bg-teal-300 selection:text-teal-900"
      style={{
        backgroundImage: 'radial-gradient(rgba(100, 116, 139, 0.08) 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px'
      }}
    >
      <Navbar />

      {/* Main Container: Widened to max-w-7xl for a more expansive feel */}
      <div className="mx-auto max-w-7xl px-6 py-12 pt-28 font-sans md:px-12 md:py-24">

        {/* Home / Intro Section */}
        <section id="home" className="mb-24 md:mb-40 scroll-mt-32">
          <Sidebar />

          <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="hidden lg:block lg:col-span-4">
              {/* Spacer or additional context could go here, currently empty to offset text */}
            </div>
            <div className="lg:col-span-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-8">About</h3>
              <div className="text-slate-600 leading-relaxed text-lg sm:text-xl space-y-8">
                <p>
                I am Obed Honour Eje, a fourth-year Mechatronics Engineering student at the Federal University of Technology, Minna, Nigeria, and an independent researcher at the ML Collective Robotics Focus Group. I am also a Robotics and ROS 2 Tutor for the IEEE FUTMinna Student Branch and Technical Lead of Nigeria's first MATLAB Student Community.  
                </p>
                <p>
                My research is organized around a single recurring problem: intelligent systems that perform well under controlled conditions but degrade in unpredictable ways when deployed in the real world. That gap, between benchmark performance and genuine reliability, has been the organizing concern of everything I have built.
                </p>
                <p>
                  My work spans the full perception-to-action pipeline of autonomous robotic systems. On the perception side, I develop depth-aware object detection architectures that extend standard YOLO models to support 4-channel RGB-D input, enabling robots to reason about geometry and occlusion rather than relying purely on visual features. Alongside this, I have conducted systematic domain shift robustness studies comparing CNN, two-stage, and vision transformer detectors under synthetic environmental perturbations, with a consistent finding: purely vision-based perception stacks are fragile in ways that benchmark evaluation does not reveal. On the state estimation side, I have implemented EKF-based multi-sensor fusion integrating LiDAR, IMU, and wheel odometry for autonomous mobile robot navigation, built SLAM pipelines for real-time probabilistic mapping, and deployed full perception-action architectures on resource-constrained edge hardware.
                </p>
                <p>
                  My long-term goal is a PhD focused on bringing principled uncertainty reasoning into the design of robotic perception and control systems built for real-world deployment, at the intersection of probabilistic state estimation, robust learning-based perception, and the architectural decisions that determine whether a system fails gracefully or catastrophically when its assumptions about the world no longer hold.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 md:mb-40 scroll-mt-28" aria-label="Selected projects">
          <div className="mb-16 border-b border-slate-200 pb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Selected Projects</h2>
          </div>

          {/* Grid Layout: 2 columns on large screens to 'fit more' and 'spread out' */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-20 text-center md:text-left">
            <a
              href="https://github.com/HonourObed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium leading-tight text-slate-900 hover:text-teal-700 group text-lg"
            >
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-700 motion-reduce:transition-none">
                View Full Project Archive
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </section>

        {/* Presentations Section */}
        <section id="presentations" className="mb-24 md:mb-40 scroll-mt-28" aria-label="Publications and Presentations">
          <div className="mb-12 border-b border-slate-200 pb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Publications & Presentations</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:col-span-10">
            {PRESENTATIONS.map((item) => (
              <div 
                key={item.id} 
                className="group relative flex flex-col items-start justify-between rounded-2xl p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50 hover:shadow-md"
              >
                <div className="flex-1 w-full">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 text-sm mb-3">{item.authors}</p>
                  
                  <div className="flex flex-wrap items-center gap-3 text-slate-500 text-sm mt-auto pt-4 border-t border-slate-100">
                    <span className="font-medium text-slate-700">{item.venue}</span>
                    {item.date && (
                      <>
                        <span aria-hidden="true">&middot;</span>
                        <span>{item.date}</span>
                      </>
                    )}
                    <span className="ml-auto inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-700 ring-1 ring-inset ring-teal-600/20">
                      {item.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="scroll-mt-28" aria-label="News and updates">
          <div className="mb-12 border-b border-slate-200 pb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">News</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Use full width for news, or constrain if preferred. Here we use 8 cols to keep it readable but distinct from projects */}
            <div className="lg:col-span-10">
              <NewsList items={NEWS_ITEMS} />
            </div>
          </div>
        </section>

        <footer className="mt-32 pt-10 border-t border-slate-200 text-sm text-slate-500">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>
              &copy; {new Date().getFullYear()} Obed Honour Eje.
            </p>
            <a href="mailto:obedhonoureje@gmail.com" className="hover:text-teal-700 transition-colors">
              obedhonoureje@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;