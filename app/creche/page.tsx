"use client";
import "./creche.css";
import Image from "next/image";
import FloatingButton from "../components/floatingButton/FloatingButton";
import { galleryImages } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Creche = () => {
  return (
    <>
      <section className="hero">
        <Image
          src="/images/creche/creche.jpeg"
          alt="Creche Banner"
          fill
          priority
          className="heroImage"
        />
        <div className="heroOverlay">
          <h1>Creche</h1>
          <span className="underline"></span>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="creche-section intro">
        <div className="container">
          <div className="text-center">
            <h2>A SANCTUARY OF EARLY WONDER</h2>
            <p style={{ fontWeight: "bold" }}>
              A nurturing environment where curiosity is celebrated and the
              foundations of excellence are gently formed.
            </p>
          </div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="creche-section light-bg">
        <div className="container grid">
          <div>
            <h3>Getting Started</h3>
            <h4>The First Step in a Lifetime of Excellence.</h4>
            <p style={{ fontWeight: "bold" }}>
              We understand that entrusting your child to us is a gesture of
              immense trust. Our admissions process is designed to be as
              seamless and supportive as the care we provide. From your initial
              private tour to the gentle settling-in period, every family
              experiences a true sense of belonging within our elite community.
            </p>
          </div>
          <div className="image-box">
            <Image
              src="/images/creche/1.jpg"
              alt="Creche Admission"
              width={600}
              height={450}
              className="admissionImg"
            />
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="creche-section">
        <div className="container grid reverse">
          <div>
            <h3>Our Curriculum</h3>
            <h4>Nurturing Genius Through Play and Discovery.</h4>
            <p style={{ fontWeight: "bold" }}>
              Our bespoke Early Years framework focuses on sensory-rich
              experiences that ignite cognitive development. By blending
              traditional British pedagogical standards with modern
              neuro-developmental research, we ensure every milestone is met
              with joy and sophistication.
            </p>
          </div>

          <div className="image-box">
            <Image
              src="/images/creche/2.jpg"
              alt="Creche Curriculum"
              width={600}
              height={450}
              className="admissionImg"
            />
          </div>
        </div>
      </section>

      {/* WEEKLY PROGRAMME */}
      <section className="creche-section light-bg">
        <div className="container">
          <h3 className="text-center">Weekly Grooming and Events</h3>
          <p className="text-center subtitle" style={{ fontWeight: "bold" }}>
            The Art of Early Refinement and Discovery.
          </p>

          <ul className="features">
            <li>
              <strong>Linguistic Foundations:</strong> Classical rhymes and
              immersive storytelling.
            </li>
            <li>
              <strong>The Practical Life Atelier:</strong> Montessori-inspired
              independence building.
            </li>
            <li>
              <strong>Personal Sovereignty:</strong> Gentle potty training and
              hygiene routines.
            </li>
            <li>
              <strong>Physical Mastery:</strong> Fine and gross motor
              development activities.
            </li>
            <li>
              <strong>Social Harmony:</strong> Etiquette, respect, and
              cooperation.
            </li>
          </ul>
        </div>
      </section>

      {/* LEARNING & DEVELOPMENT */}
      <section className="creche-section">
        <div className="container text-center">
          <h3>Learning and Development</h3>
          <p style={{ fontWeight: "bold" }}>
            Our dedicated caregivers provide expert guidance to help each child
            reach developmental milestones through a nurturing partnership that
            celebrates individuality and potential.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE OUR CRECHE */}
      <section className="creche-section light-bg">
        <div className="container">
          <div className="text-center">
            <h3>Why Choose Our Crèche</h3>
            <p className="subtitle" style={{ fontWeight: "bold" }}>
              At Imperial Legacy School, we provide a nurturing, safe, and
              stimulating environment where your child’s early development is
              our highest priority. Our crèche is thoughtfully designed to
              support the physical, emotional, and cognitive growth of every
              child in our care.
            </p>
          </div>

          <div className="grid">
            <div>
              <h4>Qualified & Passionate Caregivers</h4>
              <p style={{ fontWeight: "bold" }}>
                We understand that infants and toddlers are at a delicate and
                critical stage of development. That is why our crèche is staffed
                with professionally trained and experienced caregivers who are
                not only skilled but also genuinely passionate about working
                with young children. Each member of our team is carefully
                selected for their nurturing nature, patience, and dedication to
                providing exceptional care.
              </p>
            </div>

            <div>
              <h4>
                Spacious, Well-Lit Environment with Individualized Attention
              </h4>
              <p style={{ fontWeight: "bold" }}>
                Our crèche facilities are designed to meet the highest
                standards, offering spacious, well-ventilated, and well-lit
                rooms that promote comfort and wellbeing. To ensure every child
                receives the attention they deserve, we maintain a low
                caregiver-to-child ratio of 1:5. This allows our caregivers to
                provide personalized care, including timely diaper changes,
                proper nutrition tailored to each child’s needs, and the
                encouragement of positive habits through structured daily
                routines such as potty training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WEEKLY PROGRAMME */}

      {/* GALLERY */}
      <section className="creche-section">
        <div className="container">
          <h3 className="text-center">A Glimpse into a World of Care</h3>
          <p className="text-center subtitle" style={{ fontWeight: "bold" }}>
            Explore the serene, light-filled spaces where our youngest scholars
            begin.
          </p>
          <Swiper
            className="gallerySwiper"
            modules={[Navigation, Pagination, Autoplay]}
            loop
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={image.src}>
                <div className="galleryCard">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    sizes="(max-width:640px) 100vw,
                 (max-width:1024px) 50vw,
                 33vw"
                    className="galleryImg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* REGISTRATION */}
      <section className="creche-section light-bg">
        <div className="container">
          <h3>Registration Process</h3>

          <div className="steps">
            <div className="step">
              <h4>Step 1: The Application</h4>
              <p style={{ fontWeight: "bold" }}>
                Obtain the official application form (₦10,000) from the school
                administrative office.
              </p>
            </div>

            <div className="step">
              <h4>Step 2: Documentation</h4>
              <ul style={{ fontWeight: "bold" }}>
                <li>Birth certificate (photocopy)</li>
                <li>Updated immunisation card</li>
                <li>Two passport photographs of the child</li>
                <li>One passport photograph of each parent/guardian</li>
                <li>Medical records</li>
              </ul>
            </div>

            <div className="step">
              <h4>Step 3: Securing the Placement</h4>
              <p style={{ fontWeight: "bold" }}>
                Payment of the monthly fee secures your child’s place at
                Imperial Legacy School Crèche.
              </p>
            </div>
          </div>
        </div>
        <FloatingButton />
      </section>
    </>
  );
};

export default Creche;
