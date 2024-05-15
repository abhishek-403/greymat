import HeroSection from "../components/home/HeroSection";
import Services from "../components/home/Services";
import Navbar from "../components/navbar/Navbar";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="">
      <Navbar />
      <div className="w-full flex flex-col gap-20 ">
        <HeroSection />
        <Services/>
      </div>
    </div>
  );
}
