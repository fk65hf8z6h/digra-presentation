// POWERPOINT TEMPLATE SPECIFICATION
// ==================================
// FORMAT: 16:9 widescreen
// MAIN COLORS:
// #000000 (background)
// #22d3ee (cyan accent)
// #d946ef (magenta accent)
// #a1a1aa (secondary text)
//
// TYPOGRAPHY:
// Titles: Inter / Space Grotesk / Helvetica Neue Bold
// Body: Inter Light
//
// POWERPOINT ANIMATION RECOMMENDATIONS:
// - Fade (0.4 sec)
// - Morph transitions
// - Appear by paragraph for bullet points
// - Soft zoom for title slides
//
// MASTER SLIDES:
// 1. Title slide
// 2. Theory slide
// 3. Quote slide
// 4. Diagram slide
// 5. Conclusion slide
//
// VISUAL STYLE:
// dark cybernetic academic minimalism
// subtle gradients + glow accents
// no decorative icons
// large typography + empty space

export default function DigraPresentationConcept() {
  const theme = {
  accent: 'text-cyan-300',
  border: 'border-cyan-400',
  muted: 'text-zinc-400'
};

const slides = [
    {
      title: 'Ontological invisibility',
      subtitle: 'as a result of digital subjectification',
      accent: 'Who are you, IT-guy?',
      bg: 'from-black via-zinc-900 to-cyan-950'
    },
    {
      title: 'About the lecturer',
      bullets: [
        'engineering background + plasma technologies',
        'MA in sociology / gender studies',
        '15 years in business process automation',
        'PhD in social and political philosophy'
      ],
      bg: 'from-zinc-950 via-black to-fuchsia-950'
    },
    {
      title: 'Problem field',
      quote: 'Women are operationally visible in corporate IT, but ontologically unrecognizable as digital subjects.',
      bg: 'from-black via-zinc-900 to-emerald-950'
    },
    {
      title: 'Theorisation',
      bullets: [
        'Foucault — subjectification through power',
        'Butler — recognition through norms',
        'Deleuze — repetition and process',
        'Barad — agential cuts and ontological exclusion'
      ],
      bg: 'from-zinc-950 via-black to-violet-950'
    },
    {
      title: 'Research question',
      quote: 'How does digital subjectification produce ontological invisibility?',
      bg: 'from-black via-zinc-950 to-sky-950'
    },
    {
      title: 'Digital subject',
      subtitle: 'universal / neutral / masculinized',
      accent: 'IT guy as universal figure',
      bg: 'from-zinc-950 via-black to-fuchsia-950'
    },
    {
      title: 'Agential realism',
      bullets: [
        'intra-action',
        'entanglement',
        'agential cuts',
        'apparatuses of recognition'
      ],
      bg: 'from-black via-zinc-900 to-cyan-950'
    },
    {
      title: 'Conclusion',
      quote: 'Digital subjectivity is constituted through patterned exclusions.',
      bg: 'from-black via-zinc-950 to-emerald-950'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-y-auto">
      {slides.map((slide, idx) => (
        <section
          key={idx}
          className={`h-screen w-full bg-gradient-to-br ${slide.bg} flex flex-col justify-between p-16 border-b border-white/10 relative overflow-hidden animate-[slideIn_1.2s_ease]`}
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.4),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,0,255,0.25),transparent_30%)]" />

          <div className="relative z-10 flex justify-between items-start">
            <div className="text-sm tracking-[0.3em] uppercase text-cyan-300">
              DiGRA 2026
            </div>
            <div className="text-sm text-zinc-400">Polina Erina</div>
          </div>

          <div className="relative z-10 max-w-5xl space-y-8">
            <h1 className="text-6xl md:text-7xl font-black leading-[0.95] tracking-tight opacity-0 animate-[titleReveal_1s_ease_forwards]">
              {slide.title}
            </h1>

            {slide.subtitle && (
              <div className="text-2xl text-zinc-300 font-light tracking-wide opacity-0 animate-[fadeUp_1.4s_ease_forwards]">
                {slide.subtitle}
              </div>
            )}

            {slide.accent && (
              <div className="inline-block px-6 py-3 border border-cyan-400 text-cyan-300 text-xl rounded-full backdrop-blur-sm opacity-0 animate-[glowPulse_2s_ease_forwards]">
                {slide.accent}
              </div>
            )}

            {slide.quote && (
              <blockquote className="text-3xl leading-relaxed text-zinc-200 max-w-4xl border-l-4 border-cyan-400 pl-8 italic opacity-0 animate-[quoteFloat_1.6s_ease_forwards]">
                {slide.quote}
              </blockquote>
            )}

            {slide.bullets && (
              <ul className="space-y-5 text-2xl text-zinc-200">
                {slide.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 opacity-0 animate-[bulletReveal_0.9s_ease_forwards]"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <span className="text-cyan-400 mt-1">▣</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative z-10 flex justify-between items-end">
            <div className="text-zinc-500 text-sm tracking-wide">
              digital subjectivities / labour / gender / ontology
            </div>
            <div className="text-zinc-600 text-lg">0{idx + 1}</div>
          </div>
        </section>
      ))}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(1.03);
            filter: blur(12px);
          }
          to {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
          }
        }

        @keyframes titleReveal {
          from {
            opacity: 0;
            transform: translateY(40px);
            letter-spacing: 0.15em;
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: -0.03em;
            filter: blur(0px);
          }
        }

        @keyframes quoteFloat {
          from {
            opacity: 0;
            transform: translateX(-30px);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0px);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }

        @keyframes glowPulse {
          0% {
            opacity: 0;
            transform: scale(0.9);
            box-shadow: 0 0 0 rgba(34,211,238,0);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 40px rgba(34,211,238,0.35);
          }
        }

        @keyframes bulletReveal {
          from {
            opacity: 0;
            transform: translateX(-20px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
