import Image from "next/image";
import "./admission.css";
import FloatingButton from "../components/floatingButton/FloatingButton";
const Admission = () => {
  return (
    <>
      <section className="hero">
        <Image
          src="/images/admission/banner.jpeg"
          alt="Elementary Classroom"
          fill
          priority
          className="heroImage"
        />

        <div className="heroOverlay">
          <h1>Admission</h1>
          <span className="underline"></span>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Why Choose Imperial Legacy School</h2>
          <p>
            Choosing the right school marks a significant new beginning in the
            life of a child. It is a decision that shapes not only academic
            outcomes but character, confidence, and lifelong values. At Imperial
            Legacy School, we partner intentionally with families to give every
            child a strong, balanced foundation for life.
          </p>

          <p>
            With over 10 years of educational excellence, Imperial Legacy School
            is proudly secular, guided by the belief that education should unite
            rather than divide. Our pupils develop empathy, cooperation,
            critical thinking, and respect for diversity in a nurturing
            environment.
          </p>

          <p>
            We focus on equipping pupils with discipline, leadership skills, and
            global competence—qualities they will draw upon throughout their
            lives.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section lightBg">
        <div className="container">
          <h2 className="sectionTitle">Admission Process</h2>

          <div className="cardGrid">
            <div className="card">
              <h3>Pre-School</h3>
              <p>
                Informal, age-appropriate assessments conducted in a supportive
                environment.
              </p>
            </div>

            <div className="card">
              <h3>Preparatory – Year 5</h3>
              <p>
                Structured assessments in English and Mathematics appropriate to
                the entry level.
              </p>
            </div>

            <div className="card">
              <h3>General Admission</h3>
              <p>
                Applicants must meet entry requirements. Admissions usually
                begin in September, with limited mid-year slots available.
              </p>
            </div>
          </div>

          <p className="note">
            Imperial Legacy School operates as a<strong>day school only</strong>
            . Parents are encouraged to contact the school for guidance.
          </p>
        </div>
      </section>

      {/* Age Requirements */}
      <section className="section">
        <div className="container split">
          <div>
            <h2 className="sectionTitle">Age Requirements</h2>

            <ul className="list">
              <li>
                <strong>Creche:</strong> 3 months and above
              </li>
              <li>
                <strong>Pre-School:</strong> 2 years and above
              </li>
              <li>
                <strong>Grade School:</strong> 6 years and above
              </li>
            </ul>
          </div>

          <div className="highlightBox">
            <span>Registration Fee</span>
            <h3>₦5,000</h3>
            <p>
              Payable upon completion of the admission registration process.
            </p>
          </div>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="section lightBg">
        <div className="container split">
          <div>
            <h2 className="sectionTitle">Application Requirements</h2>

            <ul className="list">
              <li>Two recent passport photographs (not older than 6 months)</li>
              <li>Birth certificate or international passport data page</li>
              <li>Most recent academic report</li>
              <li>Character testimonial from current school</li>
              <li>
                Immunization record and medical report
                <em> (submitted after admission)</em>
              </li>
            </ul>
          </div>

          <div className="sideNote">
            <h4>Important Notice</h4>
            <p>
              All documents must be uploaded during the application process.
              Payment details will be shared after successful registration.
            </p>
          </div>
        </div>
      </section>

      {/* Accounts Office */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Accounts Office</h2>

          <div className="infoGrid">
            <div>
              <h4>Opening Hours</h4>
              <p>School Days: 7:30 a.m. – 4:30 p.m.</p>
              <p>School Holidays: 9:00 a.m. – 4:00 p.m.</p>
              <p>Public Holidays: Closed</p>
            </div>

            <div>
              <h4>Email</h4>
              <p>finance@imperiallegacyschool.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section darkBg">
        <div className="container split">
          <div>
            <h2 className="sectionTitle light">Contact Information</h2>

            <p>Head of Administration: 08139604432</p>
            <p>Primary Administration: 07074682926</p>
            <p>Head of Primary: 07074682927</p>
            <p>Head of Nursery: 09060006230</p>
          </div>

          <div className="contactBox">
            <h4>Official Email Addresses</h4>
            <p>info@imperiallegacyschool.com</p>
            <p>imperiallegacyschool@gmail.com</p>

            <p className="contactNote team">
              Our administrative team is available during school hours to assist
              parents and guardians.
            </p>
          </div>
        </div>
        <FloatingButton />
      </section>
    </>
  );
};
export default Admission;
