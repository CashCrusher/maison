import React from 'react';
import { cn } from './Badge';

export default function Section({ id, children, className }) {
  return (
    <section 
      id={id} 
      className={cn(
        "relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24",
        className
      )}
    >
      {/* Content wrapper with a left margin to accommodate the elevation profile on larger screens */}
      <div className="md:ml-24 lg:ml-32">
        {children}
      </div>
    </section>
  );
}
