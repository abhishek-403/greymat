import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/navbar/Navbar";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="">
      <Navbar />
      <div className="px-4">
        <HeroSection />
      </div>
      <div>
      </div>
    </div>
  );
}
