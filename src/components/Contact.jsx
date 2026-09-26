import { useState } from 'react';
import './Contact.css';

const Contact = ({ animState, onBackClick }) => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const cls = animState === 'entering' ? 'ctc--entering'
            : animState === 'exiting'  ? 'ctc--exiting'
            : animState === 'hidden'   ? 'ctc--gone'
            : '';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className={`ctc-section ${cls}`} id="contact">
      <nav className="ctc-navbar">
        <div className="ctc-nav-left"></div>
        <div className="section-nav-title-group">
          <span className="section-nav-title">Contact</span>
          <button className="section-header-back-btn" onClick={onBackClick}>
            <span>←</span> Back
          </button>
        </div>
        <div className="ctc-nav-hint">Let's talk</div>
      </nav>

      <div className="ctc-content">
        <div className="ctc-left">
          <p className="ctc-eyebrow">Get in touch</p>
          <h1 className="ctc-heading">
            Let's build<br />something great.
          </h1>
          <p className="ctc-sub">
            Have a project in mind, a question, or just want to say hi?<br />
            Drop me a message and I'll get back to you.
          </p>
          <div className="ctc-links">
            <a href="mailto:mohammedoualialami545@gmail.com" className="ctc-link">
              <span className="ctc-link-icon">✉</span>
              mohammedoualialami545@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/mohammed-ouali-alami-864408384" target="_blank" rel="noreferrer" className="ctc-link">
              <span className="ctc-link-icon">in</span>
              LinkedIn
            </a>
            <a href="https://instagram.com/johan__oa" target="_blank" rel="noreferrer" className="ctc-link">
              <span className="ctc-link-icon">ig</span>
              Instagram (@johan__oa)
            </a>
          </div>
        </div>

        <div className="ctc-right">
          {sent ? (
            <div className="ctc-success">
              <span className="ctc-success-icon">✓</span>
              <p className="ctc-success-msg">Message sent! I'll reply soon.</p>
            </div>
          ) : (
            <form className="ctc-form" onSubmit={handleSubmit}>
              <div className="ctc-field">
                <label className="ctc-label">Name</label>
                <input
                  type="text"
                  className="ctc-input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                />
              </div>
              <div className="ctc-field">
                <label className="ctc-label">Email</label>
                <input
                  type="email"
                  className="ctc-input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                />
              </div>
              <div className="ctc-field">
                <label className="ctc-label">Message</label>
                <textarea
                  className="ctc-textarea"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                />
              </div>
              <button type="submit" className="ctc-submit">
                Send message <span>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
