import FloatingButton from "../components/floatingButton/FloatingButton";
import { teamData } from "../data";
import "./team.css";
import Image from "next/image";

const Team = () => {
  return (
    <>
      <section id="teachers-page" className="pt-90 pb-120 gray-bg">
        <h1 className="text-center">Meet The Leadership Team</h1>
        <div className="container">
          <div className="row">
            {teamData.map((item) => (
              <div key={item.id} className="col-lg-3 col-sm-6">
                <div className="singel-teachers mt-30 text-center">
                  <div className="image">
                    <Image
                      src={item.image}
                      width={300}
                      height={300}
                      alt="Teachers"
                      className="image"
                    />
                  </div>
                  <div className="cont">
                    <h6>{item.name}</h6>
                    <span>{item.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <FloatingButton />
      </section>
    </>
  );
};
export default Team;
