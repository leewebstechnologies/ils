import Link from "next/link";
import "./navbar.css";
import Image from "next/image";
import logo from "../../images/logo1.png";

// const links = [
//   {
//     id: 1,
//     title: "Home",
//     url: "/",
//   },
//   {
//     id: 2,
//     title: "About",
//     url: "/about",
//   },
//   {
//     id: 3,
//     title: "Projects",
//     url: "/projects",
//   },
//   {
//     id: 4,
//     title: "Blog",
//     url: "/blog",
//   },
//   {
//     id: 5,
//     title: "Contact",
//     url: "/contact",
//   },
// ];

const Navbar = () => {
  return (
    <header id="header-part">
      <div className="header-top d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="header-contact text-lg-left text-center">
                <ul>
                  <li>
                    <img src="images/all-icon/map.png" alt="icon" />
                    <span>
                      Plot 8 Great Imperial Estate, Off Miracle Avenue, Magboro,
                      Ogun State.
                    </span>
                  </li>
                  {/* <li>
                    <img src="images/all-icon/email.png" alt="icon" />
                    <span>info@yourmail.com</span>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="header-social-icon text-lg-right text-center social-icon">
                <li className="">
                  <span>Follow&nbsp;Us:</span>
                </li>
                <li className="">
                  <Link
                    className="social-media-icon"
                    href="https://web.facebook.com/Lacreteconcept"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="social-media-icon"
                    href="https://www.tiktok.com/@imperial_legacyschool?_t=ZM-8wBUcy17xEF&_r=1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="icon fa-brands fa-tiktok"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="social-media-icon"
                    href="https://www.instagram.com/imperial_legacyschool?igsh=MXVtMGM0czlrc3ZuZw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="social-media-icon"
                    href="https://wa.me/+2348139604432"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="icon fa-brands fa-square-whatsapp"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-9 col-8">
              <nav className="navbar navbar-expand-lg">
                <div className="col-lg-4 col-md-4">
                  <Link href="/" className="logo">
                    <Image src={logo} alt="logo" width={70} height={70} />
                    <span className="imperial-legacy">
                      IMPERIAL&nbsp;LEGACY&nbsp;SCHOOL
                    </span>
                  </Link>
                </div>
                {/* <Link className="logo" href="/">
                  <Image src={logo} alt="logo" width={70} height={70} />
                  <span className="imperial-legacy">
                    IMPERIAL&nbsp;LEGACY&nbsp;SCHOOL
                  </span>
                </Link> */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto navbarItems">
                    <li className="nav-item">
                      <Link className="active" href="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/admission">Admission</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link className="active" href="/why">
                            Why Choose ILS?
                          </Link>
                        </li>
                        <li>
                          <Link href="/entrance">Entrance Examination</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href="#">About&nbsp;Us</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/ils">About IMPERIAL LEGACY SCHOOL</Link>
                        </li>
                        <li>
                          <Link href="/director">Executive Director</Link>
                        </li>
                        <li>
                          <Link href="/team">Leadership Team</Link>
                        </li>
                        <li>
                          <Link href="/careers">Careers</Link>
                        </li>
                        <li>
                          <Link href="/faqs">Faqs</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href="#">Academics</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/calendar">
                            KEY DATES / SCHOOL CALENDAR
                          </Link>
                        </li>
                        <li>
                          <Link href="/creche">CRECHE</Link>
                        </li>
                        <li>
                          <Link href="/preschool">PRE-SCHOOL</Link>
                        </li>
                        <li>
                          <Link href="/elementary">ELEMENTARY</Link>
                        </li>
                        <li>
                          <Link href="/elibrary">E-LIBRARY</Link>
                        </li>
                        <li>
                          <Link href="/curricular">
                            EXTRA-CURRICULAR ACTIVITIES
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact">BLOG</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                  {/* <ul>
                    <li className="nav-item">
                      <Link className="student-portal" href="/contact">
                        STUDENT&nbsp;PORTAL
                      </Link>
                    </li>
                  </ul> */}
                </div>

                <div className="col-lg-4 col-md-4">
                  <div className="logo">
                    <Link className="school-portal" href="/student-portal">
                      SCHOOL&nbsp;PORTAL
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
