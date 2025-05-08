import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="slider-part" className="slider-active">
        <div
          className="single-slider bg_cover pt-150"
          style={{ backgroundImage: "url(images/slider/s-1.jpg)" }}
          data-overlay={4}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-9">
                <div className="slider-cont">
                  <h1 data-animation="bounceInLeft" data-delay="1s">
                    Choose the right theme for education
                  </h1>
                  <p data-animation="fadeInUp" data-delay="1.3s">
                    Donec vitae sapien ut libearo venenatis faucibus. Nullam
                    quis ante. Etiam sit amet orci eget eros faucibus tincidunt
                    Sed fringilla mauri amet nibh.
                  </p>
                  <ul>
                    <li>
                      <a
                        data-animation="fadeInUp"
                        data-delay="1.6s"
                        className="main-btn"
                        href="#"
                      >
                        Read More
                      </a>
                    </li>
                    <li>
                      <a
                        data-animation="fadeInUp"
                        data-delay="1.9s"
                        className="main-btn main-btn-2"
                        href="#"
                      >
                        Get Started
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* container */}
        </div>{" "}
        {/* single slider */}
        <div
          className="single-slider bg_cover pt-150"
          style={{ backgroundImage: "url(images/slider/s-2.jpg)" }}
          data-overlay={4}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-9">
                <div className="slider-cont">
                  <h1 data-animation="bounceInLeft" data-delay="1s">
                    Choose the right theme for education
                  </h1>
                  <p data-animation="fadeInUp" data-delay="1.3s">
                    Donec vitae sapien ut libearo venenatis faucibus. Nullam
                    quis ante. Etiam sit amet orci eget eros faucibus tincidunt
                    Sed fringilla mauri amet nibh.
                  </p>
                  <ul>
                    <li>
                      <a
                        data-animation="fadeInUp"
                        data-delay="1.6s"
                        className="main-btn"
                        href="#"
                      >
                        Read More
                      </a>
                    </li>
                    <li>
                      <a
                        data-animation="fadeInUp"
                        data-delay="1.9s"
                        className="main-btn main-btn-2"
                        href="#"
                      >
                        Get Started
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* container */}
        </div>{" "}
        {/* single slider */}
        <div
          className="single-slider bg_cover pt-150"
          style={{ backgroundImage: "url(images/slider/s-3.jpg)" }}
          data-overlay={4}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-9">
                <div className="slider-cont">
                  <h1 data-animation="bounceInLeft" data-delay="1s">
                    Choose the right theme for education
                  </h1>
                  <p data-animation="fadeInUp" data-delay="1.3s">
                    Donec vitae sapien ut libearo venenatis faucibus. Nullam
                    quis ante. Etiam sit amet orci eget eros faucibus tincidunt
                    Sed fringilla mauri amet nibh.
                  </p>
                  <ul>
                    <li>
                      <a
                        data-animation="fadeInUp"
                        data-delay="1.6s"
                        className="main-btn"
                        href="#"
                      >
                        Read More
                      </a>
                    </li>
                    <li>
                      <a
                        data-animation="fadeInUp"
                        data-delay="1.9s"
                        className="main-btn main-btn-2"
                        href="#"
                      >
                        Get Started
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* container */}
        </div>{" "}
        {/* single slider */}
      </section>
      {/*====== SLIDER PART ENDS ======*/}
      {/*====== CATEGORY PART START ======*/}
      <section id="category-part">
        <div className="container">
          <div className="category pt-40 pb-80">
            <div className="row">
              <div className="col-lg-4">
                <div className="category-text pt-40">
                  <h2>Best platform to learn everything</h2>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-8 offset-2">
                <div className="row category-slied mt-40">
                  <div className="col-lg-4">
                    <a href="#">
                      <span className="singel-category text-center color-1">
                        <span className="icon">
                          <img src="images/all-icon/ctg-1.png" alt="Icon" />
                        </span>
                        <span className="cont">
                          <span>Language</span>
                        </span>
                      </span>{" "}
                      {/* singel category */}
                    </a>
                  </div>
                  <div className="col-lg-4">
                    <a href="#">
                      <span className="singel-category text-center color-2">
                        <span className="icon">
                          <img src="images/all-icon/ctg-2.png" alt="Icon" />
                        </span>
                        <span className="cont">
                          <span>Business</span>
                        </span>
                      </span>{" "}
                      {/* singel category */}
                    </a>
                  </div>
                  <div className="col-lg-4">
                    <a href="#">
                      <span className="singel-category text-center color-3">
                        <span className="icon">
                          <img src="images/all-icon/ctg-3.png" alt="Icon" />
                        </span>
                        <span className="cont">
                          <span>Literature</span>
                        </span>
                      </span>{" "}
                      {/* singel category */}
                    </a>
                  </div>
                  <div className="col-lg-4">
                    <a href="#">
                      <span className="singel-category text-center color-1">
                        <span className="icon">
                          <img src="images/all-icon/ctg-1.png" alt="Icon" />
                        </span>
                        <span className="cont">
                          <span>Language</span>
                        </span>
                      </span>{" "}
                      {/* singel category */}
                    </a>
                  </div>
                  <div className="col-lg-4">
                    <a href="#">
                      <span className="singel-category text-center color-2">
                        <span className="icon">
                          <img src="images/all-icon/ctg-2.png" alt="Icon" />
                        </span>
                        <span className="cont">
                          <span>Business</span>
                        </span>
                      </span>{" "}
                      {/* singel category */}
                    </a>
                  </div>
                  <div className="col-lg-4">
                    <a href="#">
                      <span className="singel-category text-center color-3">
                        <span className="icon">
                          <img src="images/all-icon/ctg-3.png" alt="Icon" />
                        </span>
                        <span className="cont">
                          <span>Literature</span>
                        </span>
                      </span>{" "}
                      {/* singel category */}
                    </a>
                  </div>
                </div>{" "}
                {/* category slied */}
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* category */}
        </div>{" "}
        {/* container */}
      </section>
      {/*====== CATEGORY PART ENDS ======*/}
      {/*====== ABOUT PART START ======*/}
      <section id="about-part" className="pt-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title mt-50">
                <h5>About us</h5>
                <h2>Welcome to Edubin </h2>
              </div>{" "}
              {/* section title */}
              <div className="about-cont">
                <p>
                  Lorem ipsum gravida nibh vel velit auctor aliquetn
                  sollicitudirem quibibendum auci elit cons equat ipsutis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio
                  tincidunt mauris. <br /> <br /> auci elit cons equat ipsutis
                  sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
                  a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio
                  tincidunt mauris
                </p>
                <a href="#" className="main-btn mt-55">
                  Learn More
                </a>
              </div>
            </div>{" "}
            {/* about cont */}
            <div className="col-lg-6 offset-lg-1">
              <div className="about-event mt-50">
                <div className="event-title">
                  <h3>Upcoming events</h3>
                </div>{" "}
                {/* event title */}
                <ul>
                  <li>
                    <div className="singel-event">
                      <span>
                        <i className="fa fa-calendar" /> 2 December 2018
                      </span>
                      <a href="events-singel.html">
                        <h4>Campus clean workshop</h4>
                      </a>
                      <span>
                        <i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm
                      </span>
                      <span>
                        <i className="fa fa-map-marker" /> Rc Auditorim
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="singel-event">
                      <span>
                        <i className="fa fa-calendar" /> 2 December 2018
                      </span>
                      <a href="events-singel.html">
                        <h4>Tech Summit</h4>
                      </a>
                      <span>
                        <i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm
                      </span>
                      <span>
                        <i className="fa fa-map-marker" /> Rc Auditorim
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="singel-event">
                      <span>
                        <i className="fa fa-calendar" /> 2 December 2018
                      </span>
                      <a href="events-singel.html">
                        <h4>Enviroement conference</h4>
                      </a>
                      <span>
                        <i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm
                      </span>
                      <span>
                        <i className="fa fa-map-marker" /> Rc Auditorim
                      </span>
                    </div>
                  </li>
                </ul>
              </div>{" "}
              {/* about event */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
        <div className="about-bg">
          <img src="images/about/bg-1.png" alt="About" />
        </div>
      </section>
      {/*====== ABOUT PART ENDS ======*/}
      {/*====== APPLY PART START ======*/}
      <section id="apply-aprt" className="pb-120">
        <div className="container">
          <div className="apply">
            <div className="row no-gutters">
              <div className="col-lg-6">
                <div className="apply-cont apply-color-1">
                  <h3>Apply for fall 2019</h3>
                  <p>
                    Gravida nibh vel velit auctor aliquetn sollicitudirem sem
                    quibibendum auci elit cons equat ipsutis sem nibh id elituis
                    sed odio sit amet nibh vulputate cursus equat ipsutis.
                  </p>
                  <a href="#" className="main-btn">
                    Apply Now
                  </a>
                </div>{" "}
                {/* apply cont */}
              </div>
              <div className="col-lg-6">
                <div className="apply-cont apply-color-2">
                  <h3>Apply for scholarship</h3>
                  <p>
                    Gravida nibh vel velit auctor aliquetn sollicitudirem sem
                    quibibendum auci elit cons equat ipsutis sem nibh id elituis
                    sed odio sit amet nibh vulputate cursus equat ipsutis.
                  </p>
                  <a href="#" className="main-btn">
                    Apply Now
                  </a>
                </div>{" "}
                {/* apply cont */}
              </div>
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </section>
      {/*====== APPLY PART ENDS ======*/}
      {/*====== COURSE PART START ======*/}
      <section id="course-part" className="pt-115 pb-120 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title pb-45">
                <h5>Our course</h5>
                <h2>Featured courses </h2>
              </div>{" "}
              {/* section title */}
            </div>
          </div>{" "}
          {/* row */}
          <div className="row course-slied mt-30">
            <div className="col-lg-4">
              <div className="singel-course">
                <div className="thum">
                  <div className="image">
                    <img src="images/course/cu-1.jpg" alt="Course" />
                  </div>
                  <div className="price">
                    <span>Free</span>
                  </div>
                </div>
                <div className="cont">
                  <ul>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <span>(20 Reviws)</span>
                  <a href="courses-singel.html">
                    <h4>Learn basis javascirpt from start for beginner</h4>
                  </a>
                  <div className="course-teacher">
                    <div className="thum">
                      <a href="#">
                        <img
                          src="images/course/teacher/t-1.jpg"
                          alt="teacher"
                        />
                      </a>
                    </div>
                    <div className="name">
                      <a href="#">
                        <h6>Mark anthem</h6>
                      </a>
                    </div>
                    <div className="admin">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-user" />
                            <span>31</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                            <span>10</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* singel course */}
            </div>
            <div className="col-lg-4">
              <div className="singel-course">
                <div className="thum">
                  <div className="image">
                    <img src="images/course/cu-2.jpg" alt="Course" />
                  </div>
                  <div className="price">
                    <span>Free</span>
                  </div>
                </div>
                <div className="cont">
                  <ul>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <span>(20 Reviws)</span>
                  <a href="courses-singel.html">
                    <h4>Learn basis javascirpt from start for beginner</h4>
                  </a>
                  <div className="course-teacher">
                    <div className="thum">
                      <a href="#">
                        <img
                          src="images/course/teacher/t-2.jpg"
                          alt="teacher"
                        />
                      </a>
                    </div>
                    <div className="name">
                      <a href="#">
                        <h6>Mark anthem</h6>
                      </a>
                    </div>
                    <div className="admin">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-user" />
                            <span>31</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                            <span>10</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* singel course */}
            </div>
            <div className="col-lg-4">
              <div className="singel-course">
                <div className="thum">
                  <div className="image">
                    <img src="images/course/cu-3.jpg" alt="Course" />
                  </div>
                  <div className="price">
                    <span>Free</span>
                  </div>
                </div>
                <div className="cont">
                  <ul>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <span>(20 Reviws)</span>
                  <a href="courses-singel.html">
                    <h4>Learn basis javascirpt from start for beginner</h4>
                  </a>
                  <div className="course-teacher">
                    <div className="thum">
                      <a href="#">
                        <img
                          src="images/course/teacher/t-3.jpg"
                          alt="teacher"
                        />
                      </a>
                    </div>
                    <div className="name">
                      <a href="#">
                        <h6>Mark anthem</h6>
                      </a>
                    </div>
                    <div className="admin">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-user" />
                            <span>31</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                            <span>10</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* singel course */}
            </div>
            <div className="col-lg-4">
              <div className="singel-course">
                <div className="thum">
                  <div className="image">
                    <img src="images/course/cu-4.jpg" alt="Course" />
                  </div>
                  <div className="price">
                    <span>Free</span>
                  </div>
                </div>
                <div className="cont">
                  <ul>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <span>(20 Reviws)</span>
                  <a href="courses-singel.html">
                    <h4>Learn basis javascirpt from start for beginner</h4>
                  </a>
                  <div className="course-teacher">
                    <div className="thum">
                      <a href="#">
                        <img
                          src="images/course/teacher/t-4.jpg"
                          alt="teacher"
                        />
                      </a>
                    </div>
                    <div className="name">
                      <a href="#">
                        <h6>Mark anthem</h6>
                      </a>
                    </div>
                    <div className="admin">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-user" />
                            <span>31</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                            <span>10</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* singel course */}
            </div>
            <div className="col-lg-4">
              <div className="singel-course">
                <div className="thum">
                  <div className="image">
                    <img src="images/course/cu-5.jpg" alt="Course" />
                  </div>
                  <div className="price">
                    <span>Free</span>
                  </div>
                </div>
                <div className="cont">
                  <ul>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <span>(20 Reviws)</span>
                  <a href="courses-singel.html">
                    <h4>Learn basis javascirpt from start for beginner</h4>
                  </a>
                  <div className="course-teacher">
                    <div className="thum">
                      <a href="#">
                        <img
                          src="images/course/teacher/t-5.jpg"
                          alt="teacher"
                        />
                      </a>
                    </div>
                    <div className="name">
                      <a href="#">
                        <h6>Mark anthem</h6>
                      </a>
                    </div>
                    <div className="admin">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-user" />
                            <span>31</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                            <span>10</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* singel course */}
            </div>
          </div>{" "}
          {/* course slied */}
        </div>{" "}
        {/* container */}
      </section>
      {/*====== COURSE PART ENDS ======*/}
      {/*====== VIDEO FEATURE PART START ======*/}
      <section
        id="video-feature"
        className="bg_cover pt-60 pb-110"
        style={{ backgroundImage: "url(images/bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-last order-lg-first">
              <div className="video text-lg-left text-center pt-50">
                <a
                  className="Video-popup"
                  href="https://www.youtube.com/watch?v=bRRtdzJH1oE"
                >
                  <i className="fa fa-play" />
                </a>
              </div>{" "}
              {/* row */}
            </div>
            <div className="col-lg-5 offset-lg-1 order-first order-lg-last">
              <div className="feature pt-50">
                <div className="feature-title">
                  <h3>Our Facilities</h3>
                </div>
                <ul>
                  <li>
                    <div className="singel-feature">
                      <div className="icon">
                        <img src="images/all-icon/f-1.png" alt="icon" />
                      </div>
                      <div className="cont">
                        <h4>Global Certificate</h4>
                        <p>
                          Gravida nibh vel velit auctor aliquetn auci elit cons
                          solliazcitudirem sem quibibendum sem nibhutis.
                        </p>
                      </div>
                    </div>{" "}
                    {/* singel feature */}
                  </li>
                  <li>
                    <div className="singel-feature">
                      <div className="icon">
                        <img src="images/all-icon/f-2.png" alt="icon" />
                      </div>
                      <div className="cont">
                        <h4>Alumni Support</h4>
                        <p>
                          Gravida nibh vel velit auctor aliquetn auci elit cons
                          solliazcitudirem sem quibibendum sem nibhutis.
                        </p>
                      </div>
                    </div>{" "}
                    {/* singel feature */}
                  </li>
                  <li>
                    <div className="singel-feature">
                      <div className="icon">
                        <img src="images/all-icon/f-3.png" alt="icon" />
                      </div>
                      <div className="cont">
                        <h4>Books &amp; Library</h4>
                        <p>
                          Gravida nibh vel velit auctor aliquetn auci elit cons
                          solliazcitudirem sem quibibendum sem nibhutis.
                        </p>
                      </div>
                    </div>{" "}
                    {/* singel feature */}
                  </li>
                </ul>
              </div>{" "}
              {/* feature */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
        <div className="feature-bg" /> {/* feature bg */}
      </section>
      {/*====== VIDEO FEATURE PART ENDS ======*/}
      {/*====== TEACHERS PART START ======*/}
      <section id="teachers-part" className="pt-70 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title mt-50">
                <h5>Featured Teachers</h5>
                <h2>Meet Our teachers</h2>
              </div>{" "}
              {/* section title */}
              <div className="teachers-cont">
                <p>
                  Lorem ipsum gravida nibh vel velit auctor aliquetn
                  sollicitudirem quibibendum auci elit cons equat ipsutis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio
                  tincidunt mauris. <br /> <br /> auci elit cons equat ipsutis
                  sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
                  a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio
                  tincidunt mauris
                </p>
                <a href="#" className="main-btn mt-55">
                  Career with us
                </a>
              </div>{" "}
              {/* teachers cont */}
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="teachers mt-20">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="singel-teachers mt-30 text-center">
                      <div className="image">
                        <img src="images/teachers/t-1.jpg" alt="Teachers" />
                      </div>
                      <div className="cont">
                        <a href="teachers-singel.html">
                          <h6>Mark alen</h6>
                        </a>
                        <span>Vice chencelor</span>
                      </div>
                    </div>{" "}
                    {/* singel teachers */}
                  </div>
                  <div className="col-sm-6">
                    <div className="singel-teachers mt-30 text-center">
                      <div className="image">
                        <img src="images/teachers/t-2.jpg" alt="Teachers" />
                      </div>
                      <div className="cont">
                        <a href="teachers-singel.html">
                          <h6>David card</h6>
                        </a>
                        <span>Pro chencelor</span>
                      </div>
                    </div>{" "}
                    {/* singel teachers */}
                  </div>
                  <div className="col-sm-6">
                    <div className="singel-teachers mt-30 text-center">
                      <div className="image">
                        <img src="images/teachers/t-3.jpg" alt="Teachers" />
                      </div>
                      <div className="cont">
                        <a href="teachers-singel.html">
                          <h6>Rebeka alig</h6>
                        </a>
                        <span>Pro chencelor</span>
                      </div>
                    </div>{" "}
                    {/* singel teachers */}
                  </div>
                  <div className="col-sm-6">
                    <div className="singel-teachers mt-30 text-center">
                      <div className="image">
                        <img src="images/teachers/t-4.jpg" alt="Teachers" />
                      </div>
                      <div className="cont">
                        <a href="teachers-singel.html">
                          <h6>Hanna bein</h6>
                        </a>
                        <span>Aerobics head</span>
                      </div>
                    </div>{" "}
                    {/* singel teachers */}
                  </div>
                </div>{" "}
                {/* row */}
              </div>{" "}
              {/* teachers */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </section>
      {/*====== TEACHERS PART ENDS ======*/}
      {/*====== PUBLICATION PART START ======*/}
      <section id="publication-part" className="pt-115 pb-120 gray-bg">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-8 col-sm-7">
              <div className="section-title pb-60">
                <h5>Publications</h5>
                <h2>From Store </h2>
              </div>{" "}
              {/* section title */}
            </div>
            <div className="col-lg-6 col-md-4 col-sm-5">
              <div className="products-btn text-right pb-60">
                <a href="#" className="main-btn">
                  All Products
                </a>
              </div>{" "}
              {/* products btn */}
            </div>
          </div>{" "}
          {/* row */}
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-8">
              <div className="singel-publication mt-30">
                <div className="image">
                  <img src="images/publication/p-1.jpg" alt="Publication" />
                  <div className="add-cart">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cont">
                  <div className="name">
                    <a href="shop-singel.html">
                      <h6>Set for life </h6>
                    </a>
                    <span>By Scott Trench</span>
                  </div>
                  <div className="button text-right">
                    <a href="#" className="main-btn">
                      Buy Now ($50)
                    </a>
                  </div>
                </div>
              </div>{" "}
              {/* singel publication */}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8">
              <div className="singel-publication mt-30">
                <div className="image">
                  <img src="images/publication/p-2.jpg" alt="Publication" />
                  <div className="add-cart">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cont">
                  <div className="name">
                    <a href="shop-singel.html">
                      <h6>A Daughters </h6>
                    </a>
                    <span>By Scott Trench</span>
                  </div>
                  <div className="button text-right">
                    <a href="#" className="main-btn">
                      Buy Now ($30)
                    </a>
                  </div>
                </div>
              </div>{" "}
              {/* singel publication */}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8">
              <div className="singel-publication mt-30">
                <div className="image">
                  <img src="images/publication/p-3.jpg" alt="Publication" />
                  <div className="add-cart">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cont">
                  <div className="name">
                    <a href="shop-singel.html">
                      <h6>A Magnet </h6>
                    </a>
                    <span>By Scott Trench</span>
                  </div>
                  <div className="button text-right">
                    <a href="#" className="main-btn">
                      Buy Now ($20)
                    </a>
                  </div>
                </div>
              </div>{" "}
              {/* singel publication */}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8">
              <div className="singel-publication mt-30">
                <div className="image">
                  <img src="images/publication/p-4.jpg" alt="Publication" />
                  <div className="add-cart">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cont">
                  <div className="name">
                    <a href="shop-singel.html">
                      <h6>Pices of light</h6>
                    </a>
                    <span>By Scott Trench</span>
                  </div>
                  <div className="button text-right">
                    <a href="#" className="main-btn">
                      Buy Now ($75)
                    </a>
                  </div>
                </div>
              </div>{" "}
              {/* singel publication */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </section>
      {/*====== PUBLICATION PART ENDS ======*/}
      {/*====== TEASTIMONIAL PART START ======*/}
      <section
        id="testimonial"
        className="bg_cover pt-115 pb-115"
        data-overlay={8}
        style={{ backgroundImage: "url(images/bg-2.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title pb-40">
                <h5>Testimonial</h5>
                <h2>What they say</h2>
              </div>{" "}
              {/* section title */}
            </div>
          </div>{" "}
          {/* row */}
          <div className="row testimonial-slied mt-40">
            <div className="col-lg-6">
              <div className="singel-testimonial">
                <div className="testimonial-thum">
                  <img src="images/testimonial/t-1.jpg" alt="Testimonial" />
                  <div className="quote">
                    <i className="fa fa-quote-right" />
                  </div>
                </div>
                <div className="testimonial-cont">
                  <p>
                    Aliquetn sollicitudirem quibibendum auci elit cons equat
                    ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id
                    elit sollicitudirem{" "}
                  </p>
                  <h6>Rubina Helen</h6>
                  <span>Bsc, Engineering</span>
                </div>
              </div>{" "}
              {/* singel testimonial */}
            </div>
            <div className="col-lg-6">
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
                    elit sollicitudirem{" "}
                  </p>
                  <h6>Rubina Helen</h6>
                  <span>Bsc, Engineering</span>
                </div>
              </div>{" "}
              {/* singel testimonial */}
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
                    elit sollicitudirem{" "}
                  </p>
                  <h6>Rubina Helen</h6>
                  <span>Bsc, Engineering</span>
                </div>
              </div>{" "}
              {/* singel testimonial */}
            </div>
          </div>{" "}
          {/* testimonial slied */}
        </div>{" "}
        {/* container */}
      </section>
      {/*====== TEASTIMONIAL PART ENDS ======*/}
      {/*====== NEWS PART START ======*/}
      <section id="news-part" className="pt-115 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title pb-50">
                <h5>Latest News</h5>
                <h2>From the news</h2>
              </div>{" "}
              {/* section title */}
            </div>
          </div>{" "}
          {/* row */}
          <div className="row">
            <div className="col-lg-6">
              <div className="singel-news mt-30">
                <div className="news-thum pb-25">
                  <img src="images/news/n-1.jpg" alt="News" />
                </div>
                <div className="news-cont">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-calendar" />2 December 2018{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>By</span> Adam linn
                      </a>
                    </li>
                  </ul>
                  <a href="blog-singel.html">
                    <h3>Tips to grade high cgpa in university life</h3>
                  </a>
                  <p>
                    Lorem ipsum gravida nibh vel velit auctor aliquetn
                    sollicitudirem quibibendum auci elit cons equat ipsutis sem
                    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                    sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus
                    a odio tincidunt .
                  </p>
                </div>
              </div>{" "}
              {/* singel news */}
            </div>
            <div className="col-lg-6">
              <div className="singel-news news-list">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="news-thum mt-30">
                      <img src="images/news/ns-1.jpg" alt="News" />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="news-cont mt-30">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-calendar" />2 December 2018{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <span>By</span> Adam linn
                          </a>
                        </li>
                      </ul>
                      <a href="blog-singel.html">
                        <h3>Intellectual communication</h3>
                      </a>
                      <p>
                        Gravida nibh vel velit auctor aliquetn sollicitudirem
                        quibibendum auci elit cons vel.
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* row */}
              </div>{" "}
              {/* singel news */}
              <div className="singel-news news-list">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="news-thum mt-30">
                      <img src="images/news/ns-2.jpg" alt="News" />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="news-cont mt-30">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-calendar" />2 December 2018{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <span>By</span> Adam linn
                          </a>
                        </li>
                      </ul>
                      <a href="blog-singel.html">
                        <h3>Study makes you perfect</h3>
                      </a>
                      <p>
                        Gravida nibh vel velit auctor aliquetn sollicitudirem
                        quibibendum auci elit cons vel.
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* row */}
              </div>{" "}
              {/* singel news */}
              <div className="singel-news news-list">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="news-thum mt-30">
                      <img src="images/news/ns-3.jpg" alt="News" />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="news-cont mt-30">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-calendar" />2 December 2018{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <span>By</span> Adam linn
                          </a>
                        </li>
                      </ul>
                      <a href="blog-singel.html">
                        <h3>Technology edcution is now....</h3>
                      </a>
                      <p>
                        Gravida nibh vel velit auctor aliquetn sollicitudirem
                        quibibendum auci elit cons vel.
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* row */}
              </div>{" "}
              {/* singel news */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </section>
      {/*====== NEWS PART ENDS ======*/}
      {/*====== PATNAR LOGO PART START ======*/}
      <div id="patnar-logo" className="pt-40 pb-80 gray-bg">
        <div className="container">
          <div className="row patnar-slied">
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src="images/patnar-logo/p-1.png" alt="Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src="images/patnar-logo/p-2.png" alt="Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src="images/patnar-logo/p-3.png" alt="Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src="images/patnar-logo/p-4.png" alt="Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src="images/patnar-logo/p-2.png" alt="Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src="images/patnar-logo/p-3.png" alt="Logo" />
              </div>
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </div>
      {/*====== PATNAR LOGO PART ENDS ======*/}
      {/*====== FOOTER PART START ======*/}
      <footer id="footer-part">
        <div className="footer-top pt-40 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-about mt-40">
                  <div className="logo">
                    <a href="#">
                      <img src="images/logo-2.png" alt="Logo" />
                    </a>
                  </div>
                  <p>
                    Gravida nibh vel velit auctor aliquetn quibibendum auci elit
                    cons equat ipsutis sem nibh id elit. Duis sed odio sit amet
                    nibh vulputate.
                  </p>
                  <ul className="mt-20">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>{" "}
                {/* footer about */}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-link mt-40">
                  <div className="footer-title pb-25">
                    <h6>Sitemap</h6>
                  </div>
                  <ul>
                    <li>
                      <a href="index-2.html">
                        <i className="fa fa-angle-right" />
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="about.html">
                        <i className="fa fa-angle-right" />
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="courses.html">
                        <i className="fa fa-angle-right" />
                        Courses
                      </a>
                    </li>
                    <li>
                      <a href="blog.html">
                        <i className="fa fa-angle-right" />
                        News
                      </a>
                    </li>
                    <li>
                      <a href="events.html">
                        <i className="fa fa-angle-right" />
                        Event
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a href="shop.html">
                        <i className="fa fa-angle-right" />
                        Shop
                      </a>
                    </li>
                    <li>
                      <a href="teachers.html">
                        <i className="fa fa-angle-right" />
                        Teachers
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        Support
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <i className="fa fa-angle-right" />
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>{" "}
                {/* footer link */}
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-link support mt-40">
                  <div className="footer-title pb-25">
                    <h6>Support</h6>
                  </div>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        FAQS
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        Policy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        Support
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" />
                        Documentation
                      </a>
                    </li>
                  </ul>
                </div>{" "}
                {/* support */}
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-address mt-40">
                  <div className="footer-title pb-25">
                    <h6>Contact Us</h6>
                  </div>
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="fa fa-home" />
                      </div>
                      <div className="cont">
                        <p>
                          143 castle road 517 district, kiyev port south Canada
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa fa-phone" />
                      </div>
                      <div className="cont">
                        <p>+3 123 456 789</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa fa-envelope-o" />
                      </div>
                      <div className="cont">
                        <p>info@yourmail.com</p>
                      </div>
                    </li>
                  </ul>
                </div>{" "}
                {/* footer address */}
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* container */}
        </div>{" "}
        {/* footer top */}
        <div className="footer-copyright pt-10 pb-25">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="copyright text-md-left text-center pt-15">
                  <p>
                    <a target="_blank" href="https://www.templateshub.net">
                      Templates Hub
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="copyright text-md-right text-center pt-15"></div>
              </div>
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* container */}
        </div>{" "}
        {/* footer copyright */}
      </footer>
    </>
  );
}
