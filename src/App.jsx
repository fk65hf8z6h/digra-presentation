import { useEffect, useState } from "react";

export default function App() {
  const slides = [
    {
      title: "Ontological invisibility",
      subtitle: "as a result of digital subjectification",
      accent: "Who are you, IT-guy?"
    },
    {
      title: "Problem field",
      text: "Women are operationally visible in corporate IT, but ontologically unrecognizable as digital subjects."
    },
    {
      title: "Theorisation",
      bullets: [
        "Foucault — subjectification through power",
        "Butler — recognition through norms",
        "Deleuze — repetition and process",
        "Barad — agential cuts and ontological exclusion"
      ]
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((s) => Math.min(s + 1, slides.length - 1));
  const prev = () => setCurrent((s) => Math.max(s - 1, 0));

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") next();
      if (e.key === "ArrowLeft" || e.key === "PageUp") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const slide = slides[current];

  return (
    <div className="presentation">
      <section className="slide" key={current}>
        <div className="glow glow1"></div>
        <div className="glow glow2"></div>

        <div className="topline">
          <span>DiGRA 2026</span>
          <span>Polina Erina</span>
        </div>

        <div className="content">
          <h1>{slide.title}</h1>

          {slide.subtitle && <h2>{slide.subtitle}</h2>}

          {slide.accent && <div className="accent">{slide.accent}</div>}

          {slide.text && <p>{slide.text}</p>}

          {slide.bullets && (
            <ul>
              {slide.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="footer">
          <button onClick={prev}>←</button>
          <span>{current + 1} / {slides.length}</span>
          <button onClick={next}>→</button>
        </div>
      </section>
    </div>
  );
}
