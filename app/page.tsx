const courses = [
  {
    title: "BLS Provider",
    audience: "Healthcare professionals",
    detail: "High-performance CPR, team response, AED use, and choking relief.",
  },
  {
    title: "Heartsaver CPR AED",
    audience: "Workplaces & community",
    detail: "Confident adult, child, and infant CPR with hands-on AED practice.",
  },
  {
    title: "First Aid",
    audience: "Everyday responders",
    detail: "Practical care for common injuries and sudden medical emergencies.",
  },
];

const faqs = [
  {
    question: "Who leads the training?",
    answer:
      "All FirstHand CPR Training instructors are American Heart Association certified. They are also firefighters, paramedics, and EMTs who bring firsthand emergency experience into every class.",
  },
  {
    question: "Do you offer on-site group training?",
    answer:
      "Yes. We bring training to businesses, schools, churches, gyms, childcare centers, and community organizations.",
  },
  {
    question: "Will I receive a certification card?",
    answer:
      "For eligible AHA courses, course completion cards are provided by the American Heart Association after all course requirements are successfully completed.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="FirstHand CPR Training home">
          <img
            className="header-logo"
            src="/firsthand-banner-logo.png"
            alt="FirstHand CPR Training"
          />
        </a>
        <nav aria-label="Main navigation">
          <a href="#classes">Classes</a>
          <a href="#groups">Group Training</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <h1>
            Real experience.
            <span>Real training.</span>
          </h1>
          <p className="eyebrow hero-eyebrow">
            Taught by real emergency professionals
          </p>
          <p className="hero-lede">
            Practical CPR, AED, First-Aid, and BLS training courses led by
            firefighters, EMT&apos;s, and paramedics who know how to operate
            when every second counts.
          </p>
          <div className="hero-actions">
            <a className="button" href="#classes">View Course Options</a>
            <a className="button button-outline" href="#contact">Request Training</a>
          </div>
          <div className="trust-row" aria-label="Training highlights">
            <span>Hands-on practice</span>
            <span>AHA certified instructors</span>
            <span>Flexible group scheduling</span>
          </div>
        </div>
        <div className="hero-panel" aria-label="CPR training focus areas">
          <div className="pulse-line" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <p>Real confidence starts before the emergency.</p>
          <div className="stat-grid">
            <div><strong>CPR</strong><span>Learn the rhythm</span></div>
            <div><strong>AED</strong><span>Act without delay</span></div>
            <div><strong>FIRST AID</strong><span>Respond with purpose</span></div>
            <div><strong>BLS</strong><span>Work as a team</span></div>
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <p>All instructors are American Heart Association certified.</p>
        <ul>
          <li>AHA course completion cards provided</li>
        </ul>
      </section>

      <section className="section" id="classes">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Courses</p>
            <h2>Skills you can use when it matters.</h2>
          </div>
          <p>
            FirstHand provides a number of courses to fit your needs. All
            courses will include classroom instruction, realistic scenarios,
            and plenty of practice with an experienced instructor.
          </p>
        </div>
        <div className="course-grid">
          {courses.map((course, index) => (
            <article className="course-card" key={course.title}>
              <span className="course-number">0{index + 1}</span>
              <p className="course-audience">{course.audience}</p>
              <h3>{course.title}</h3>
              <p>{course.detail}</p>
              <div className="course-cost">
                <span>Course cost</span>
                <div aria-label="Pricing to be added" />
              </div>
              <a href="#contact">Ask about this class <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="group-section" id="groups">
        <div className="group-copy">
          <p className="eyebrow">On-site group training</p>
          <h2>Bring the training to your team.</h2>
          <p>
            We make it easier to train groups at your location, on a schedule
            that works for your organization.
          </p>
          <a className="button button-light" href="#contact">Request Group Training</a>
        </div>
        <div className="group-list">
          {["Businesses", "Schools", "Churches", "Gyms", "Childcare", "Community groups"].map(
            (group) => <span key={group}>{group}</span>,
          )}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-kicker">
          <img
            src="/fh-logo.png"
            alt="FirstHand CPR Training handprint logo"
          />
          <p>It is more than our name. It is how we teach.</p>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Why FirstHand</p>
          <h2>We have seen what prepared people can do.</h2>
          <p>
            Our instructors are not teaching from a script alone. They have
            responded to real emergencies and understand the pressure, questions,
            and uncertainty people face in those first critical moments.
          </p>
          <p>
            That perspective shapes every class: practical, direct, supportive,
            and focused on helping you act with confidence.
          </p>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div>
          <p className="eyebrow">Common questions</p>
          <h2>Know before you go.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}<span aria-hidden="true">+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Ready when you are</p>
        <h2>Let&apos;s plan your training.</h2>
        <p>
          Tell us what kind of class you need and who you are training.
          We&apos;ll help you find the right next step.
        </p>
        <a className="button button-light" href="mailto:krgraham115@gmail.com">
          Email FirstHand CPR
        </a>
        <small>Phone, service area, pricing, and booking details coming next.</small>
      </section>

      <footer>
        <a className="brand brand-footer" href="#top">
          <span className="brand-mark" aria-hidden="true">FH</span>
          <span><strong>FirstHand</strong><small>CPR TRAINING</small></span>
        </a>
        <p>CPR • AED • First Aid • BLS</p>
        <p>© {new Date().getFullYear()} FirstHand CPR Training LLC</p>
      </footer>
    </main>
  );
}
