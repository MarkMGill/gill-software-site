"use client";

import { useEffect, useState } from "react";

type TypewriterHeadingProps = {
  text: string;
};

export default function TypewriterHeading({ text }: TypewriterHeadingProps) {
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() => setVisibleCharacters(text.length));
      return () => window.cancelAnimationFrame(frame);
    }

    const timer = window.setInterval(() => {
      setVisibleCharacters((current) => {
        if (current >= text.length) {
          window.clearInterval(timer);
          return current;
        }

        return current + 1;
      });
    }, 42);

    return () => window.clearInterval(timer);
  }, [text]);

  return (
    <span className="grid">
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">{text}</span>
      <span className="col-start-1 row-start-1" aria-hidden="true">
        {text.slice(0, visibleCharacters)}
        <span className="typewriter-cursor text-[#2e7afe]">|</span>
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}

