import Image from "next/image";
import "./testimonial.css";
import { testimonialData } from "../../data";


const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="bg_cover pt-115 pb-115"
      data-overlay={8}
      style={{ backgroundImage: "url(images/teachers/4.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-40">
              <h5>Testimonial</h5>
              <h2>What they say</h2>
            </div>
          </div>
        </div>
        <div className="row testimonial-slied mt-40">
          {testimonialData.map((index) => (
            <div key={index.id} className="col-lg-6">
              <div className="singel-testimonial">
                <div className="testimonial-thum">
                  <Image
                    src={index.image}
                    alt="Testimonial"
                    width={100}
                    height={100}
                  />
                  <div className="quote">
                    <i className="fa fa-quote-right" />
                  </div>
                </div>
                <div className="testimonial-cont">
                  <p>
                   {index.comment}
                  </p>
                  <h6>{index.name}</h6>
                  <span>{index.qualification}</span>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="col-lg-6">
            <div className="singel-testimonial">
              <div className="testimonial-thum">
                <img src="images/testimonial/t-2.jpg" alt="Testimonial" />
                <div className="quote">
                  <i className="fa fa-quote-right" />
                </div>
              </div>
              <div className="testimonial-cont">
                <p>
                  Aliquetn sollicitudirem quibibendum auci elit cons equat
                  ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id
                  elit sollicitudire
                </p>
                <h6>Rubina Helen</h6>
                <span>Bsc, Engineering</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="singel-testimonial">
              <div className="testimonial-thum">
                <img src="images/testimonial/t-3.jpg" alt="Testimonial" />
                <div className="quote">
                  <i className="fa fa-quote-right" />
                </div>
              </div>
              <div className="testimonial-cont">
                <p>
                  Aliquetn sollicitudirem quibibendum auci elit cons equat
                  ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id
                  elit sollicitudirem
                </p>
                <h6>Rubina Helen</h6>
                <span>Bsc, Engineering</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Testimonial;


