import { useState } from "react";
import "./Portfolio.css";
import emailjs from "emailjs-com";

// Images
import webrtcImg from "./assets/webrtc.png";
import movieImg from "./assets/movie.png";
import weatherImg from "./assets/weather.png";
import backendImg from "./assets/backend.png";
import problemImg from "./assets/problem.png";
import teamImg from "./assets/team.png";

export default function Portfolio() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lk6jd4n",
        "template_el7uc7k",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "nVCyFrHKLSf0xcnOJ"
      )
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        console.log("Email send error:", err);
        alert("Something went wrong!");
      });
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="nav">
  {/* Left */}
  <div className="nav-logo">Priyanshu Anand</div>

  {/* Center */}
  <ul className="nav-center">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#certifications">Certifications</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>

  {/* Right */}
  <div className="nav-right">

    {/* Resume Button */}
    <a
      href="/resume.pdf"
      className="resume-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>

    <a href="https://github.com/priyanshuanand12022" target="_blank">
      <img className="icon" src="/github.svg" alt="GitHub" />
    </a>

    <a href="https://www.linkedin.com/in/priyanshu-anand-213315353" target="_blank">
      <img className="icon" src="/linkedin.svg" alt="LinkedIn" />
    </a>
  </div>
</nav>

      {/* ================= HERO ================= */}
      <section id="about" className="hero">
        <h1>Building performant, scalable & user-focused applications</h1>

        <p className="hero-desc">
          Versatile and results-driven Full Stack Developer with hands-on
          experience in MERN, Spring Boot, and modern databases. Passionate
          about crafting efficient, scalable, and user-centered solutions
          while contributing to open-source and developer communities.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Work</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="skills">
        <div className="section-tag">SKILLS</div>
        <h2 className="section-title">What I Bring</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <img src={webrtcImg} alt="Frontend" className="skill-img" />
            <h3>Frontend Development</h3>
            <p>React, JavaScript, HTML, CSS, UI/UX oriented design.</p>
          </div>

          <div className="skill-card">
            <img src={backendImg} alt="Backend" className="skill-img" />
            <h3>Backend Engineering</h3>
            <p>Node.js, Spring Boot, REST APIs, MongoDB, SQL.</p>
          </div>

          <div className="skill-card">
            <img src={problemImg} alt="Problem Solving" className="skill-img" />
            <h3>Problem Solving</h3>
            <p>Strong DSA foundation, debugging, and optimization.</p>
          </div>

          <div className="skill-card">
            <img src={teamImg} alt="Team" className="skill-img" />
            <h3>Team & Leadership</h3>
            <p>Collaboration, communication, adaptability, ownership.</p>
          </div>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="projects">
        <div className="section-tag">PORTFOLIO</div>
        <h2 className="section-title">Selected Projects</h2>

        <div className="projects-grid">

          {/* WEBRTC */}
          <div className="project-card">
            <img src={webrtcImg} className="project-img" alt="WebRTC" />
            <div className="project-tags">
              <span>React</span>
              <span>WebRTC</span>
              <span>Node.js</span>
              <span>Socket.io</span>
            </div>
            <h3>Web-RTC Video Conferencing App</h3>
            <p>Real-time conferencing with multi-user rooms under 200ms latency.</p>

            <div className="project-buttons">
              <a href="https://webrtc-conference-app2.netlify.app" className="btn-live">Live Demo</a>
              <a href="https://github.com/priyanshuanand12022/webrtc-full-app.git" className="btn-code">Source Code</a>
            </div>
          </div>

          {/* MOVIE DASHBOARD */}
          <div className="project-card">
            <img src={movieImg} className="project-img" alt="Movie Dashboard" />
            <div className="project-tags">
              <span>React</span>
              <span>CRUD</span>
              <span>Admin Panel</span>
              <span>JSON API</span>
            </div>
            <h3>Movie Database Admin Dashboard</h3>
            <p>Dashboard enabling full CRUD automation for 500+ movie records.</p>

            <div className="project-buttons">
              <a className="btn-live disabled">Live Demo</a>
              <a href="https://github.com/priyanshuanand12022/DBMS-Movie-Ticket-Booking-System.git" className="btn-code">Source Code</a>
            </div>
          </div>

          {/* WEATHER APP */}
          <div className="project-card">
            <img src={weatherImg} className="project-img" alt="Weather App" />
            <div className="project-tags">
              <span>Java</span>
              <span>API</span>
              <span>Weather</span>
              <span>GUI</span>
            </div>
            <h3>Weather Forecasting Application</h3>
            <p>Forecasts for 1,000+ global locations with optimized APIs.</p>

            <div className="project-buttons">
              <a className="btn-live disabled">Live Demo</a>
              <a href="https://github.com/priyanshuanand12022/JAVA-WEATHER-APPLICATION-PROJECT.git" className="btn-code">Source Code</a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
<section id="certifications" className="skills">
  <div className="section-tag">CERTIFICATIONS</div>
  <h2 className="section-title">My Certifications</h2>

  <div className="skills-grid">

    <div
      className="skill-card"
      onClick={() => window.open("/certificates/cert1.pdf", "_blank")}
      style={{ cursor: "pointer" }}
    >
      <img src="/cert-images/spring-angular.png" className="skill-img" />
      <h3>Spring and Angular Full Stack Developer</h3>
      <p>Issued by Infosys Springboard</p>
    </div>

    <div
      className="skill-card"
      onClick={() => window.open("/certificates/cert2.pdf", "_blank")}
      style={{ cursor: "pointer" }}
    >
      <img src="/cert-images/ibm-sql-python.png" className="skill-img" />
      <h3>Databases and SQL for Data Science with Python</h3>
      <p>Issued by IBM</p>
    </div>

    <div
      className="skill-card"
      onClick={() => window.open("/certificates/cert3.pdf", "_blank")}
      style={{ cursor: "pointer" }}
    >
      
      <h3>Data Structures</h3>
      <p>Issued by UC San Diego Higher School of Economics</p>
    </div>

    <div
      className="skill-card"
      onClick={() => window.open("/certificates/cert4.pdf", "_blank")}
      style={{ cursor: "pointer" }}
    >
      <img src={teamImg} alt="Cert 4" className="skill-img" />
      <h3>Build a computer vision app with Azure Cognitive Services</h3>
      <p>Issued by Microsoft</p>
    </div>

  </div>
</section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact">
        <div className="section-tag light">CONTACT</div>
        <h2 className="section-title light">Let's Connect</h2>

        <p className="contact-desc">
          Have a project or collaboration in mind? Feel free to reach out.
        </p>

        {submitted ? (
          <div className="thankyou">
            Thank you! I’ll get back to you soon.
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Your Name" required onChange={handleChange} />
            <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
            <input name="subject" placeholder="Subject" onChange={handleChange} />
            <textarea name="message" placeholder="Message" required onChange={handleChange} />
            <button className="btn-primary submit-btn">Send Message</button>
          </form>
        )}
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        © 2026 <span>Priyanshu Anand</span> — All Rights Reserved.
      </footer>

    </div>
  );
}