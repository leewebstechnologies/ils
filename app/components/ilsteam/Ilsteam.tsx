import "./ilsteam.css";
import Link from "next/link";
import Image from "next/image";
import { teamData } from "../../data";

const Ilsteam = () => {
  return (
    <section id="teachers-part" className="pt-70 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-title mt-50">
              <h5>ILS Team</h5>
              <h2>Meet ILS Team</h2>
            </div>
            <div className="teachers-cont">
              <p style={{ fontWeight: "bold" }}>
                At Imperial Legacy School, we believe that great teachers make a
                lasting difference. Our dedicated staff is passionate about
                nurturing young minds, encouraging curiosity, and fostering a
                love for learning. Each member of our teaching team brings a
                unique set of skills, experience, and warmth to the classroom.
              </p>
              <Link href="/careers" className="main-btn mt-55">
                Career with us
              </Link>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="teachers mt-20">
              <div className="row">
                {teamData.map((index) => (
                  <div key={index.id} className="col-sm-6">
                    <div className="singel-teachers mt-30 text-center">
                      <div className="image">
                        <Image
                          src={index.image}
                          width={250}
                          height={250}
                          alt="Teachers"
                          style={{ height: "auto", width: "auto" }}
                        />
                      </div>
                      <div className="cont">
                        <h6>{index.name}</h6>
                        <span>{index.position}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Ilsteam;
