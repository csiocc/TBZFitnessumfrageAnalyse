import React, { ReactNode } from 'react';

interface CardProps {
  title: ReactNode;
  children: ReactNode;
  icon?: ReactNode;
  subtitle?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, icon, subtitle, className = '' }) => {
  return (
    <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 shadow-xl flex flex-col break-inside-avoid ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2 flex-wrap">
            {icon && <span className="text-emerald-400 shrink-0">{icon}</span>}
            <span className="break-words">{title}</span>
          </h3>
          {subtitle && <p className="text-slate-400 text-sm mt-1">{subtitle}</p>}
        </div>
      </div>
      <div className="flex-grow w-full h-64 min-h-[250px]">
        {children}
      </div>
    </div>
  );
};

export default Card;