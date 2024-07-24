import ExtendedServices from "../components/case-study/ExtendedServices";
import { servicescard } from "../components/constants";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import FAQS from "../components/home/Faqs";
import HeroSection from "../components/home/HeroSection";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="w-full h-full flex flex-col  relative ">
      <HeroSection />
      <div className=" h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="gap-6 flex flex-col relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 overflow-hidden ">
          <Services cards={servicescard} />
          <ExtendedServices/>
          <About />
          <Testimonials />
          <FAQS />
          <Contact />
        </div>
      </div>
    </div>
  );
}
