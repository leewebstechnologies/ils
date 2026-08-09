"use client";

import Image from "next/image";
import "./curricular.css";
import FloatingButton from "../components/floatingButton/FloatingButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Curricular = () => {
  return (
    <>
      <main className="curricular">
        <section className="hero">
          <Image
            src="/images/extracurricular/banner.jpeg"
            alt="Extra-Curricular Activities"
            fill
            priority
            className="heroImage"
            
          />
          <div className="heroOverlay">
            <h1 style={{ color: "#fff" }}>Extra-Curricular Activities</h1>
            <span className="underline"></span>
          </div>
        </section>
        <section className="content">
          <h2 className="introText">
            Our enrichment programme is designed to identify and polish the
            “hidden diamonds” of talent within every pupil. We offer a suite of
            prestigious activities that cultivate both the body and the mind,
            ensuring our scholars are well-rounded, disciplined, and culturally
            aware.
          </h2>
          <div className="activityGrid">
            <div className="activityCard">
              <h3>Music</h3>
              <p>
                We believe every child should speak the universal language of
                music. Pupils specialise in instruments such as piano, violin or
                woodwind under expert instructors, developing technical mastery
                and emotive expression.
              </p>
            </div>

            <div className="activityCard">
              <h3>Chess</h3>
              <p>
                Our Chess programme sharpens strategic thinking, concentration,
                patience and tactical brilliance — skills that extend far beyond
                the board.
              </p>
            </div>

            <div className="activityCard">
              <h3>Ballet & Contemporary Dance</h3>
              <p>
                From the disciplined poise of Classical Ballet to the expressive
                energy of Contemporary Dance, pupils develop coordination,
                confidence and artistic expression.
              </p>
            </div>

            <div className="activityCard">
              <h3>Taekwondo</h3>
              <p>
                Through professional Taekwondo training, we instil respect,
                perseverance and physical mastery — promoting strength under
                control.
              </p>
            </div>

            <div className="activityCard">
              <h3>Coding & Robotics</h3>
              <p>
                In an increasingly digital world, pupils become creators — not
                just consumers — learning coding logic, robotics and engineering
                principles that shape the future.
              </p>
            </div>
          </div>
          <div className="galleryBlock">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="gallerySwiper"
            >
              <SwiperSlide>
                <div className="galleryImgWrapper">
                  <Image
                    src="/images/extracurricular/image1.jpeg"
                    alt="School Photo Gallery 1"
                    width={1200}
                    height={450}
                    className="galleryImg"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="galleryImgWrapper">
                  <Image
                    src="/images/extracurricular/image2.jpeg"
                    alt="School Photo Gallery 2"
                    width={1200}
                    height={450}
                    className="galleryImg"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="galleryImgWrapper">
                  <Image
                    src="/images/extracurricular/image3.jpeg"
                    alt="School Photo Gallery 3"
                    width={1200}
                    height={450}
                    className="galleryImg"
                  />
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="galleryText">
              <h3>Photo Gallery</h3>
              <h4>Documenting the Spirit of Achievement</h4>
              <p style={{ fontWeight: "bold" }}>
                Witness the vibrancy of our classrooms and the focus of our
                scholars in action.
              </p>
            </div>
          </div>
        </section>
        <FloatingButton />
      </main>
    </>
  );
};
export default Curricular;
