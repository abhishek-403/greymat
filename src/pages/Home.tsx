import HeroSection from "../components/home/HeroSection";
import Services from "../components/home/Services";
import Navbar from "../components/navbar/Navbar";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="">
      <Navbar />
      <div className="w-full flex flex-col gap-8 ">
        <HeroSection />
        <Services />
      </div>
    </div>
  );
}

export function GradientText({ children }: any) {
  return (
    <span className="bg-gradient-to-r via-blue-400 from-indigo-400 to-white  text-transparent bg-clip-text">
      {children }
    </span>
  );
}
