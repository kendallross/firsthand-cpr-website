import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses } from "../course-data";

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
      <header className="site-header course-site-header">
        <a className="brand" href="/" aria-label="FirstHand CPR Training home">
          <span className="brand-mark" aria-hidden="true">FH</span>
          <span><strong>FirstHand</strong><small>CPR TRAINING</small></span>
        </a>
        <div className="course-header-title" aria-label="Current course">{course.title}</div>
        <a className="button button-small" href="/#contact">Request Training</a>
      </header>

      <section className="course-hero">
        <div className="course-hero-copy">
          <p className="eyebrow">{course.eyebrow}</p>
          <h1>{course.title}</h1>
          <p className="hero-lede">{course.intro}</p>
          <div className="hero-actions">
            <a className="button" href="#request">Request This Course</a>
            <a className="text-link" href="/#classes">← All courses</a>
          </div>
          <div className="trust-row"><span>Hands-on practice</span><span>Experienced instructors</span><span>On-site group training</span></div>
        </div>
        <div className="course-hero-panel">
          <p className="eyebrow">FirstHand approach</p>
          <h2>Training shaped by real emergency response.</h2>
          <p>Our instructors are firefighters, paramedics, and EMTs who teach the skills with the perspective that comes from using them when it counts.</p>
        </div>
      </section>

      <section className="proof-strip">
        <p>Practical skills. Clear instruction. Real experience.</p>
        <ul><li>Firefighters</li><li>Paramedics</li><li>EMTs</li></ul>
      </section>

      <section className="section course-overview">
        <div>
          <p className="eyebrow">Course overview</p>
          <h2>Know what to do next.</h2>
        </div>
        <div className="course-overview-copy">
          <p className="course-lead">{course.description}</p>
          <p className="course-audience-line"><strong>Designed for:</strong> {course.audience}</p>
        </div>
      </section>

      <section className="course-detail-section">
        <div className="course-detail-card">
          <p className="eyebrow">What you&apos;ll practice</p>
          <h2>Skills that matter.</h2>
          <ul>{course.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="course-detail-card course-detail-card-dark">
          <p className="eyebrow">Who it&apos;s for</p>
          <h2>Built for real people and teams.</h2>
          <ul>{course.idealFor.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="section credential-section">
        <div><p className="eyebrow">Course completion</p><h2>Train with purpose.</h2></div>
        <div><p>{course.credential}</p><p>Need to train an entire staff? FirstHand can bring training to your location and work with your organization to plan a practical group session.</p></div>
      </section>

      <section className="service-area-section">
        <p className="eyebrow">Areas we serve</p>
        <h2>Local training across East Tennessee.</h2>
        <p>FirstHand CPR Training provides on-site and group training throughout Knoxville and the surrounding communities.</p>
        <div className="service-area-grid"><span>Knox County</span><span>Blount County</span><span>Anderson County</span><span>Loudon County</span></div>
      </section>

      <section className="contact-section" id="request">
        <p className="eyebrow">Ready when you are</p>
        <h2>Request {course.title} training.</h2>
        <p>Tell us who you are training and what your organization needs. We&apos;ll help you plan the right next step.</p>
        <a className="button button-light" href={`mailto:krgraham115@gmail.com?subject=${encodeURIComponent(course.title + " Training Request")}`}>Email FirstHand CPR</a>
      </section>

      <footer>
        <a className="brand brand-footer" href="/"><span className="brand-mark" aria-hidden="true">FH</span><span><strong>FirstHand</strong><small>CPR TRAINING</small></span></a>
        <p>CPR • AED • First Aid • BLS</p><p>© {new Date().getFullYear()} FirstHand CPR Training LLC</p>
      </footer>
    </main>
  );
}
