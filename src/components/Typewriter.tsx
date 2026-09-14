"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
};

export default function Typewriter({
  phrases,
  typeSpeed = 65,
  deleteSpeed = 32,
  holdTime = 1600,
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) {
      setAnimate(true);
    }
  }, []);

  useEffect(() => {
    if (!animate || phrases.length === 0) {
      return;
    }

    const current = phrases[index % phrases.length];

    if (!deleting && text === current) {
      const hold = window.setTimeout(() => setDeleting(true), holdTime);
      return () => window.clearTimeout(hold);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((value) => (value + 1) % phrases.length);
      return;
    }

    const nextText = deleting
      ? current.slice(0, text.length - 1)
      : current.slice(0, text.length + 1);

    const tick = window.setTimeout(
      () => setText(nextText),
      deleting ? deleteSpeed : typeSpeed,
    );

    return () => window.clearTimeout(tick);
  }, [animate, deleting, deleteSpeed, holdTime, index, phrases, text, typeSpeed]);

  // Without JS, or with reduced motion on, the first phrase is just there as plain text.
  if (!animate) {
    return <span>{phrases[0]}</span>;
  }

  return (
    <>
      <span aria-hidden="true">{text}</span>
      <span aria-hidden="true" className="caret" />
      <span className="sr-only">{phrases.join(", ")}</span>
    </>
  );
}