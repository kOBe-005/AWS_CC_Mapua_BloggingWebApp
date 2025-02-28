import "./App.css";
import { teams } from "./data"; // Importing teams from data.js

function App() {
  return (
    <>
      {/* Header */}
      <header>
        <div className="header-content">
          <div className="logo">
            AWS <span>Cloud Club</span>
          </div>
          <nav>
            <a href="#home">Home</a>
            <a href="#teams">Teams</a>
            <a href="#join">Join Us</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h1>Innovation Office - AWS Cloud Club</h1>
        <h2>Mapua University Manila</h2>
        <p>
          Welcome to the Innovation Office of the Amazon Web Services (AWS)
          Cloud Club! We are passionate about building innovative solutions and
          advancing cloud computing knowledge.
        </p>
      </section>

      {/* Teams Section */}
      <section className="teams" id="teams">
        <h2>Our Teams</h2>
        <div className="teams-grid">
          {teams.map((team, index) => (
            <div key={index} className="team-card">
              <span className="team-icon">{team.icon}</span>
              <h3>{team.name}</h3>
              <p>{team.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Section */}
      <section className="join" id="join">
        <h2>Join Our Community</h2>
        <p>
          💡 Interested in joining one of our teams? Connect with us and be part
          of our journey to innovate and inspire!
        </p>
        <a href="#contact" className="cta-button">
          Connect With Us
        </a>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-content">
          <p>
            © {new Date().getFullYear()} AWS Cloud Club - Mapua University
            Manila
          </p>
          <p>Contact: awscloudclub@mapua.edu.ph</p>
          <div className="social-links">
            <a href="#">FB</a>
            <a href="#">TW</a>
            <a href="#">LI</a>
            <a href="#">GH</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
