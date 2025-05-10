import "./contact.css";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact-page" className="pt-90 pb-120 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="contact-from mt-30">
              <div className="section-title">
                <h5>Contact Us</h5>
                <h2>Keep in touch</h2>
              </div>{" "}
              {/* section title */}
              <div className="main-form pt-45">
                <form
                  id="contact-form"
                  action="#"
                  method="post"
                  data-toggle="validator"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="singel-form form-group">
                        <input
                          name="name"
                          type="text"
                          placeholder="Your name"
                          data-error="Name is required."
                          required={true}
                        />
                        <div className="help-block with-errors" />
                      </div>{" "}
                      {/* singel form */}
                    </div>
                    <div className="col-md-6">
                      <div className="singel-form form-group">
                        <input
                          name="email"
                          type="email"
                          placeholder="Email"
                          data-error="Valid email is required."
                          required={true}
                        />
                        <div className="help-block with-errors" />
                      </div>{" "}
                      {/* singel form */}
                    </div>
                    <div className="col-md-6">
                      <div className="singel-form form-group">
                        <input
                          name="subject"
                          type="text"
                          placeholder="Subject"
                          data-error="Subject is required."
                          required={true}
                        />
                        <div className="help-block with-errors" />
                      </div>{" "}
                      {/* singel form */}
                    </div>
                    <div className="col-md-6">
                      <div className="singel-form form-group">
                        <input
                          name="phone"
                          type="text"
                          placeholder="Phone"
                          data-error="Phone is required."
                          required={true}
                        />
                        <div className="help-block with-errors" />
                      </div>{" "}
                      {/* singel form */}
                    </div>
                    <div className="col-md-12">
                      <div className="singel-form form-group">
                        <textarea
                          name="messege"
                          placeholder="Messege"
                          data-error="Please,leave us a message."
                          required={true}
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>{" "}
                      {/* singel form */}
                    </div>
                    <p className="form-message" />
                    <div className="col-md-12">
                      <div className="singel-form">
                        <button type="submit" className="main-btn">
                          Send
                        </button>
                      </div>{" "}
                      {/* singel form */}
                    </div>
                  </div>{" "}
                  {/* row */}
                </form>
              </div>{" "}
              {/* main form */}
            </div>{" "}
            {/*  contact from */}
          </div>
          <div className="col-lg-5">
            <div className="contact-address mt-30">
              <ul>
                <li>
                  <div className="singel-address">
                    <div className="icon">
                      <i className="fa fa-home" />
                    </div>
                    <div className="cont">
                      <p>
                        143 castle road 517 district, kiyev port south Canada
                      </p>
                    </div>
                  </div>{" "}
                  {/* singel address */}
                </li>
                <li>
                  <div className="singel-address">
                    <div className="icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="cont">
                      <p>+3 123 456 789</p>
                      <p>+1 222 345 342</p>
                    </div>
                  </div>{" "}
                  {/* singel address */}
                </li>
                <li>
                  <div className="singel-address">
                    <div className="icon">
                      <i className="fa fa-envelope-o" />
                    </div>
                    <div className="cont">
                      <p>info@yourmail.com</p>
                      <p>info@yourmail.com</p>
                    </div>
                  </div>{" "}
                  {/* singel address */}
                </li>
              </ul>
            </div>{" "}
            {/* contact address */}
            <div className="map mt-30">
              <div className="contact-map" />
            </div>{" "}
            {/* map */}
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </section>
  );
};
export default Contact;
