
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  withAnimatedEntry?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  className,
  children,
  withAnimatedEntry = true
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!withAnimatedEntry) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [withAnimatedEntry]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "py-16 md:py-24",
        withAnimatedEntry && "section-transition",
        className
      )}
    >
      <div className="container px-4 mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
