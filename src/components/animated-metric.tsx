"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedMetricProps = {
  end: number;
  suffix: string;
};

export default function AnimatedMetric({ end, suffix }: AnimatedMetricProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(1);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() => setValue(end));
      return () => window.cancelAnimationFrame(frame);
    }

    let animationFrame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const startedAt = performance.now();
        const duration = end >= 100 ? 1600 : 1000;

        const animate = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.max(1, Math.round(end * eased)));
          if (progress < 1) animationFrame = window.requestAnimationFrame(animate);
        };

        animationFrame = window.requestAnimationFrame(animate);
      },
      { threshold: 0.6 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [end]);

  return (
    <span ref={elementRef}>
      <span aria-hidden="true">{value}{suffix}</span>
      <span className="sr-only">{end}{suffix}</span>
    </span>
  );
}
