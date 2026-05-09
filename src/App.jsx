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

  return (
    <div className="presentation">
      {slides.map((slide, index) => (
        <section className="slide" key={index}>
          <div className="glow glow1"></div>
          <div className="glow glow2"></div>

          <div className="topline">
            <span>DiGRA 2026</span>
            <span>Polina Erina</span>
          </div>

          <div className="content">
            <h1>{slide.title}</h1>

            {slide.subtitle && (
              <h2>{slide.subtitle}</h2>
            )}

            {slide.accent && (
              <div className="accent">
                {slide.accent}
              </div>
            )}

            {slide.text && (
              <p>{slide.text}</p>
            )}

            {slide.bullets && (
              <ul>
                {slide.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
