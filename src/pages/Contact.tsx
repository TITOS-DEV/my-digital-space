import { ArrowLeft, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const socials = [
  { icon: Github, label: "GitHub", url: "#" },
  { icon: Linkedin, label: "LinkedIn", url: "#" },
  { icon: Twitter, label: "Twitter", url: "#" },
  { icon: Instagram, label: "Instagram", url: "#" },
];

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-lg tracking-tight">
            <span className="text-accent-red">●</span> portfolio
          </Link>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider hover:text-accent-red transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Volver
          </Link>
        </div>
      </header>

      <main className="pt-16">
        <section className="max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            ✦ Contacto
          </p>
          <h1 className="font-display text-[clamp(3rem,9vw,7rem)] leading-[0.95] tracking-tight font-light">
            ¿Tienes una idea?<br />
            <em className="not-italic text-accent-red">Construyámosla.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Cuéntame sobre tu proyecto. Respondo en menos de 24 horas.
          </p>
        </section>

        <section className="border-t border-hairline">
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-12 gap-12">
            {/* FORM */}
            <form onSubmit={handleSubmit} className="md:col-span-7 space-y-8">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  className="w-full bg-transparent border-b border-hairline pb-3 text-lg focus:outline-none focus:border-accent-red transition-colors placeholder:text-muted-foreground/50"
                />
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="hola@ejemplo.com"
                  className="w-full bg-transparent border-b border-hairline pb-3 text-lg focus:outline-none focus:border-accent-red transition-colors placeholder:text-muted-foreground/50"
                />
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full bg-transparent border-b border-hairline pb-3 text-lg focus:outline-none focus:border-accent-red transition-colors resize-none placeholder:text-muted-foreground/50"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent-red text-accent-red-foreground font-mono text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                {sent ? "✓ Enviado" : "Enviar mensaje"}
              </button>
            </form>

            {/* SIDEBAR INFO */}
            <aside className="md:col-span-5 md:pl-8 md:border-l md:border-hairline space-y-12">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  Email directo
                </p>
                <a
                  href="mailto:hola@ejemplo.com"
                  className="group inline-flex items-center gap-3 font-display text-2xl hover:text-accent-red transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  hola@ejemplo.com
                </a>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  Disponibilidad
                </p>
                <p className="font-display text-xl">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent-red mr-2 align-middle" />
                  Aceptando proyectos
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Respuesta en menos de 24 h.
                </p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  Redes
                </p>
                <ul className="flex flex-wrap gap-3">
                  {socials.map(({ icon: Icon, label, url }) => (
                    <li key={label}>
                      <a
                        href={url}
                        aria-label={label}
                        className="w-12 h-12 inline-flex items-center justify-center border border-hairline rounded-full hover:bg-accent-red hover:border-accent-red hover:text-accent-red-foreground transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

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

export default Contact;
