import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        setIsVisible(true);
        observer.unobserve(element);
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -6% 0px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const safeDelay = Math.min(Math.max(delay, 0), 400);
  const classes = ['reveal', isVisible ? 'reveal-visible' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={elementRef}
      className={classes}
      style={{ transitionDelay: `${safeDelay}ms` }}
      onFocus={() => setIsVisible(true)}
    >
      {children}
    </div>
  );
}
