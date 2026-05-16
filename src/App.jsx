import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";

const slides = [
  {
    type: "title",
    eyebrow: "DiGRA 2026",
    title: "Ontological invisibility",
    subtitle: "as a result of digital subjectification",
    accent: "Who are you, IT-guy?",
    intro: "Polina Erina · PhD candidate · EHU · Vilnius, Lithuania",
  },
  {
    eyebrow: "Positioning",
    title: "About the lecturer",
    bullets: [
      "engineering degree",
      "MA research: women in corporate IT",
      "15 years in business process automation",
      "PhD candidate in social and political philosophy",
    ],
  },
  {
    eyebrow: "Problem field",
    title: "Problem field",
    bullets: [
      "women are not fully recognizable as digital subjects",
      "there is a gap between participation and recognizability",
      "“IT guy” functions as a universal technical figure",
    ],
  },
  {
    type: "practice",
    eyebrow: "Recognition in practice",
    title: "Recognition in practice",
    cards: [
      {
        label: "Before interaction",
        text: "You enter an automation department and look for a male director.",
      },
      {
        label: "During interaction",
        text: "Technical questions are addressed first to a man before roles are clarified.",
      },
      {
        label: "As a generalized image",
        text: "“The IT team will solve it” often evokes a male programmer.",
      },
    ],
  },
  {
    type: "questions",
    eyebrow: "Research questions",
    title: "Research questions",
    questions: [
      "How is the figure of the “IT guy” produced as a normative digital subject?",
      "Which forms of digital labor become recognizable — and which remain ontologically invisible?",
      "How do corporate sociotechnical practices organize regimes of recognizability?",
    ],
  },
  {
    eyebrow: "Sites of production",
    title: "Where recognizability is produced",
    bullets: [
      "interactions with teams, clients and managers — who receives authority first?",
      "distribution of professional roles — analyst / architect / consultant",
      "organizational routines and task allocation — who coordinates, who is seen as technical?",
      "expectations of technical authority — who is expected to know?",
    ],
  },
  {
    type: "map",
    eyebrow: "Theoretical map",
    title: "Theoretical map",
    subtitle: "how digital subjectivity is produced",
  },
  {
    eyebrow: "Universalization",
    title: "The “IT guy” as universal technical subject",
    bullets: [
      "collapse of professional differentiation",
      "generalized technical identity",
      "abstraction from concrete labor practices",
      "recognizability detached from specific forms of work",
    ],
  },
  {
    eyebrow: "Conclusion",
    title: "Ontological invisibility as a structural effect",
    bullets: [
      "digital subjectivity is produced through regimes of recognizability",
      "“IT guy” functions as a normative technical subject",
      "ontological invisibility emerges as a structural effect",
    ],
  },
];

function TheoryMap() {
  const items = [
    {
      name: "FOUCAULT",
      color: "cyan",
      lines: ["subjectification", "through power", "organizational", "procedures"],
    },
    {
      name: "BUTLER",
      color: "blue",
      lines: ["recognizability", "performative", "repetition"],
    },
    {
      name: `DELEUZE &
GUATTARI`,
      color: "violet",
      lines: ["assemblages", "distributed", "subjectivity"],
    },
    {
      name: "BARAD",
      color: "pink",
      lines: ["intra-actions", "materialization"],
    },
  ];

  return (
    <div className="map-wrap">
      <div className="map-cards">
        {items.map((item, index) => (
          <div className={`map-card ${item.color}`} key={item.name}>
            <h3>{item.name}</h3>
            <div className="map-rule" />
            <div className="map-text">
              {item.lines.map((line, lineIndex) => (
                <span key={lineIndex}>{line}</span>
              ))}
            </div>
            {index < items.length - 1 && <div className={`map-arrow arrow-${index}`} />}
          </div>
        ))}
      </div>

      <div className="merge-line" />
      <div className="merge-arrow" />

      <div className="map-result">
        <div className="it-guy">
          <span className="it">it</span> <span className="guy">guy</span>
        </div>
        <div className="as-subject">as universalized digital subject</div>
      </div>
    </div>
  );
}

export default function App() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const slide = slides[current];

  const goTo = useCallback(
    (index) => setCurrent(Math.min(Math.max(index, 0), total - 1)),
    [total]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handleKey = (event) => {
      const tag = event.target?.tagName?.toLowerCase();
      if (["input", "textarea", "select", "button"].includes(tag)) return;

      if (["ArrowRight", "PageDown", " ", "Enter"].includes(event.key)) {
        event.preventDefault();
        setCurrent((value) => Math.min(value + 1, total - 1));
      }

      if (["ArrowLeft", "PageUp", "Backspace"].includes(event.key)) {
        event.preventDefault();
        setCurrent((value) => Math.max(value - 1, 0));
      }

      if (event.key === "Home") {
        event.preventDefault();
        setCurrent(0);
      }

      if (event.key === "End") {
        event.preventDefault();
        setCurrent(total - 1);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [total]);

  const progress = useMemo(() => `${((current + 1) / total) * 100}%`, [current, total]);

  return (
    <div className="presentation">
      <section className={`slide slide-${slide.type || "standard"}`} key={current}>
        <div className="glow glow1" />
        <div className="glow glow2" />

        <div className="main-stage">
          <div className="topline">
            <span>{slide.eyebrow || "DiGRA 2026"}</span>
            <span>Polina Erina</span>
          </div>

          <main className="content" aria-live="polite">
            {slide.type === "map" ? (
              <>
                <h1 className="map-title">{slide.title}</h1>
                <h2 className="map-subtitle">{slide.subtitle}</h2>
                <TheoryMap />
              </>
            ) : (
              <>
                <h1>{slide.title}</h1>
                {slide.subtitle && <h2>{slide.subtitle}</h2>}
                {slide.accent && <div className="accent">{slide.accent}</div>}
                {slide.intro && <div className="intro-line">{slide.intro}</div>}

                {slide.cards && (
                  <div className="card-grid">
                    {slide.cards.map((card, index) => (
                      <article className="mini-card" key={index}>
                        <div className="mini-label">{card.label}</div>
                        <p>{card.text}</p>
                      </article>
                    ))}
                  </div>
                )}

                {slide.questions && (
                  <div className="questions">
                    {slide.questions.map((question, index) => (
                      <div className="question" key={index}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <p>{question}</p>
                      </div>
                    ))}
                  </div>
                )}

                {slide.bullets && (
                  <ul>
                    {slide.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </main>
        </div>

        <footer className="footer">
          <button type="button" onClick={prev} disabled={current === 0} aria-label="Previous slide">
            ←
          </button>
          <span className="counter">{current + 1} / {total}</span>
          <button type="button" onClick={next} disabled={current === total - 1} aria-label="Next slide">
            →
          </button>
        </footer>

        <div className="progress" aria-hidden="true">
          <div style={{ width: progress }} />
        </div>
      </section>

      <div className="email-line">polina.erin@gmail.com</div>
    </div>
  );
}
  );
}
