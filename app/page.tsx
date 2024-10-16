import Common from "@/components/landing/Common";
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/home/Hero";
import Hero2 from "@/components/landing/home/Hero2";
import Innovation from "@/components/landing/home/Innovation";
import Services from "@/components/landing/home/Services";
import Services2 from "@/components/landing/home/Services2";
import Product from "@/components/landing/home/Product";
import Product2 from "@/components/landing/home/Product2";
import Product3 from "@/components/landing/home/Product3";
import Product4 from "@/components/landing/home/Product4";
import FeaturesImage from "@/public/assets/features.svg";
import Bell from "@/public/assets/bell.svg";
import Cstar from "@/public/assets/cStar.svg";
import Vise from "@/public/assets/visa.svg";
import Testimonials from "@/components/landing/Testimonial";
import Faq from "@/components/landing/Faq";
import Started from "@/components/landing/Started";
import Star from "@/public/assets/start.svg";

export default function Home() {
  return (
    <>
      <Hero />
      <Hero2 />
      <Innovation />
      <Services />
      <Services2 />
      <Product />
      <Product2 />
      <Product3 />
      <Product4 />
    </>
  );
}
