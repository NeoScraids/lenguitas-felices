import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import GradientBlobs from './GradientBlobs';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    setError('');
    setLoading(true);
    
    // Check if Netlify Forms is enabled
    const form = e.target as HTMLFormElement;
    const isNetlifyFormsEnabled = process.env.REACT_APP_NETLIFY_FORMS === 'true';
    
    if (isNetlifyFormsEnabled) {
      try {
        // Submit to Netlify Forms
        const formData = new FormData(form);
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData as any).toString(),
        });
        setSubmitted(true);
      } catch (err) {
        setError('Error al enviar el formulario. Intenta nuevamente.');
      }
    } else {
      // Simulate form submission for demo
      await new Promise((res) => setTimeout(res, 1200));
      setSubmitted(true);
    }
    
    setLoading(false);
  };

  return (
  <section id="contacto" className="relative py-24 md:py-28 overflow-hidden scroll-mt-24">
      <GradientBlobs variant="dark" />
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Radial de realce similar a redes */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[85%] max-w-2xl h-72 pointer-events-none select-none opacity-70 blur-3xl z-[5] bg-[radial-gradient(circle_at_center,rgba(255,246,236,0.9),rgba(255,246,236,0.45)_55%,rgba(255,246,236,0)_80%)]" />
        <SectionTitle
          title="Contáctanos"
          subtitle="¿Tienes dudas o quieres un pedido especial? Escríbenos, nos encanta ayudarte."
          noBaseColor
          noBaseSubtitleColor
          className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-warm-50 to-warm-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
          subtitleClassName="relative z-10 inline-block px-4 py-2 rounded-xl text-white bg-warm-800/25 backdrop-blur-sm shadow-[0_2px_8px_-1px_rgba(0,0,0,0.45)]"
        />
        {/* Wrapper para borde degradado y efecto cristal */}
    <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
  className="group relative rounded-3xl md:rounded-[2rem] bg-white/55 dark:bg-white/40 backdrop-blur-xl p-6 sm:p-8 md:p-10 overflow-hidden shadow-[0_10px_42px_-10px_rgba(0,0,0,0.38)]"
          >
      {/* Sheen sutil */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.28),transparent_65%)]" />
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-3xl mb-4">🎉</div>
              <p className="text-xl font-semibold text-warm-800">¡Mensaje enviado con éxito!</p>
              <p className="text-warm-700 mt-2 text-sm">Te responderemos muy pronto.</p>
            </motion.div>
          ) : (
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* Hidden fields for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'none' }}>
                <input name="bot-field" />
              </div>
              
              <div>
                <label className="block text-[11px] font-semibold tracking-wide uppercase mb-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-warm-50 to-warm-200">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-warm-300/60 bg-gradient-to-b from-white/95 to-white/80 focus:bg-white focus:ring-2 focus:ring-warm-500/60 focus:outline-none px-4 py-3 text-warm-800 placeholder-warm-500/60 shadow-inner transition"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold tracking-wide uppercase mb-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-warm-50 to-warm-200">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-warm-300/60 bg-gradient-to-b from-white/95 to-white/80 focus:bg-white focus:ring-2 focus:ring-warm-500/60 focus:outline-none px-4 py-3 text-warm-800 placeholder-warm-500/60 shadow-inner transition"
                  placeholder="tu@correo.com"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold tracking-wide uppercase mb-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-warm-50 to-warm-200">Mensaje</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-warm-300/60 bg-gradient-to-b from-white/95 to-white/80 focus:bg-white focus:ring-2 focus:ring-warm-500/60 focus:outline-none px-4 py-3 text-warm-800 placeholder-warm-500/60 shadow-inner transition resize-none"
                  rows={5}
                  placeholder="Cuéntanos qué necesitas..."
                  required
                />
              </div>
              {error && <div className="text-red-600 text-sm font-medium">{error}</div>}
              <div className="pt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.035 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={loading}
                  className="relative overflow-hidden w-full flex items-center justify-center gap-3 rounded-full font-semibold py-3 px-6 text-white shadow-lg shadow-orange-400/30 hover:shadow-orange-400/50 disabled:opacity-60 disabled:cursor-not-allowed transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-warm-200/70 [background:linear-gradient(92deg,#f6bf93,#f2a66c_45%,#ea8d4a)]"
                >
                  <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-700 bg-[radial-gradient(circle_at_28%_30%,rgba(255,255,255,0.4),transparent_72%)]" />
                  {loading && (
                    <motion.span
                      className="inline-block w-5 h-5 border-2 border-white/70 border-t-transparent rounded-full animate-spin"
                    />
                  )}
                  Enviar mensaje
                </motion.button>
              </div>
            </form>
          )}
  </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;