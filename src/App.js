import React from "react";
import "./style.css";
import Resume from "./resume";
function App() {
  return (
    <div>
      <header>
        <h1>Sanidhya Rana</h1>
        <p className="subheader"> Developer </p>
      </header>
      <main>
        <div className="main-content">
          <article className="article">
            <h2>Welcome to My Portfolio</h2>
            <img src="/image.png" alt="Sanidhya Rana" />
            <p>
              Hello, my name is Sanidhya Rana. I am a developer with a strong
              passion for creating beautiful and functional websites, Android
              apps, machine learning and AI projects, as well as data science
              and engineering solutions. Feel free to explore my work and get in
              touch!
            </p>
            <p>Here’s my resume for more details:</p>

            <Resume />
          </article>
          <article className="article">
            <h2>About Me</h2>
            <p>
              I have been working as a web developer for over 5 years. My
              expertise includes HTML, CSS, JavaScript, React, Kotlin, Firebase,
              Python, SQL, NOSQL and more.
            </p>
          </article>
        </div>
        <aside>
          <div className="sidebar-item">
            <h2>Contact Information</h2>
            <p>
              <i className="fas fa-envelope"></i> sanidhyarana5@gmail.com
            </p>
            <p>
              <i className="fas fa-phone"></i> 6261116108
            </p>
            <p>
              <a href="https://www.linkedin.com/in/sanidhya-rana">
                <i className="fa-brands fa-linkedin"></i> linkedin{" "}
              </a>
            </p>
            <p>
              <a href="https://github.com/Laxluther">
                <i className="fa-brands fa-github"></i> Github{" "}
              </a>
            </p>
          </div>
          <div className="sidebar-item">
            <h2>Services</h2>
            <ul>
              <li>Web Development</li>
              <li>Android App Development</li>
              <li>Data Analysis</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
