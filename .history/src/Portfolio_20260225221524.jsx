import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Portfolio.css";

export default function Portfolio() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kq58v7c",
        "template_2w6e9rg",
        form.current,
        "SBQVu67Oy2UWuqiVe"
      )
      .then(
        () => {
          setStatus("Message sent!");
          e.target.reset();
        },
        () => {
          setStatus("Failed! Try again.");
        }
      );
  };

  return (
    <div className="portfolio">

      {/* 🔹 NAVBAR */}
      <nav className="nav">
        <div className="nav-logo">Priyanshu Anand</div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="social-icons">
          <a href="https://github.com/priyanshuanand12022" target="_blank">
            <img src="/github.svg" className="icon" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/priyanshu-anand-213315353" target="_blank">
            <img src="/linkedin.svg" className="icon" alt="LinkedIn" />
          </a>
        </div>
      </nav>

      {/* 🔹 HERO SECTION */}
      <section className="hero" id="about">
        <h1>Building performant, scalable & user-focused applications</h1>
        <p className="hero-desc">
          Versatile and results-driven Full Stack Developer with hands-on experience in MERN,
          Spring Boot, and modern databases. Passionate about crafting efficient, scalable, 
          and user-centered solutions while contributing to open-source and developer communities.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Work</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
        </div>
      </section>

      {/* 🔹 SKILLS */}
      <section className="skills" id="skills">
        <p className="section-tag">SKILLS</p>
        <h2 className="section-title">What I Bring</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <img src="/webrtc.png" className="skill-img" />
            <h3>Frontend Development</h3>
            <p>React, JavaScript, HTML, CSS, UI/UX oriented design.</p>
          </div>

          <div className="skill-card">
            <img src="/backend.png" className="skill-img" />
            <h3>Backend Engineering</h3>
            <p>Node.js, Spring Boot, REST APIs, MongoDB, SQL.</p>
          </div>

          <div className="skill-card">
            <img src="/problem.png" className="skill-img" />
            <h3>Problem Solving</h3>
            <p>Strong DSA foundation, debugging, optimization.</p>
          </div>

          <div className="skill-card">
            <img src="/team.png" className="skill-img" />
            <h3>Team & Leadership</h3>
            <p>Collaboration, communication, adaptability, ownership.</p>
          </div>
        </div>
      </section>

      {/* 🔹 PROJECTS */}
      <section className="projects" id="projects">
        <p className="section-tag">PORTFOLIO</p>
        <h2 className="section-title">Selected Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <img src="/webrtc.png" className="project-img" />
            <div className="project-tags">
              <span>React</span><span>WebRTC</span><span>Socket.io</span>
            </div>
            <h3>WebRTC Video Conferencing App</h3>
            <p>Real-time multi-user video calling with <200ms latency.</p>
            <div className="project-buttons">
              <a href="https://webrtc-conference-app2.netlify.app" className="btn-live">Live Demo</a>
              <a href="https://github.com/priyanshuanand12022/webrtc-full-app.git" className="btn-code">Source Code</a>
            </div>
          </div>

          <div className="project-card">
            <img src="/movie.png" className="project-img" />
            <div className="project-tags">
              <span>React</span><span>CRUD</span><span>JSON API</span>
            </div>
            <h3>Movie Database Admin Dashboard</h3>
            <p>500+ movie records, 100% CRUD automation.</p>
            <div className="project-buttons">
              <a className="btn-live disabled">Live Demo</a>
              <a href="https://github.com/priyanshuanand12022/DBMS-Movie-Ticket-Booking-System.git" className="btn-code">Source Code</a>
            </div>
          </div>

          <div className="project-card">
            <img src="/weather.png" className="project-img" />
            <div className="project-tags">
              <span>Java</span><span>API</span><span>Weather</span>
            </div>
            <h3>Weather Forecasting Application</h3>
            <p>Real-time weather for 1000+ cities.</p>
            <div className="project-buttons">
              <a className="btn-live disabled">Live Demo</a>
              <a href="https://github.com/priyanshuanand12022/JAVA-WEATHER-APPLICATION-PROJECT.git" className="btn-code">Source Code</a>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 CONTACT */}
      <section className="contact" id="contact">
        <h2 className="section-title light">Let’s Connect</h2>
        <p className="contact-desc">Have a project or collaboration in mind?</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea rows="5" placeholder="Your Message" name="message" required></textarea>

          <button className="btn-primary submit-btn">Send Message</button>
          {status && <p style={{ marginTop: "10px" }}>{status}</p>}
        </form>
      </section>

      {/* 🔹 FOOTER */}
      <footer className="footer">
        © 2024 Priyanshu Anand — All Rights Reserved
      </footer>

    </div>
  );
}