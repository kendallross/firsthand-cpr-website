import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses } from "../course-data";
import "../course-pages.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(courses).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses[slug];
  if (!course) return {};
  return {
    title: course.metaTitle,
    description: course.metaDescription,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: { title: course.metaTitle, description: course.metaDescription },
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = courses[slug];
  if (!course) notFound();

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="FirstHand CPR Training home">
          <span className="brand-mark" aria-hidden="true">FH</span>
          <span>
            <strong>FirstHand</strong>
            <small>CPR TRAINING</small>
          </span>
        </a>
        <nav aria-label="Course navigation">
          <a href="/#classes">Classes</a>
          <a href="/#groups">Group Training</a>
          <a href="/#about">About</a>
          <a href="/#faq">FAQ</a>
        </nav>
        <a className="button button-small" href="#request">Request Training</a>
      </header>

      <section className="hero course-hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{course.eyebrow}</p>
          <h1>
            {course.title}
            <span>Training.</span>
          </h1>
          <p className="hero-lede">{course.intro}</p>
          <div className="hero-actions">
            <a className="button" href="#request">Request This Course</a>
            <a className="text-link" href="/#classes">View All Classes <span>→</span></a>
          </div>
          <div className="trust-row" aria-label="Training highlights">
            <span>Hands-on practice</span>
            <span>Experienced instructors</span>
            <span>Flexible group scheduling</span>
          </div>
        </div>

        <div className="hero-panel" aria-label={`${course.title} training focus`}>
          <div className="pulse-line" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <p>{course.title} taught with real emergency experience.</p>
          <div className="stat-grid">
            {course.highlights.slice(0, 4).map((item, index) => (
              <div key={item}>
                <strong>0{index + 1}</strong>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <p>Training that feels practical because it comes from practice.</p>
        <ul>
          <li>Firefighters</li>
          <li>Paramedics</li>
          <li>EMTs</li>
        </ul>
      </section>

      <section className="section course-overview">
        <div>
          <p className="eyebrow">Course overview</p>
          <h2>Know what to do when it matters.</h2>
        </div>
        <div className="course-overview-copy">
          <p>{course.description}</p>
          <p><strong>Designed for:</strong> {course.audience}</p>
        </div>
      </section>

      <section className="group-section course-skills-section">
        <div className="group-copy">
          <p className="eyebrow">What you&apos;ll practice</p>
          <h2>Skills you can use.</h2>
          <p>Clear instruction, realistic practice, and repetition built around the situations you may actually face.</p>
        </div>
        <div className="group-list">
          {course.highlights.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section about-section course-audience-section">
        <div className="about-kicker course-logo-card">
          <img src="/fh-logo.png" alt="FirstHand CPR Training handprint logo" />
          <p>Real experience. Real training.</p>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Who this course is for</p>
          <h2>Training built around your role.</h2>
          <div className="course-audience-list">
            {course.idealFor.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </section>

      <section className="section credential-section">
        <div>
          <p className="eyebrow">Course completion</p>
          <h2>Train with purpose.</h2>
        </div>
        <div>
          <p>{course.credential}</p>
          <p>Need to train an entire staff? FirstHand can bring training to your location and work with your organization to plan a practical group session.</p>
        </div>
      </section>

      <section className="group-section service-area-section">
        <div className="group-copy">
          <p className="eyebrow">Areas we serve</p>
          <h2>Local training across East Tennessee.</h2>
          <p>FirstHand CPR Training provides on-site and group training throughout Knoxville and the surrounding communities.</p>
        </div>
        <div className="group-list">
          <span>Knox County</span>
          <span>Blount County</span>
          <span>Anderson County</span>
          <span>Loudon County</span>
        </div>
      </section>

      <section className="contact-section" id="request">
        <p className="eyebrow">Ready when you are</p>
        <h2>Request {course.title} training.</h2>
        <p>Tell us who you are training and what your organization needs. We&apos;ll help you find the right next step.</p>
        <a className="button button-light" href={`mailto:krgraham115@gmail.com?subject=${encodeURIComponent(course.title + " Training Request")}`}>
          Email FirstHand CPR
        </a>
      </section>

      <footer>
        <a className="brand brand-footer" href="/">
          <span className="brand-mark" aria-hidden="true">FH</span>
          <span><strong>FirstHand</strong><small>CPR TRAINING</small></span>
        </a>
        <p>CPR • AED • First Aid • BLS</p>
        <p>© {new Date().getFullYear()} FirstHand CPR Training LLC</p>
      </footer>
    </main>
  );
}
