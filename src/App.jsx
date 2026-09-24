import { useState } from "react";
import finalId from "./assets/finalid.jpg"; // add this
import "./style.css";

function App() {
  const [formNote, setFormNote] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormNote("Message sent successfully!");
  };

  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>

      <header className="site-nav">
        <div className="nav-inner">
          <div className="brand">
            Venn Ruga <span>// My portfolio</span>
          </div>

          <button
            className="nav-toggle"
            id="nav-toggle"
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <nav>
            <ul
              className={`nav-tabs${menuOpen ? " is-open" : ""}`}
              id="nav-tabs"
            >
              <li>
                <a href="#home" data-section="home" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" data-section="about">
                  About me
                </a>
              </li>
              <li>
                <a href="#contact" data-section="contact">
                  Contact me
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home">
          <div className="hero-copy">
            <span className="eyebrow">Home</span>
            <h1>
              Hi, I'm Venn —<br />a student who{" "}
              <em>plays, watches, and sleeps.</em>
            </h1>
            <p className="lede">
              When I'm not doing those three, I'm studying Computer Engineering
              with an interest in logic circuits and PCB design. Think of this
              page as my digital space for my background, interests, and ways to
              get in touch.
            </p>
            <div className="chip-row">
              <span className="chip">PCB Design</span>
              <span className="chip">Logic Circuits</span>
              <span className="chip">Gaming</span>
              <span className="chip">Doomscrolling</span>
            </div>
          </div>

          <div className="id-card">
            <img src={finalId} alt="Venn Ruga" className="avatar" />
            <dl>
              <dt>Year</dt>
              <dd>3rd Year, BS Computer Engineering</dd>
              <dt>Based in</dt>
              <dd>Quiapo, Manila</dd>
              <dt>Status</dt>
              <dd>Single</dd>
            </dl>
          </div>
        </section>

        <section id="about">
          <span className="eyebrow">About me</span>
          <div className="about-grid">
            <div>
              <h2>A short introduction.</h2>
              <p>
                I'm a third-year Computer Engineering student fascinated by how
                circuits work inside hardware. Throughout my college years, I've
                spent most of my time designing logic circuits, wiring
                components on breadboards, and routing PCBs other than topics
                like networking. Beyond hardware, I'm also interested in
                building software systems that solve real-life problems, like
                inventory management. Outside of class, you'll usually find me
                playing games or binge-watching shows.
              </p>
            </div>
            <div className="facts-card">
              <h3>Quick facts</h3>
              <ul>
                <li>
                  <span>Peak Hours</span>
                  <span>Late Night</span>
                </li>
                <li>
                  <span>Superpower</span>
                  <span>Predicting the past</span>
                </li>
                <li>
                  <span>Favorite Games</span>
                  <span>Mobile Legends & Valorant</span>
                </li>
                <li>
                  <span>Favorite Anime</span>
                  <span>One Outs</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact">
          <span className="eyebrow">Contact me</span>
          <div className="contact-grid">
            <div>
              <h2>Girls, talk to me</h2>
              <p className="lede">
                Sabi nga ni Spider-man kay Sadie Sink, "You have me" Follow mo
                ako IG, ako bahala magfirst move.
              </p>
              <div className="contact-meta">
                <a
                  href="https://www.instagram.com/laurence.ruga?igsh=c3IzZjQ3c2J3dWY5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram.com/laurence.ruga
                </a>
                <a
                  href="https://www.facebook.com/share/1B5pAVsBdW/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook.com/venn-laurence-ruga
                </a>
                <a
                  href="https://www.linkedin.com/in/venn-laurence-ruga-371722423?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/venn-laurence-ruga
                </a>
              </div>
            </div>

            <form
              className="contact-form"
              id="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What would you like to say?"
                ></textarea>
              </div>
              <button type="submit" className="btn stamp-btn">
                Submit
              </button>
              <p className="form-note" id="form-note">
                {formNote}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer>© 2026 Venn Laurence R. Ruga. All rights reserved.</footer>
    </>
  );
}

export default App;
