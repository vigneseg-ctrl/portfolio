import { useState } from 'react';
import './Contact.css';

const Contact = () => {

  const [status, setStatus] = useState('idle');
  // idle | sending | sent | error

  const handleSubmit = async (e) => {

    e.preventDefault();

    setStatus('sending');

    const data = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/xdajakjw", {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.ok) {
      setStatus('sent');
      e.target.reset();
    }
    else {
      setStatus('error');
    }
  };

  return (

    <section id="contact" className="section">

      <div className="container">

        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact-wrapper">

          <div className="contact-info">

            <p>
              Currently open to Senior Frontend Developer roles.
            </p>

            <a
              href="mailto:vigneseg@email.com"
              className="contact-email"
            >
              vigneseg@email.com
            </a>

            <div className="contact-socials">

              <a
                href="https://www.linkedin.com/in/vigneswaran-h/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>

              <a
                href="YOUR_GITHUB"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>

            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">

              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                required
              />

            </div>

            {status === 'sent' && (
              <p className='form-success'>
                Sent!
              </p>
            )}

            {status === 'error' && (
              <p className='form-error'>
                Failed. Email me directly.
              </p>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'sending'}
            >
              {status === 'sending'
                ? 'Sending...'
                : 'Send Message'}
            </button>

          </form>

        </div>

      </div>

    </section>

  );
};

export default Contact;