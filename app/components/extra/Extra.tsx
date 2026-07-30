import Image from "next/image";
import { extraCurricularData } from "../../data";
import "./extra.css";
import Link from "next/link";

const Extra = () => {
  return (
    <section id="course-part" className="pt-115 pb-120 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-45">
              <h5>Activities</h5>
              <h2>Extra Curriculum Activities</h2>
            </div>
          </div>
        </div>
        <div className="row course-slied mt-30">
          {extraCurricularData.map((index) => (
            <div key={index.id} className="col-lg-4">
              <div className="singel-course">
                <div className="thum">
                  <div className="image">
                    <Image
                      src={index.banner}
                      alt="course"
                      width={250}
                      height={200}
                    />
                  </div>
                </div>
                <div className="cont">
                  <Link href="/curricular">
                    <h4>{index.curricular}</h4>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Extra;
