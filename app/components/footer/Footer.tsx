import Link from "next/link";
import "./footer.css";
import Image from "next/image";


const Footer = () => {
  return (
    <footer id="footer-part">
      <div className="footer-top pt-20 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about mt-40">
                <div className="logo">
                  <Link href="/" className="logo">
                    <Image
                      src="/images/logo1.png"
                      alt="logo"
                      width={70}
                      height={70}
                    />
                    <span className="imperial-legacy">
                      IMPERIAL&nbsp;LEGACY&nbsp;SCHOOL
                    </span>
                  </Link>
                </div>
                <p className="footerLeft">
                  The goal of Imperial Legacy School is to provide a holistic,
                  high-quality education that nurtures academically sound,
                  morally upright, confident, and globally prepared students.
                  The school aims to build future leaders equipped with strong
                  values, critical-thinking skills, and a love for lifelong
                  learning.
                </p>
                <ul className="mt-20">
                  <li className="social-media-icons">
                    <a
                      className="a"
                      href="https://www.facebook.com/share/1EFCL9bT1o"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="a"
                      href="/https://www.tiktok.com/@imperial_legacyschool?_t=ZM-8wBUcy17xEF&_r=1"
                    >
                      <i className="icon fa-brands fa-tiktok"></i>
                    </a>
                  </li>
                  <li>
                    <a className="a" href="https://www.instagram.com/imperial_legacyschool?igsh=MXVtMGM0czlrc3ZuZw==">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-link mt-40">
                <div className="footer-title pb-25">
                  <h6>Sitemap</h6>
                </div>
                <ul className="sitemap">
                  <li>
                    <Link className="a" href="/">
                      <i className="fa fa-angle-right" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="a" href="/">
                      <i className="fa fa-angle-right" />
                      Admission
                    </Link>
                  </li>

                  <li>
                    <Link className="a" href="/">
                      <i className="fa fa-angle-right" />
                      Application Form
                    </Link>
                  </li>
                  <li>
                    <Link className="a" href="/about">
                      <i className="fa fa-angle-right" />
                      About ILS
                    </Link>
                  </li>

                  <li>
                    <Link className="a" href="/contact">
                      <i className="fa fa-angle-right" />
                      Contact
                    </Link>
                  </li>
                </ul>
                {/* <ul className="sitemap">
                  <li>
                    <Link className="a" href="/contact">
                      <i className="fa fa-angle-right" />
                      Contact
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-address mt-40">
                <div className="footer-title pb-25">
                  <h6>Contact Us</h6>
                </div>
                <ul className="address">
                  <li>
                    <div className="icon">
                      <i className="fa fa-home" />
                    </div>
                    <div className="cont">
                      <p style={{ fontWeight: "bold" }}>
                        Plot 8 Great Imperial Estate, Off Miracle Avenue,
                        Magboro, Ogun State.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="cont">
                      <p style={{ fontWeight: "bold" }}>
                        08139604432, 07074681927, 09060006230
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-envelope-o" />
                    </div>
                    <div className="cont">
                      <p style={{ fontWeight: "bold" }}>
                        info@imperiallegacyschool.com,
                        imperiallegacyschool@gmail.com
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
