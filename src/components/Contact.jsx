import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <p className="contact-subtitle">
        I’m actively seeking full-time roles and internships.  
        Feel free to reach out — I’d love to connect.
      </p>

      <div className="contact-container">
        {/* Left: Info */}
        <div className="contact-info">
          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:krishb.0017@gmail.com">
              : krishb.0017@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/krishanthbabu2306/"
              target="_blank"
              rel="noreferrer"
            >
            : linkedin.com/in/krishanthbabu2306/
            </a>
          </div>

          <div className="contact-item">
            <span>GitHub</span>
            <a
              href="https://github.com/krishb2306"
              target="_blank"
              rel="noreferrer"
            >
              : github.com/krishb2306
            </a>
          </div>
        </div>

        {/* Right: Call to action */}
        <div className="contact-cta">
          <h3>Let’s build something impactful.</h3>
          <p>
            Whether it’s a role, project, or collaboration —
            I’m always open to new opportunities.
          </p>

          <a
            href="public/Krishanth-Babu-Resume.pdf"
            className="btn primary"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}