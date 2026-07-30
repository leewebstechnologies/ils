import Image from "next/image";
import "./director.css";
import FloatingButton from "../components/floatingButton/FloatingButton";

const Director = () => {
  return (
    <section
      id="about-page"
      className="pt-70 pb-110"
      style={{ background: "#f1f1f1" }}
    >
      <div className="container">
        {/* First Row */}
        <div className="row align-items-start">
          {/* Left Content */}
          <div className="col-lg-5">
            <div className="section-title mt-50">
              <h5>Executive Director</h5>
              <h2>Meet The Director</h2>
            </div>

            <div className="about-cont">
              <p>
                Olabisi Adisa holds a B.Sc. in Microbiology from Lagos State
                University (2007) and a Postgraduate Diploma in Educational
                Administration and Planning from the University of Lagos (2011).
                She has undergone several advanced professional trainings
                including comprehensive Montessori training with Greensprings
                School, Early Years Foundation Stage (EYFS) training with
                Havillah EduConsult, the Succeeding at Leading a Learning
                Community (SALLC) program by Kids Court School, intensive
                handwriting development workshops, and multiple school
                leadership and management trainings. Her versatility spans
                academic leadership, curriculum development, early childhood
                education, and staff development.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-7">
            <div className="about-image mt-50">
              <Image
                src="/images/about/avatar6.png"
                alt="Executive Director"
                className="director-image"
                priority
                width={499}
                height={498}
              />
            </div>
          </div>
        </div>

        {/* Second Row - Full Width */}
        <div className="row">
          <div className="col-12">
            <div className="about-cont mt-4">
              <p>
                She is a firm believer in early childhood education as a
                foundational pillar of lifelong learning. Her educational
                philosophy embraces freedom, purpose, and inclusion.  In her words,
                True education happens where children are loved, heard,
                and empowered—not where they are forced to conform.             
                That belief shaped our decision to remain a secular institution,
                where every child, regardless of religious background, is
                welcome. At Imperial Legacy, religion is respected and taught
                objectively as a subject, but the school space remains neutral—a
                community of shared values, critical thinking, mutual respect,
                and global awareness. Our director is deeply invested in raising morally upright,
                academically sound, and emotionally intelligent learners through
                structure, empathy, and innovation. She envisions a school where
                every voice matters and every child is taught with intention.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FloatingButton />
    </section>
  );
};

export default Director;
