"use client";
import Link from "next/link";
import "./navbar.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header id="header-part">
      <div className="header-top d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="header-contact text-lg-left text-center">
                <ul>
                  <li>
                    <span></span>
                    <Image src="/images/all-icon/map.png" alt="icon" width={20} height={25} />
                    <span>
                      Plot 8 Great Imperial Estate, Off Miracle Avenue, Magboro,
                      Ogun State.
                    </span>
                  </li>
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
                    <Image src="/images/logo1.png" alt="logo" width={70} height={70} />
                    <span className="imperial-legacy">
                      IMPERIAL&nbsp;LEGACY&nbsp;SCHOOL
                    </span>
                  </Link>
                </div>
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
                      <Link href="/" className={isActive("/") ? "active" : ""}>
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="#"
                        className={
                          pathname.startsWith("/admission-page") ? "active" : ""
                        }
                      >
                        Admission
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link
                            href="/admission"
                            className={isActive("/admission") ? "active" : ""}
                          >
                            Admission Procedure
                          </Link>
                        </li>
                       
                        <li>
                          <Link href="/application" className={isActive("/application") ? "active" : ""}>
                            Application Form / Requirement
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href="#" className={
                          pathname.startsWith("/about") ? "active" : ""}>About&nbsp;Us</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/ils" className={isActive("/ils") ? "active" : ""}>About IMPERIAL LEGACY SCHOOL</Link>
                        </li>
                        <li>
                          <Link href="/director" className={isActive("/director") ? "active" : ""}>Executive Director</Link>
                        </li>
                        <li>
                          <Link href="/team" className={isActive("/team") ? "active" : ""}>Leadership Team</Link>
                        </li>
                        
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href="#" className={pathname.startsWith("/academics") ? "active" : ""}>Academics</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/creche" className={isActive("/creche") ? "active" : ""}>CRECHE</Link>
                        </li>
                        <li>
                          <Link href="/preschool" className={isActive("/preschool") ? "active" : ""}>PRE-SCHOOL</Link>
                        </li>
                        <li>
                          <Link href="/gradeschool" className={isActive("/gradeschool") ? "active" : ""}>GRADE SCHOOL</Link>
                        </li>
                        <li>
                          <Link href="/curricular" className={isActive("/curricular") ? "active" : ""}>
                            EXTRA-CURRICULAR ACTIVITIES
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/blog"
                        className={isActive("/blog") ? "active" : ""}
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/contact"
                        className={isActive("/contact") ? "active" : ""}
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link style={{ color: "#000" }} href="/">
                        School&nbsp;Portal
                      </Link>
                    </li>
                  </ul>
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
