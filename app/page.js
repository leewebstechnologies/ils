import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Category from "./components/category/Category";
import Ils from "./ils/page";
import Hero from "./components/hero/Hero";
import Ilsteam from "./components/ilsteam/Ilsteam";
import Affiliates from "./components/affiliates/Affiliates";
import Testimonial from "./components/testimonial/Testimonial";
import Extra from "./components/extra/Extra";
import Otherservices from "./components/otherservices/Otherservices";
import FloatingButton from "./components/floatingButton/FloatingButton";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <Extra />
      <Otherservices />
      <Ilsteam />
      <Testimonial />
      <FloatingButton />
    </>
  );
}
