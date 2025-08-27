import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <section id="contacto" className="relative py-24 bg-gradient-to-b from-warm-300 via-warm-400 to-warm-500 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-56 h-56 bg-warm-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-warm-200 rounded-full blur-3xl opacity-40" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-warm-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Contáctanos
        </motion.h2>
        <motion.p
          className="text-center max-w-2xl mx-auto text-warm-700 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          ¿Tienes dudas o quieres un pedido especial? Escríbenos, nos encanta ayudarte.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative bg-white/70 backdrop-blur rounded-3xl shadow-xl ring-1 ring-white/60 p-8 md:p-10"
        >
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
                <label className="block text-sm font-medium text-warm-800 mb-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-warm-300 bg-white/60 focus:bg-white/90 focus:ring-2 focus:ring-warm-500 focus:outline-none px-4 py-3 text-warm-800 placeholder-warm-600 transition"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warm-800 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-warm-300 bg-white/60 focus:bg-white/90 focus:ring-2 focus:ring-warm-500 focus:outline-none px-4 py-3 text-warm-800 placeholder-warm-600 transition"
                  placeholder="tu@correo.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warm-800 mb-1">Mensaje</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-warm-300 bg-white/60 focus:bg-white/90 focus:ring-2 focus:ring-warm-500 focus:outline-none px-4 py-3 text-warm-800 placeholder-warm-600 transition resize-none"
                  rows={5}
                  placeholder="Cuéntanos qué necesitas..."
                  required
                />
              </div>
              {error && <div className="text-red-600 text-sm font-medium">{error}</div>}
              <div className="pt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-warm-500 to-warm-600 text-white font-semibold py-3 shadow-lg shadow-warm-500/30 hover:shadow-warm-600/40 hover:brightness-105 disabled:opacity-60 disabled:cursor-not-allowed transition"
                >
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