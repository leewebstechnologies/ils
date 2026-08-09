"use client";

import { useState } from "react";
import "./contact.css";
import FloatingButton from "../components/floatingButton/FloatingButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    messege: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact-page" className="pt-90 pb-120 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="contact-from mt-30">
              <div className="section-title">
                <h5>Contact Us</h5>
                <h2>Keep in touch</h2>
              </div>

              <div className="main-form pt-45">
                <form id="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="singel-form form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="singel-form form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="singel-form form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="singel-form form-group">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="singel-form form-group">
                        <textarea
                          name="messege"
                          placeholder="Message"
                          required
                          value={formData.messege}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="singel-form">
                        <button type="button" className="main-btn">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
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
                        Plot 8 Great Imperial Estate, Off Miracle Avenue,
                        Magboro, Ogun State.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="singel-address">
                    <div className="icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="cont">
                      <p>08139604432</p>
                      <p>07074681927</p>
                      <p>09060006230</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="singel-address">
                    <div className="icon">
                      <i className="fa fa-envelope-o" />
                    </div>
                    <div className="cont">
                      <p>info@imperiallegacyschool.com</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="map mt-30">
              <div className="contact-map" />
            </div>
          </div>
        </div>
      </div>
      <FloatingButton />
    </section>
  );
};

export default Contact;
