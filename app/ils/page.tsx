import Image from "next/image";
import "./ils.css";
import FloatingButton from "../components/floatingButton/FloatingButton";

const Ils = () => {
  return (
    <>
      <section
        id="about-page"
        className="pt-70 pb-110"
        style={{ background: "#f1f1f1" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title mt-50">
                <h5>About us</h5>
                <h2>Welcome to Imperial Legacy School</h2>
              </div>
              <div className="about-cont">
                <p style={{ fontWeight: "bold" }}>
                  Imperial Legacy School, formerly known as Imperial Kiddies,
                  was established in 2016 in Magboro, Ogun State, Nigeria. It
                  began as a crèche service with a deeply rooted mission: to
                  support working parents by providing a safe, nurturing, and
                  stimulating environment for their children during their most
                  formative years. Our vision was to redefine early childhood
                  care in Magboro and its environs, creating a model that
                  harmonised love, structure, and purpose. Our humble beginnings
                  were shaped by resilience, vision, and passion. Starting as a
                  one-woman initiative led by the founder, Olabisi Adisa, the
                  school has grown from a crèche of four children to a thriving
                  educational institution. From serving as the caregiver,
                  cleaner, marketer, and administrator, Olabisi laid a strong
                  foundation of service and purpose. By 2019, we had
                  successfully fulfilled our initial mission in early childhood
                  education and transitioned into a full-fledged primary school.
                  The rebranding to Imperial Legacy School symbolised our new
                  identity one driven by the desire to build enduring legacies
                  through education. Despite the personal tragedy of losing her
                  husband in 2020, the director&apos;s commitment to the vision
                  only strengthened, forging ahead to uphold and expand the
                  dream they once shared. Today, in 2025, Imperial Legacy stands
                  as a beacon of holistic learning, home to over 50 staff and
                  hundreds of pupils. We grow purposefully, one class at a time,
                  and proudly celebrate our first Grade 5 cohort this year.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-image mt-50">
                <Image className="img-fluid" src="/images/about/about.jpeg" width={1080} height={543} alt="About" />
                <div className="mt-50">
                  <h5>Core Values</h5>
                </div>
                <ul className="values">
                  <li>
                    Excellence – We pursue the highest standards in learning,
                    leadership, and service.
                  </li>
                  <li>
                    Empathy – We lead with kindness, compassion, and respect for
                    others.
                  </li>
                  <li>
                    Integrity – We act with honesty, accountability, and strong
                    moral principles.
                  </li>
                  <li>
                    Innovation – We encourage curiosity, creativity, and
                    problem-solving.
                  </li>
                  <li>
                    Inclusivity – We celebrate diversity and ensure a sense of
                    belonging for every child.
                  </li>
                  <li>
                    Discipline – We foster self-control, structure, and
                    responsibility.
                  </li>
                  <li>
                    Purpose – We are intentional in everything we do,
                    cultivating a sense of mission.
                  </li>
                </ul>
                <div className="mt-50">
                  <h5>Our Curriculum</h5>
                  <p style={{ fontWeight: "bold" }}>
                    We run a hybrid curriculum combining the best of Nigerian,
                    British, and Montessori methodologies.
                  </p>
                </div>
                <div className="mt-50">
                  <h5>E-library</h5>
                  <p style={{ fontWeight: "bold" }}>
                    We run a hybrid curriculum combining the best of Nigerian,
                    British, and Montessori methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-items pt-60">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-singel-items mt-30">
                  <span>01</span>
                  <h4>Why a Secular School?</h4>
                  <p style={{ fontWeight: "bold" }}>
                    Imperial Legacy School is proudly secular because we believe
                    that education must unite, not divide. In today’s
                    interconnected world, the most critical skills children must
                    learn are empathy, cooperation, and respect for diversity. A
                    secular school provides the most fertile ground for this to
                    happen.
                  </p>
                  <p style={{ fontWeight: "bold" }}>
                    Here, children learn side-by-side from different
                    backgrounds, growing into compassionate citizens who
                    understand the world beyond dogma. Religion is best nurtured
                    from home school is where we teach critical thinking,
                    character, discipline, and social responsibility. Our
                    inclusive environment fosters real-world readiness,
                    emotional balance, and global competence.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-singel-items mt-30">
                  <span>02</span>
                  <h4>Our Mission</h4>
                  <p style={{ fontWeight: "bold" }}>
                    To nurture confident, purpose-driven learners equipped with
                    the wisdom, resilience, and skills to create lasting
                    legacies of excellence in a global world.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-singel-items mt-30">
                  <span>03</span>
                  <h4>Our vision</h4>
                  <p style={{ fontWeight: "bold" }}>
                    To become a model of transformative education that inspires
                    individuals to exceed their past, lead with purpose, and
                    impact the world through innovation, integrity, and
                    excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-items pt-60">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-singel-items mt-30">
                  <h4>School Policies</h4>
                </div>
                <ul className="values">
                  <li>
                    Inclusivity and Anti-Discrimination: We are a secular school
                    that celebrates diversity. All children are welcome,
                    regardless of faith, background, or ability.
                  </li>
                  <li>
                    Child Protection & Safeguarding: All staff are trained in
                    child protection protocols. Any form of abuse, neglect or
                    bullying is not tolerated.
                  </li>
                  <li>
                    Academic Excellence: We uphold high academic standards.
                    Continuous assessment, regular feedback, and differentiated
                    instruction are integral.
                  </li>
                  <li>
                    Discipline Policy: Discipline is guided by love, respect,
                    and fairness. Positive reinforcement is our primary
                    approach.
                  </li>
                  <li>
                    Parental Involvement: We believe in strong home-school
                    partnerships. Parents are welcome partners in
                    decision-making and learning.
                  </li>
                  <li>
                    Digital Safety: Responsible digital citizenship is taught
                    and modelled.
                  </li>
                  <li>
                    Health and Hygiene: We maintain clean, well-ventilated
                    learning spaces. Regular health checks are observed
                  </li>
                  <li>
                    Attendance: Punctuality and regular attendance are vital.
                    Parents must notify the school for any absence.
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-singel-items mt-30">
                  <h4>Electives</h4>
                </div>
                <ul className="values">
                  <li>Ballet: Grace, coordination and self-expression</li>
                  <li>Taekwondo: Discipline, fitness and confidence</li>
                  <li>
                    Coding & Robotics: Logic, creativity and digital fluency
                  </li>
                  <li>Music: Voice, instruments and performance</li>
                  <li>UCMAS: Brain development through mental arithmetic</li>
                  <li>Chess: Strategy, focus, and cognitive development</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-singel-items mt-30">
                  <h4>Sports</h4>
                </div>
                <ul className="values">
                  <li>Gymnastics: Core strength, balance and flexibility</li>
                  <li>Contortion: Body control and endurance</li>
                  <li>
                    Team Sports: Football, relay races, inter-house competitions
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about-items pt-60">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-singel-items mt-30">
                  <h4>Our Services</h4>
                </div>
                <p style={{ fontWeight: "bold" }}>
                  Imperial Legacy School offers a comprehensive suite of
                  services tailored to support children and their families
                  across every stage of early and primary education including
                  extended and flexible care options to meet the needs of
                  today’s families. Our offerings include:
                </p>
                <ul className="values">
                  <li>
                    Crèche & Daycare: A nurturing, hygienic, and secure
                    environment for infants and toddlers. Open from 7:00am for
                    working parents&apos; convenience.
                  </li>
                  <li>
                    Preschool & Nursery Classes: Age-appropriate,
                    Montessori-inspired learning that builds early literacy,
                    numeracy, and social skills.
                  </li>
                  <li>
                    Primary Education (Basic 1–5): A hybrid curriculum
                    (Nigerian, British, Montessori) that equips learners with
                    academic rigour, critical thinking, and a love for lifelong
                    learning.
                  </li>
                  <li>
                    After-School Care: Structured play, guided homework support,
                    and enrichment for learners whose parents work late.
                  </li>
                  <li>
                    Elective Programs: Weekly co-curricular electives such as
                    ballet, taekwondo, coding & robotics, music, UCMAS, and
                    chess.
                  </li>
                  <li>
                    Holiday/Summer School: Skill-based learning and fun-filled
                    programs during school breaks (see below).
                  </li>
                  <li>
                    E-Library Access: A secure online library portal for
                    extended learning and reading engagement at home.
                  </li>
                  <li>
                    Weekend Care: A unique weekend support service offering
                    supervised learning, enrichment activities, and creative
                    play in a relaxed atmosphere.
                  </li>
                  <li>
                    Sleepovers: Specially organised themed nights or emergency
                    overnight care for parents who need a safe, well-managed
                    environment for their children overnight.
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-singel-items mt-30">
                  <h4>Summer School</h4>
                </div>
                <p style={{ fontWeight: "bold" }}>
                  Imperial Legacy Summer School (August Every Year) Looking for
                  the perfect August plan for your child in Magboro? Our Summer
                  School is where fun meets growth!
                </p>
                <ul className="values">
                  <li>
                    20% Academic Enrichment: Light learning to keep minds sharp
                    (Math, Literacy, Science).
                  </li>
                  <li>
                    60% Movement & Exploration: Dance, drama, taekwondo, outdoor
                    games, excursions.
                  </li>
                  <li>
                    20% Hands-On Activities: Art, bead-making, cooking,
                    experiments, storytelling.
                  </li>
                  <li>Music: Voice, instruments and performance.</li>
                  <li>UCMAS: Brain development through mental arithmetic.</li>
                  <li>Chess: Strategy, focus, and cognitive development.</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-singel-items mt-30">
                  <h4>Why Choose Us?</h4>
                </div>
                <ul className="values">
                  <li>Safe and engaging environment</li>
                  <li>Expert facilitators</li>
                  <li>Fun-packed schedule</li>
                  <li>Flexible enrolment</li>
                </ul>
                <p style={{ fontWeight: "bold" }}>
                  Give your child a summer to remember, filled with purpose and
                  play!
                </p>
                <p style={{ fontWeight: "bold" }}>
                  Stay tuned for updates, enrolment, and exciting announcements
                  as we continue to shape lives and build legacies!
                </p>
              </div>
            </div>
          </div>
        </div>
        <FloatingButton />
      </section>
    </>
  );
};
export default Ils;
