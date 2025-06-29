import React, { useState, useEffect, useMemo } from "react";

function Type() {
  const phrases = useMemo(() => [
    "DevOps Architect",
    "Cloud Innovator",
    "Tech Visionary",
    "Infrastructure Engineer",
    "AI Explorer",
    "System Designer"
  ], []);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 90;
  const deletingSpeed = 40;
  const pauseTime = 1200;

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[index % phrases.length];
    if (isDeleting) {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), deletingSpeed);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    } else {
      if (text.length < currentPhrase.length) {
        timer = setTimeout(() => setText(currentPhrase.slice(0, text.length + 1)), typingSpeed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, phrases]);

  return (
    <div className="type-container minimal-type">
      <span className="minimal-typing-text">{text}<span className="minimal-cursor">|</span></span>
    </div>
  );
}

export default Type;
