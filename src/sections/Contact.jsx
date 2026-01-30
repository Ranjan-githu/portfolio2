import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import MagicButton from '../components/MagicButton';
import RevealSection from '../components/RevealSection';

const Contact = () => {
  // Basic form submission handler (visual only for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your message! This is a demo form. Please use the 'Send Email' button for now.");
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <RevealSection>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>

          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Have a project in mind or want to discuss the latest in Tech?
            Send me a message below or connect via social media.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Get in Touch</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <a href="mailto:ranjankumar@example.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                  <div style={{ p: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail color="var(--accent-cyan)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>Email</div>
                    <div style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>ranjankumar@example.com</div>
                  </div>
                </a>
                <a href="https://linkedin.com/in/ranjan-kumar-gupta" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                  <div style={{ p: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Linkedin color="var(--accent-violet)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>LinkedIn</div>
                    <div style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Connect on LinkedIn</div>
                  </div>
                </a>
                <a href="https://github.com/ranjan-kumar-gupta" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                  <div style={{ p: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Github color="var(--text-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>GitHub</div>
                    <div style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Follow on GitHub</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <div style={{ display: 'flex', gap: '1rem' }}>
                <input type="text" placeholder="Name" style={{
                  flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', outline: 'none'
                }} />
                <input type="email" placeholder="Email" style={{
                  flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', outline: 'none'
                }} />
              </div>
              <input type="text" placeholder="Subject" style={{
                padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', outline: 'none'
              }} />
              <textarea rows="5" placeholder="Your Message" style={{
                padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', outline: 'none', resize: 'none'
              }}></textarea>

              <MagicButton type="submit" style={{
                padding: '1rem', width: '100%', borderRadius: '8px', fontWeight: 600
              }}>
                Send Message <Send size={18} style={{ marginLeft: '10px', display: 'inline-block' }} />
              </MagicButton>
            </motion.form>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default Contact;
