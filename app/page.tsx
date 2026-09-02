"use client";

import { useEffect, useRef, type MouseEvent } from "react";

const courses = [
  {
    title: "BLS Provider",
    audience: "Healthcare professionals",
    detail: "High-performance CPR, team response, AED use, and choking relief.",
    modalId: "bls-course-details",
  },
  {
    title: "Heartsaver CPR AED",
    audience: "Workplaces & community",
    detail: "Confident adult, child, and infant CPR with hands-on AED practice.",
    modalId: "heartsaver-course-details",
  },
  {
    title: "First Aid",
    audience: "Everyday responders",
    detail: "Practical care for common injuries and sudden medical emergencies.",
    modalId: "first-aid-course-details",
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
  {
    question: "Are there any limitations to who can take a CPR course and receive a card?",
    answer:
      "Students must be able to pass both the written and practical skills tests, including demonstrating effective CPR.",
  },
  {
    question: "How long will my certification last?",
    answer:
      "CPR cards are valid for two years. After that, you can take a slightly shorter renewal course that covers the same material.",
  },
  {
    question: "How will I receive my CPR card?",
    answer:
      "The American Heart Association issues cards electronically to the email address you list on the class roster.",
  },
  {
    question: "How long does it take to receive my card?",
    answer:
      "The instructor submits the course materials on the day of the course or the following day. Please allow 7–10 days to receive your card, although it typically arrives sooner.",
  },
  {
    question: "How do I pay for the course?",
    answer:
      "FirstHand accepts tap-to-pay, Zelle, and cash. We can also create an invoice for large business groups paying as a single entity.",
  },
  {
    question: "Where is FirstHand CPR Training located?",
    answer:
      "FirstHand is based in Knoxville, Tennessee, and conducts training throughout Knox, Blount, Loudon, and Anderson counties—and beyond.",
  },
];

const groups = [
  {
    title: "Businesses",
    modalId: "business-training",
    detail: (
      <>
        OSHA requires employers to provide appropriate medical and first-aid
        resources, and some standards specifically require trained first-aid or
        CPR responders. Requirements depend on your workplace hazards and access
        to nearby medical care. <a href="https://www.osha.gov/medical-first-aid" target="_blank" rel="noreferrer">Review OSHA&apos;s medical and first-aid standards</a> to see what applies to your business, then become compliant with FirstHand.
      </>
    ),
  },
  {
    title: "Schools",
    modalId: "school-training",
    detail: "Child emergencies can be some of the scariest moments. Prepare teachers and staff to respond with confidence through practical CPR, AED, and First Aid training.",
  },
  {
    title: "Churches",
    modalId: "church-training",
    detail: "Large gatherings require calm, coordinated action. CPR and First Aid training helps your ministry team direct bystanders, communicate clearly, and work together until emergency professionals arrive.",
  },
  {
    title: "Gyms",
    modalId: "gym-training",
    detail: "Exercise places added stress on the heart, and emergencies can happen without warning. Prepare your staff to recognize trouble and respond quickly with CPR, AED, and First Aid training.",
  },
  {
    title: "Childcare",
    modalId: "childcare-training",
    detail: "Emergencies involving children can be frightening and fast-moving. Give caregivers the hands-on CPR and First Aid skills to stay calm, act quickly, and protect the children in their care.",
  },
  {
    title: "Community groups",
    modalId: "community-training",
    detail: "When people gather, being prepared matters. Training helps members direct others, work as a team, and provide confident CPR and First Aid care until professional help arrives.",
  },
];

export default function Home() {
  const requestScrollPosition = useRef(0);

  const openRequestForm = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    requestScrollPosition.current = window.scrollY;
    window.location.hash = "request-training";
  };

  const closeRequestForm = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.hash = "closed";
    window.requestAnimationFrame(() => {
      window.history.replaceState({}, "", `${window.location.pathname}${window.location.search}`);
      window.scrollTo(0, requestScrollPosition.current);
    });
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("submitted") !== "1") return;

    window.alert("Thanks for your request! FirstHand will reach out shortly to set up your course.");
    url.searchParams.delete("submitted");
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }, []);

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
            <a className="button button-outline" href="#request-training" onClick={openRequestForm}>Request Training</a>
          </div>
          <div className="trust-row" aria-label="Training highlights">
            <span>Hands-on practice</span>
            <span>AHA certified instructors</span>
            <span>Flexible group scheduling</span>
          </div>
        </div>
        <div className="hero-panel" aria-labelledby="why-firsthand-title">
          <h2 id="why-firsthand-title">Why FirstHand</h2>
          <p>
            We believe that the best teachers have first hand experience. Our
            instructors don&apos;t teach from a script alone, but draw from
            their experiences as responders to true emergencies day in and day
            out. This perspective has shaped our teaching and will prepare every
            student with the knowledge and confidence to be the
            &ldquo;first hands&rdquo; on scene of an emergency.
          </p>
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
              <a
                className="course-card-trigger"
                href={`#${course.modalId}`}
                aria-label={`View ${course.title} course details`}
              />
              <span className="course-number">0{index + 1}</span>
              <p className="course-audience">{course.audience}</p>
              <h3>{course.title}</h3>
              <p>{course.detail}</p>
              <a href={`#${course.modalId}`}>
                View course details <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        className="course-modal"
        id="bls-course-details"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bls-modal-title"
      >
        <a className="modal-backdrop" href="#classes" aria-label="Close BLS course details" />
        <div className="modal-card">
          <a className="modal-close" href="#classes" aria-label="Close BLS course details">×</a>
          <p className="eyebrow">Healthcare professionals</p>
          <h2 id="bls-modal-title">BLS Provider Course</h2>
          <p className="modal-intro">
            Focused, hands-on training designed to prepare healthcare providers
            to respond confidently as part of a high-performance team.
          </p>

          <div className="modal-pricing">
            <div><span>First-time course</span><strong>$75</strong></div>
            <div><span>Renewal course</span><strong>$65</strong></div>
            <div><span>Typical runtime</span><strong>3 hours</strong></div>
          </div>

          <div className="modal-details">
            <div>
              <p className="modal-label">Course coverage</p>
              <ul>
                <li>High-performance CPR</li>
                <li>Team dynamics and coordinated response</li>
                <li>Written and practical testing</li>
              </ul>
            </div>
            <div>
              <p className="modal-label">Materials included</p>
              <ul>
                <li>One-way valves and masks</li>
                <li>Required workbooks</li>
                <li>Student manuals and course materials</li>
              </ul>
            </div>
          </div>

          <a className="button" href="#request-training" onClick={openRequestForm}>Request BLS Training</a>
        </div>
      </section>

      <section
        className="course-modal"
        id="heartsaver-course-details"
        role="dialog"
        aria-modal="true"
        aria-labelledby="heartsaver-modal-title"
      >
        <a className="modal-backdrop" href="#classes" aria-label="Close Heartsaver course details" />
        <div className="modal-card">
          <a className="modal-close" href="#classes" aria-label="Close Heartsaver course details">×</a>
          <p className="eyebrow">Workplaces & community</p>
          <h2 id="heartsaver-modal-title">Heartsaver CPR AED</h2>
          <p className="modal-intro">
            Practical training for everyday responders who may be the first
            person available to help during a cardiac arrest emergency.
          </p>

          <div className="modal-pricing modal-pricing-stack">
            <div><span>First-time course</span><strong>$65</strong></div>
            <div><span>Renewal course</span><strong>$60</strong></div>
            <div>
              <span>First Aid add-on</span>
              <strong>+$15</strong>
              <small>Add First Aid training to the end of the Heartsaver course.</small>
            </div>
            <div><span>Typical runtime</span><strong>3 hours</strong></div>
          </div>

          <div className="modal-details">
            <div>
              <p className="modal-label">Cardiac arrest response</p>
              <ul>
                <li>Recognizing cardiac arrest and activating emergency services</li>
                <li>High-quality CPR for adults, children, and infants</li>
                <li>Safe, confident use of an AED</li>
                <li>Choking relief and continued care until EMS arrives</li>
              </ul>
            </div>
            <div>
              <p className="modal-label">Materials included</p>
              <ul>
                <li>One-way valves and masks</li>
                <li>Required workbooks</li>
                <li>Student manuals and course materials</li>
              </ul>
            </div>
          </div>

          <a className="button" href="#request-training" onClick={openRequestForm}>Request Heartsaver Training</a>
        </div>
      </section>

      <section
        className="course-modal"
        id="first-aid-course-details"
        role="dialog"
        aria-modal="true"
        aria-labelledby="first-aid-modal-title"
      >
        <a className="modal-backdrop" href="#classes" aria-label="Close First Aid course details" />
        <div className="modal-card">
          <a className="modal-close" href="#classes" aria-label="Close First Aid course details">×</a>
          <p className="eyebrow">Everyday responders</p>
          <h2 id="first-aid-modal-title">First Aid Course</h2>
          <p className="modal-intro">
            Build practical confidence across a wide range of common injuries,
            illnesses, and sudden emergencies. Organizations and groups may
            choose areas of emphasis that best match their people, setting,
            and likely response needs.
          </p>

          <div className="modal-pricing modal-pricing-two">
            <div><span>Course cost</span><strong>$30</strong></div>
            <div><span>Typical runtime</span><strong>Dependent on course needs</strong></div>
          </div>

          <div className="modal-details">
            <div>
              <p className="modal-label">Emergency topics</p>
              <ul>
                <li>Bleeding, wounds, burns, and traumatic injuries</li>
                <li>Sudden illness and medical emergencies</li>
                <li>Environmental and workplace emergencies</li>
              </ul>
            </div>
            <div>
              <p className="modal-label">Training tailored to you</p>
              <ul>
                <li>Choose added emphasis for your workplace or organization</li>
                <li>Practice realistic situations relevant to your group</li>
                <li>Learn clear steps for care until professional help arrives</li>
              </ul>
            </div>
          </div>

          <a className="button" href="#request-training" onClick={openRequestForm}>Request First Aid Training</a>
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
          <a className="button button-light" href="#request-training" onClick={openRequestForm}>Request Group Training</a>
        </div>
        <div className="group-list">
          {groups.map((group) => (
            <a key={group.title} href={`#${group.modalId}`}>
              {group.title}
            </a>
          ))}
        </div>
      </section>

      {groups.map((group) => (
        <section
          className="course-modal group-modal"
          id={group.modalId}
          key={group.modalId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${group.modalId}-title`}
        >
          <a className="modal-backdrop" href="#groups" aria-label={`Close ${group.title} training details`} />
          <div className="modal-card">
            <a className="modal-close" href="#groups" aria-label={`Close ${group.title} training details`}>×</a>
            <p className="eyebrow">On-site group training</p>
            <h2 id={`${group.modalId}-title`}>{group.title}</h2>
            <p className="group-modal-copy">{group.detail}</p>
            <a className="button" href="#request-training" onClick={openRequestForm}>Request Group Training</a>
          </div>
        </section>
      ))}

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
        <p className="eyebrow">Questions &amp; inquiries</p>
        <h2>Let&apos;s talk.</h2>
        <p>
          Have a question about courses, scheduling, or certification? Send us
          an email and we&apos;ll help you find the right next step.
        </p>
        <a className="button button-light" href="mailto:kendall@firsthandcprtraining.com?subject=FirstHand%20CPR%20Question">
          Email FirstHand
        </a>
      </section>

      <section
        className="course-modal request-modal"
        id="request-training"
        role="dialog"
        aria-modal="true"
        aria-labelledby="request-training-title"
      >
        <a className="modal-backdrop" href="#contact" onClick={closeRequestForm} aria-label="Close training request form" />
        <div className="modal-card">
          <a className="modal-close" href="#contact" onClick={closeRequestForm} aria-label="Close training request form">×</a>
          <p className="eyebrow">Course request</p>
          <h2 id="request-training-title">Plan your training.</h2>
          <form action="https://formsubmit.co/kendall@firsthandcprtraining.com" method="POST">
            <input type="hidden" name="_subject" value="New FirstHand CPR course request" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://firsthandcprtraining.com/?submitted=1#contact" />
            <input className="form-honey" type="text" name="_honey" tabIndex={-1} autoComplete="off" />

            <div className="request-form-grid">
              <label>
                Course requested
                <select name="Course Requested" required defaultValue="">
                  <option value="" disabled>Select a course</option>
                  <option>BLS Provider</option>
                  <option>Heartsaver CPR AED</option>
                  <option>First Aid</option>
                  <option>CPR, AED &amp; First Aid</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label>
                Number of students
                <input type="number" name="Number of Students" min="1" required />
              </label>
              <label className="form-wide">
                Business or individual taking course
                <input type="text" name="Business or Individual Taking Course" required />
              </label>
              <label>
                Contact Name
                <input type="text" name="Contact Name" autoComplete="name" required />
              </label>
              <label>
                Phone number
                <input
                  type="tel"
                  name="Phone Number"
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="(?:\+?1[ .-]?)?\(?[2-9][0-9]{2}\)?[ .-]?[0-9]{3}[ .-]?[0-9]{4}"
                  title="Please enter a valid 10-digit phone number."
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  title="Please enter a valid email address."
                  required
                />
              </label>
              <fieldset className="date-preference form-wide">
                <legend>Preferred date range</legend>
                <p>Choose a start and end date, or select earliest available.</p>
                <div className="date-range">
                  <label>
                    Start date
                    <input type="date" name="Preferred Start Date" lang="en-GB" />
                  </label>
                  <label>
                    End date
                    <input type="date" name="Preferred End Date" lang="en-GB" />
                  </label>
                </div>
                <label className="earliest-available">
                  <input type="checkbox" name="Date Preference" value="Earliest available" />
                  Earliest available
                </label>
              </fieldset>
              <label>
                Time of day
                <select name="Time of Day" required defaultValue="">
                  <option value="" disabled>Select a time</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                  <option>Flexible</option>
                </select>
              </label>
              <label className="form-wide">
                Location requested
                <input type="text" name="Location Requested" placeholder="Address, city, or preferred area" required />
              </label>
              <fieldset className="form-wide">
                <legend>Materials available at site</legend>
                <div className="material-options">
                  {[
                    "Television for videos",
                    "Projector",
                    "Screen",
                    "Speakers",
                    "Internet access",
                    "Training room",
                    "None",
                  ].map((material) => (
                    <label key={material}>
                      <input type="checkbox" name="Materials Available at Site" value={material} />
                      {material}
                    </label>
                  ))}
                </div>
                <input type="text" name="Other Materials Available" placeholder="Other equipment or site details" />
              </fieldset>
            </div>
            <button className="button" type="submit">Submit Form</button>
          </form>
        </div>
      </section>

      <footer>
        <a className="footer-logo-link" href="#top" aria-label="FirstHand CPR Training home">
          <img src="/firsthand-banner-logo.png" alt="FirstHand CPR Training" />
        </a>
        <p className="footer-service">
          Proudly serving
          <span>Knoxville, Maryville, Lenoir City, Oak Ridge and more!</span>
        </p>
      </footer>
    </main>
  );
}
