import { useCallback, useEffect, useMemo, useState } from "react";

const linkedInQr =
  "data:image/png;base64,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";

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
  {
    type: "references",
    eyebrow: "References",
    title: "References",
    bullets: [
      "Foucault, Michel. “The Subject and Power.” 1982.",
      "Butler, Judith. Bodies That Matter. 1993.",
      "Deleuze, G., Guattari, F. A Thousand Plateaus: Capitalism and Schizophrenia. 1987.",
      "Barad, Karen. Meeting the Universe Halfway. 2007.",
      "Orlikowski, Wanda J. “Sociomaterial Practices: Exploring Technology at Work.” 2007.",
      "Adam, Alison; Howcroft, Debra; Richardson, Helen. “A Decade of Neglect: Reflecting on Gender and IS.” 2004.",
      "Erina, Polina. (Re)production of Gender Inequality through Discriminatory Practices against Women: A Case Study of Corporate IT Consulting. MA thesis, European Humanities University, 2024.",
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

        {slide.type === "references" && (
          <img className="references-qr" src={linkedInQr} alt="LinkedIn QR code" />
        )}

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

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: black;
          color: white;
          font-family: Arial, sans-serif;
          overflow: hidden;
        }

        .presentation {
          width: 100vw;
          height: 100vh;
          background: black;
        }

        .slide {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at top right, rgba(0,255,255,0.18), transparent 32%),
            radial-gradient(circle at bottom left, rgba(255,0,255,0.14), transparent 32%),
            #000;
        }

        .main-stage {
          min-height: 68vh;
          padding: 60px 60px 28px;
        }

        .topline {
          display: flex;
          justify-content: space-between;
          gap: 28px;
          font-size: 14px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #888;
          border-bottom: 1px solid rgba(255,255,255,0.16);
          padding-bottom: 18px;
        }

        .email-line {
          position: fixed;
          left: 60px;
          bottom: 28px;
          z-index: 38;
          color: #888;
          font-size: 14px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0;
          animation: fadeUp .9s ease forwards;
        }

        .content {
          max-width: 1060px;
          margin-top: 72px;
          position: relative;
          z-index: 2;
        }

        h1 {
          font-size: clamp(38px, 5.1vw, 72px);
          line-height: 1.02;
          margin: 0 0 36px;
          animation: fadeUp 0.9s ease forwards;
        }

        h2 {
          font-size: clamp(23px, 2.35vw, 36px);
          font-weight: 300;
          color: #bbb;
          margin: 0 0 42px;
          animation: fadeUp 1.1s ease forwards;
        }

        .accent {
          display: inline-block;
          padding: 13px 26px;
          border: 1px solid cyan;
          border-radius: 999px;
          color: cyan;
          margin-top: 20px;
          box-shadow: 0 0 30px rgba(0,255,255,0.3);
          animation: glowIn 1.2s ease forwards;
          font-size: clamp(18px, 1.8vw, 26px);
        }

        .intro-line {
          margin-top: 28px;
          font-size: clamp(17px, 1.65vw, 24px);
          line-height: 1.5;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.04em;
          animation: fadeUp 1.2s ease forwards;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          max-width: 980px;
        }

        li {
          font-size: clamp(19px, 2.05vw, 29px);
          line-height: 1.34;
          margin-bottom: 18px;
          color: #ddd;
          opacity: 0;
          animation: bulletReveal 0.8s ease forwards;
        }

        li::before {
          content: "—";
          color: cyan;
          margin-right: 16px;
        }

        li:nth-child(1) { animation-delay: 0.15s; }
        li:nth-child(2) { animation-delay: 0.3s; }
        li:nth-child(3) { animation-delay: 0.45s; }
        li:nth-child(4) { animation-delay: 0.6s; }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          width: min(1120px, 88vw);
        }

        .mini-card {
          min-height: 260px;
          border: 1px solid rgba(0,255,255,0.5);
          border-radius: 28px;
          padding: 28px;
          background: rgba(0,0,0,0.58);
          box-shadow: 0 0 34px rgba(0,255,255,0.1);
          animation: fadeUp 1s ease forwards;
        }

        .mini-label {
          color: cyan;
          font-size: 17px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .mini-card p {
          color: rgba(255,255,255,0.82);
          font-size: clamp(19px, 1.65vw, 24px);
          line-height: 1.4;
          margin: 0;
        }

        .questions {
          display: grid;
          gap: 24px;
          max-width: 1050px;
        }

        .question {
          display: grid;
          grid-template-columns: 82px 1fr;
          align-items: start;
          gap: 24px;
          padding: 24px 28px;
          border-left: 2px solid cyan;
          background: linear-gradient(90deg, rgba(0,255,255,0.1), transparent);
          border-radius: 0 28px 28px 0;
          animation: fadeUp 1s ease forwards;
        }

        .question span {
          color: cyan;
          font-size: 26px;
          letter-spacing: 0.08em;
        }

        .question p {
          margin: 0;
          color: #ddd;
          font-size: clamp(19px, 1.85vw, 28px);
          line-height: 1.32;
        }

        .slide-map .content {
          margin-top: 72px;
          max-width: none;
        }

        .map-title {
          font-size: clamp(38px, 5.1vw, 72px);
          line-height: 1.02;
          margin: 0 0 10px;
        }

        .map-subtitle {
          font-size: clamp(20px, 2vw, 28px);
          margin-bottom: 24px;
        }

        .map-wrap {
          width: min(980px, 80vw);
          height: 360px;
          position: relative;
          margin-top: 0;
          transform: translateX(-6px);
        }

        .map-cards {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 38px;
          position: relative;
          z-index: 2;
        }

        .map-card {
          position: relative;
          min-height: 160px;
          padding: 20px 14px;
          border: 1.5px solid currentColor;
          border-radius: 18px;
          background: rgba(0,0,0,0.68);
          box-shadow: 0 0 28px rgba(0,255,255,0.12);
          text-align: center;
        }

        .map-card h3 {
          white-space: pre-line;
          margin: 0;
          font-size: 20px;
          line-height: 1.08;
          letter-spacing: 0.04em;
        }

        .map-rule {
          width: 70%;
          height: 2px;
          margin: 14px auto 20px;
          background: currentColor;
          box-shadow: 0 0 14px currentColor;
        }

        .map-text {
          display: grid;
          gap: 4px;
          color: rgba(255,255,255,0.84);
          font-size: 15px;
          line-height: 1.14;
        }

        .cyan { color: cyan; border-color: cyan; }
        .blue { color: #20b8ff; border-color: #20b8ff; }
        .violet { color: #c047ff; border-color: #c047ff; }
        .pink { color: #ff2bd6; border-color: #ff2bd6; }

        .map-arrow {
          opacity: 0;
          animation: fadeUp .4s ease forwards;
          position: absolute;
          top: 70px;
          right: -31px;
          width: 26px;
          height: 2px;
          background: currentColor;
          box-shadow: 0 0 12px currentColor;
        }

        .arrow-0 { animation-delay: .6s; }
        .arrow-1 { animation-delay: 1.3s; }
        .arrow-2 { animation-delay: 2s; }

        .map-arrow::after {
          content: "";
          position: absolute;
          right: 0;
          top: -7px;
          width: 14px;
          height: 14px;
          border-right: 2px solid currentColor;
          border-top: 2px solid currentColor;
          transform: rotate(45deg);
        }

        .merge-line {
          opacity: 0;
          animation: fadeUp .8s ease forwards;
          animation-delay: 2.9s;
          position: absolute;
          left: 8.5%;
          right: 8.5%;
          top: 224px;
          height: 2px;
          background: linear-gradient(90deg, cyan, #20b8ff, #c047ff, #ff2bd6);
          box-shadow: 0 0 16px rgba(0,255,255,0.25);
        }

        .merge-arrow {
          opacity: 0;
          animation: fadeUp .8s ease forwards;
          animation-delay: 2.9s;
          position: absolute;
          left: 50%;
          top: 224px;
          width: 2px;
          height: 48px;
          background: #dbefff;
          box-shadow: 0 0 12px rgba(0,255,255,0.35);
        }

        .merge-arrow::after {
          content: "";
          position: absolute;
          left: -7px;
          bottom: 0;
          width: 14px;
          height: 14px;
          border-right: 2px solid #dbefff;
          border-bottom: 2px solid #dbefff;
          transform: rotate(45deg);
        }

        .map-result {
          opacity: 0;
          animation: glowIn 1s ease forwards;
          animation-delay: 3.5s;
          position: absolute;
          left: 50%;
          top: 258px;
          transform: translateX(-50%);
          width: min(420px, 58vw);
          padding: 20px 26px 22px;
          border: 1.5px solid cyan;
          border-radius: 18px;
          background: rgba(0,0,0,0.74);
          box-shadow: 0 0 34px rgba(0,255,255,0.18);
          text-align: center;
        }

        .it-guy {
          font-size: clamp(34px, 3.4vw, 48px);
          font-weight: 700;
          line-height: 1;
        }

        .it { color: white; }

        .as-subject {
          margin-top: 22px;
          color: rgba(255,255,255,0.88);
          font-size: clamp(18px, 1.45vw, 23px);
        }

        .guy {
          color: #ff3aa9;
          opacity: 0;
          animation: glowIn 1s ease forwards, pulseGuy 2.5s ease-in-out 4.2s infinite;
          animation-delay: 3.8s, 4.2s;
          text-shadow: 0 0 18px rgba(255,43,214,0.55);
        }

        .slide-references .content {
          max-width: 1320px;
        }

        .slide-references ul {
          max-width: 1320px;
          padding-right: 420px;
        }

        .slide-references li {
          font-size: clamp(15px, 1.2vw, 19px);
          line-height: 1.34;
          margin-bottom: 10px;
        }

        .references-qr {
          position: fixed;
          right: 96px;
          top: 285px;
          width: 260px;
          height: auto;
          z-index: 30;
          border: none;
          border-radius: 0;
          box-shadow: none;
          image-rendering: auto;
        }

        .footer {
          position: fixed;
          right: 60px;
          bottom: 28px;
          z-index: 40;
          display: flex;
          align-items: center;
          gap: 12px;
          pointer-events: auto;
        }

        button {
          min-width: 50px;
          height: 46px;
          padding: 0 18px;
          border: 1px solid rgba(0,255,255,0.58);
          border-radius: 999px;
          background: rgba(0,0,0,0.72);
          color: white;
          cursor: pointer;
          font-size: 16px;
          box-shadow: 0 0 24px rgba(0,255,255,0.15);
        }

        button:hover:not(:disabled) {
          color: cyan;
          transform: translateY(-1px);
        }

        button:disabled {
          cursor: not-allowed;
          opacity: 0.35;
        }

        .counter {
          min-width: 70px;
          text-align: center;
          color: #aaa;
          font-size: 15px;
          letter-spacing: 0.08em;
        }

        .progress {
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100vw;
          height: 3px;
          z-index: 50;
          background: rgba(255,255,255,0.08);
        }

        .progress div {
          height: 100%;
          background: cyan;
          box-shadow: 0 0 18px cyan;
          transition: width 0.25s ease;
        }

        .glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .glow1 {
          width: 420px;
          height: 420px;
          background: rgba(0,255,255,0.16);
          top: -100px;
          right: -100px;
          animation: driftOne 8s ease-in-out infinite alternate;
        }

        .glow2 {
          width: 420px;
          height: 420px;
          background: rgba(255,0,255,0.12);
          bottom: -120px;
          left: -120px;
          animation: driftTwo 9s ease-in-out infinite alternate;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        @keyframes glowIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes bulletReveal {
          from { opacity: 0; transform: translateX(-20px); filter: blur(6px); }
          to { opacity: 1; transform: translateX(0); filter: blur(0); }
        }

        @keyframes driftOne {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(-40px, 60px) scale(1.15); }
        }

        @keyframes driftTwo {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(50px, -40px) scale(1.12); }
        }

        @keyframes pulseGuy {
          0% { text-shadow: 0 0 10px rgba(255,43,214,.3); }
          50% {
            text-shadow:
              0 0 18px rgba(255,43,214,.6),
              0 0 30px rgba(255,43,214,.4);
          }
          100% { text-shadow: 0 0 10px rgba(255,43,214,.3); }
        }

        .slide-map .map-wrap {
          opacity: 0;
          animation: fadeUp .9s ease forwards;
          animation-delay: .2s;
        }

        .slide-map .map-card,
        .slide-map .map-arrow,
        .slide-map .merge-line,
        .slide-map .merge-arrow,
        .slide-map .map-result,
        .slide-map .guy {
          opacity: 1 !important;
          animation: none !important;
          animation-delay: 0s !important;
        }
      `}</style>
    </div>
  );
}
