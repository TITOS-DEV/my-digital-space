import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import profile from "@/assets/profile.jpeg";

const stats = [
  { value: "50+", label: "Proyectos" },
  { value: "3", label: "Años creando" },
  { value: "20+", label: "Clientes felices" },
  { value: "∞", label: "Café tomado" },
];

const skills = [
  "React", "TypeScript", "Node.js", "Tailwind CSS",
  "Next.js", "Figma", "PostgreSQL", "UI/UX", "Framer Motion",
];

const projects = [
  { n: "01", title: "Plataforma SaaS", tag: "Producto", year: "2025", desc: "Dashboard analítico para equipos remotos." },
  { n: "02", title: "E-commerce headless", tag: "Comercio", year: "2024", desc: "Tienda rápida con CMS modular." },
  { n: "03", title: "Identidad visual", tag: "Branding", year: "2024", desc: "Sistema de diseño completo." },
  { n: "04", title: "App móvil fitness", tag: "Mobile", year: "2023", desc: "Tracking + comunidad gamificada." },
];

const socials = [
  { icon: Github, label: "GitHub", url: "#" },
  { icon: Linkedin, label: "LinkedIn", url: "#" },
  { icon: Twitter, label: "Twitter", url: "#" },
  { icon: Instagram, label: "Instagram", url: "#" },
];

const Index = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("es", { hour: "2-digit", minute: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-lg tracking-tight">
            <span className="text-accent-red">●</span> portfolio
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-mono uppercase tracking-wider">
            <a href="#about" className="hover:text-accent-red transition-colors">About</a>
            <a href="#work" className="hover:text-accent-red transition-colors">Work</a>
            <a href="#skills" className="hover:text-accent-red transition-colors">Skills</a>
            <a href="#contact" className="hover:text-accent-red transition-colors">Contact</a>
          </nav>
          <span className="hidden md:block text-xs font-mono text-muted-foreground">{time} LOCAL</span>
        </div>
      </header>

      <main id="top" className="pt-16">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-32">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            ✦ Portafolio · 2026
          </p>
          <h1 className="font-display text-[clamp(3rem,10vw,8.5rem)] leading-[0.9] tracking-tight font-light">
            Diseño &<br />
            construyo <em className="text-accent-red not-italic font-normal">cosas</em><br />
            que importan.
          </h1>
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl">
            <p className="md:col-span-2 text-lg text-muted-foreground leading-relaxed">
              Desarrollador y diseñador enfocado en interfaces limpias,
              experiencias rápidas y productos con propósito.
            </p>
            <div className="flex items-end">
              <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider border-b border-foreground pb-1 hover:text-accent-red hover:border-accent-red transition-colors">
                Hablemos <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-hairline">
          <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-hairline">
            {stats.map((s) => (
              <div key={s.label} className="py-10 px-4 first:pl-0">
                <div className="font-display text-5xl md:text-6xl font-light tracking-tight">{s.value}</div>
                <div className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="max-w-6xl mx-auto px-6 md:px-10 py-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="relative">
              <img
                src={profile}
                alt="Retrato del autor"
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-3 -right-3 bg-accent-red text-accent-red-foreground px-3 py-1 font-mono text-xs uppercase tracking-wider">
                ● disponible
              </div>
            </div>
          </div>
          <div className="md:col-span-7 md:pl-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              ( 01 ) Sobre mí
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight tracking-tight">
              Curioso por naturaleza, <em className="text-accent-red not-italic">obsesivo</em> por elección.
            </h2>
            <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy una persona apasionada por el detalle, las tipografías bien
                ajustadas y los productos que se sienten livianos. Combino código
                y diseño para entregar experiencias memorables.
              </p>
              <p>
                Cuando no estoy frente a la pantalla, probablemente estoy
                explorando música nueva o tomando café demasiado fuerte.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="border-t border-hairline">
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  ( 02 ) Skills
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight">
                  Herramientas favoritas.
                </h2>
              </div>
              <span className="font-mono text-xs text-muted-foreground">{skills.length} ítems</span>
            </div>
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="px-5 py-2.5 border border-hairline rounded-full text-sm font-mono hover:bg-foreground hover:text-background transition-colors cursor-default"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="border-t border-hairline">
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              ( 03 ) Proyectos seleccionados
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-16">
              Trabajo reciente.
            </h2>
            <ul className="divide-y divide-hairline border-y border-hairline">
              {projects.map((p) => (
                <li key={p.n}>
                  <a href="#" className="group grid grid-cols-12 items-center py-8 gap-4 hover:bg-muted-soft/50 transition-colors px-2">
                    <span className="col-span-1 font-mono text-xs text-muted-foreground">{p.n}</span>
                    <div className="col-span-11 md:col-span-5">
                      <h3 className="font-display text-2xl md:text-3xl font-normal tracking-tight group-hover:text-accent-red transition-colors">
                        {p.title}
                      </h3>
                    </div>
                    <p className="hidden md:block md:col-span-3 text-sm text-muted-foreground">{p.desc}</p>
                    <span className="hidden md:block md:col-span-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">{p.tag} · {p.year}</span>
                    <ArrowUpRight className="hidden md:block md:col-span-1 w-5 h-5 justify-self-end text-muted-foreground group-hover:text-accent-red group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-hairline bg-muted-soft">
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-32">
            <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-60 mb-6">
              ( 04 ) Contacto
            </p>
            <h2 className="font-display text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.95] font-light tracking-tight">
              ¿Tienes una idea?<br />
              <em className="not-italic text-accent-red">Construyámosla.</em>
            </h2>
            <div className="mt-16 grid md:grid-cols-2 gap-12">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-3">Email</p>
                <a href="mailto:hola@ejemplo.com" className="group inline-flex items-center gap-3 font-display text-2xl md:text-3xl hover:text-accent-red transition-colors">
                  <Mail className="w-6 h-6" />
                  hola@ejemplo.com
                </a>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-3">Redes</p>
                <ul className="flex flex-wrap gap-3">
                  {socials.map(({ icon: Icon, label, url }) => (
                    <li key={label}>
                      <a
                        href={url}
                        aria-label={label}
                        className="w-12 h-12 inline-flex items-center justify-center border border-background/20 rounded-full hover:bg-accent-red hover:border-accent-red transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-muted-soft border-t border-hairline">
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-wrap justify-between items-center gap-4 font-mono text-xs uppercase tracking-wider opacity-60">
            <span>© 2026 — Todos los derechos reservados</span>
            <span>Hecho con ♥ y café</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
