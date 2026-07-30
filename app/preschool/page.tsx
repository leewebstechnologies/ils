import Image from "next/image";
import "./preschool.css";
import FloatingButton from "../components/floatingButton/FloatingButton";

const Preschool = () => {
  return (
    <>
      <main className="preschool">
        {/* HERO */}
        <section className="hero">
          <Image
            src="/images/pre-school/3.jpeg"
            alt="Preschool Classroom"
            fill
            priority
            className="heroImage"
          />
          <div className="heroOverlay">
            <h1 style={{ color: "#fff" }}>Pre-School</h1>
            <span className="underline"></span>
          </div>
        </section>

        {/* CONTENT */}
        <section className="content">
          <h2 className="sectionTitle">
            THE PRE-SCHOOL: ARCHITECTS OF THE FUTURE
          </h2>
          <h3 className="sectionTitle">Getting Started</h3>
          <p>
            Your Journey Towards Academic Distinction. Entry into our Preschool
            marks the beginning of a rigorous yet enchanting academic path. At
            Imperial Legacy School, we uphold the tone and standards of a
            premier institution while nurturing curiosity, confidence and joy in
            learning.
          </p>

          <p>
            Prospective parents are warmly invited to experience our serene
            environment firsthand. We encourage you to visit our school to
            engage with the Head of Preschool or our Administrative staff and
            witness our vibrant community of young scholars in action.
          </p>

          {/* CURRICULUM */}
          <div className="gradeSection">
            <h3>Our Curriculum: A Bespoke Triad of Excellence</h3>
            <p>
              At the heart of our academic success is a meticulously crafted
              blended curriculum designed for the modern, global child. We do
              not believe in a “one size fits all” approach.
            </p>
            <p>
              Montessori principles are deeply integrated to foster
              independence, self-discipline and hands-on discovery. Our
              environments are curated to ensure foundations built in preschool
              are truly exceptional.
            </p>
            <p>
              Literacy excellence is driven through the world-renowned Jolly
              Phonics system, empowering pupils with confident reading, language
              mastery and a lifelong love for literature.
            </p>
            <p>
              These pillars are strengthened by a traditional academic framework
              that prepares our scholars for smooth transition into elite
              primary schools, consistently exceeding international benchmarks.
            </p>
          </div>

          {/* HOMEWORK */}
          <div className="gradeSection">
            <Image
              src="/images/pre-school/banner.png"
              alt="Preschool Homework"
              width={1200}
              height={350}
              className="gradeImg"
            />
            <h3>Homework Policy</h3>
            <p>
              We believe in Purposeful Extension rather than repetition.
              Home-based tasks are meaningful and designed to engage families
              without disrupting the essential balance of rest, play and
              relaxation.
            </p>
          </div>

          {/* ELIGIBILITY */}
          <div className="infoBlock">
            <h3>Eligibility</h3>
            <p>
              We operate a rolling admissions policy, welcoming new talent
              throughout the academic year. Candidates are eligible for entry
              once they have reached the age of 24 months (2 years).
            </p>
          </div>

          {/* ADMISSION PROCEDURE */}
          <h3 className="sectionSubtitle">The Admission Procedure</h3>

          <div className="stepsGrid">
            <div className="stepCard">
              <span className="stepNumber">01</span>
              <h4>The Application</h4>
              <p>
                Acquire your official application form from the school
                administrative office.
              </p>
              <p className="fee">Application Fee: ₦10,000</p>
            </div>

            <div className="stepCard">
              <span className="stepNumber">02</span>
              <h4>Documentation</h4>
              <ul>
                <li>Photocopy of birth certificate</li>
                <li>Updated immunisation card</li>
                <li>Two (2) passport photos of the child</li>
                <li>One passport photo of each parent/guardian</li>
                <li>Medical records</li>
              </ul>
            </div>

            <div className="stepCard">
              <span className="stepNumber">03</span>
              <h4>Assessment Scheduling</h4>
              <p>
                Parents select a convenient date for the child’s formal
                assessment and notify the admissions office accordingly.
              </p>
            </div>

            <div className="stepCard">
              <span className="stepNumber">04</span>
              <h4>Consultative Interview</h4>
              <p>
                A short interview is conducted by the Head of School. The
                presence of both the child and parents (where possible) is
                requested.
              </p>
            </div>

            <div className="stepCard">
              <span className="stepNumber">05</span>
              <h4>Securing the Placement</h4>
              <p>
                To guarantee placement within our elite cohort, tuition fees
                must be settled. This confirms enrolment at Imperial Legacy
                School.
              </p>
            </div>

            <div className="stepCard">
              <span className="stepNumber">06</span>
              <h4>
                To start your registration process, please call these numbers:
              </h4>
              <p>09060006230, 07074682927, 08139604432, 07074682926, 08088824595</p>
            </div>
          </div>
        </section>
        <FloatingButton />
      </main>
    </>
  );
};
export default Preschool;
