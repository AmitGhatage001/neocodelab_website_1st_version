// app/page.js
import React from 'react';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* NAVBAR - If you want it here or in layout.js */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>NeoCodeLab</div>
        <ul>
          <li>Products</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Company</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Creating Impact,<br />One line of code at a time!</h1>
          <div className={styles.codeBlock}>
            <p>// run NeoCodeLab.</p>
            <p>{`echo "NeoCodeLab - 'Building the future, one solution at a time'"`}</p>
            <p>{`echo "NeoCodeLab - 'Creating change with code.'"`}</p>
          </div>
        </div>
        <div className={styles.solutionsBox}>
          <h2>Seamless Solutions,<br />Concept to Code & Deployment</h2>
          <div className={styles.pills}>
            <span>Frontend Layer</span>
            <span>Backend Layer</span>
            <span>Frameworks</span>
            <span>API Layer</span>
            <span>Database Layer</span>
            <span>Cloud</span>
            <span>Observability</span>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className={styles.impactSection}>
        <h2>Making a Real World Impact</h2>
        <div className={styles.featuresContainer}>
          <div className={styles.featureBox} style={{ backgroundColor: '#d3e6ff' }}>
            <h3>Task Management</h3>
            <p>
              "Streamline your workflow & conquer your to-do list with ease.
              Our task management software keeps you organized, on track, and always a step ahead."
            </p>
          </div>
          <div className={styles.featureBox} style={{ backgroundColor: '#ffd3f8' }}>
            <h3>A.I Powered Landing Page Creator</h3>
            <p>
              "Design stunning, high-converting landing pages with the power of AI.
              No coding needed—just your vision, and we handle the rest."
            </p>
          </div>
          <div className={styles.featureBox} style={{ backgroundColor: '#d3ffd8' }}>
            <h3>Location Sharing as a Service</h3>
            <p>
              "Stay connected with those who matter most, wherever life takes you.
              Our seamless location-sharing service provides real-time updates,
              ensuring your journey has never been easier or more secure."
            </p>
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className={styles.showcase}>
        <div className={styles.textBlock}>
          <h2>Code the impossible!</h2>
          <p>Breaking Boundaries and Building the Future, One Line at a Time!</p>
        </div>
        <div className={styles.imageBlock}>
          <img
            src="/images/showcase-image.jpg"
            alt="Showcase"
            className={styles.roundedImage}
          />
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className={styles.technologiesSection}>
        <h2>Harnessing Cutting-Edge Technologies to Solve Tomorrow's Global Challenges Today!</h2>
        <div className={styles.logoGrid}>
          <div>
            <img src="/images/react-logo.png" alt="React" />
          </div>
          <div>
            <img src="/images/angular-logo.png" alt="Angular" />
          </div>
          <div>
            <img src="/images/js-logo.png" alt="JavaScript" />
          </div>
          <div>
            <img src="/images/vue-logo.png" alt="Vue" />
          </div>
          <div>
            <img src="/images/docker-logo.png" alt="Docker" />
          </div>
          <div>
            <img src="/images/redis-logo.png" alt="Redis" />
          </div>
          <div>
            <img src="/images/nx-logo.png" alt="Nx" />
          </div>
          <div>
            <img src="/images/typescript-logo.png" alt="TypeScript" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.leftLinks}>
            <h3>NeoCodeLab</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Github</li>
              <li>Connect with us</li>
            </ul>
          </div>
          <div className={styles.rightLinks}>
            <ul>
              <li>Contact Us</li>
              <li>Customer Portal</li>
            </ul>
          </div>
        </div>
        <div className={styles.copyRight}>
          <p>©2024 NeoCodeLab, Inc</p>
        </div>
      </footer>
    </main>
  );
}
