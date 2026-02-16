import React from 'react';
import { NewsItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface NewsListProps {
  items: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ items }) => {
  return (
    <div className="relative border-l border-slate-200 ml-3 space-y-8 pb-8">
      {items.map((item) => (
        <div key={item.id} className="relative pl-8 sm:pl-10 group">
          <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-slate-300 transition-colors group-hover:bg-teal-500"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
            <time className="mb-2 sm:mb-0 min-w-[100px] text-xs font-semibold uppercase tracking-wide text-slate-500">
              {item.date}
            </time>
            <div className="text-sm leading-relaxed text-slate-600">
              {item.link ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-baseline gap-1 hover:text-teal-700 transition-colors"
                >
                  <span className="decoration-slate-300 underline underline-offset-4 group-hover/link:decoration-teal-700/50 transition-all">
                    {item.content}
                  </span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all group-hover/link:opacity-100 group-hover/link:translate-x-1" />
                </a>
              ) : (
                <span>{item.content}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;