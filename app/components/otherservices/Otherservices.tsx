import Image from "next/image";
import "./otherservices.css";
import { otherServicesData } from "../../data";

const Otherservices = () => {
  return (
    <section
      id="video-feature"
      className="bg_cover pt-60 pb-110"
      style={{ backgroundImage: "url(/images/4.jpg)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Video */}
          <div className="col-lg-6 order-last order-lg-first">
            <div className="video text-lg-left text-center pt-50">
              <a
                className="Video-popup"
                href="https://www.youtube.com/watch?v=x4-QXVOsDx4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch video on YouTube"
              >
                <i className="fa fa-play" />
              </a>
            </div>
          </div>

          {/* Other Services */}
          <div className="col-lg-5 offset-lg-1 order-first order-lg-last">
            <div className="feature pt-50">
              <div className="feature-title">
                <h3>Other Services</h3>
              </div>

              <ul>
                {otherServicesData.map((service) => (
                  <li key={service.id}>
                    <div className="singel-feature">
                      <div className="icon">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={50}
                          height={50}
                        />
                      </div>

                      <div className="cont">
                        <h4>{service.title}</h4>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-bg" />
    </section>
  );
};

export default Otherservices;
