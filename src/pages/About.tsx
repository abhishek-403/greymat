import About from "../components/home/About";
import { SparklesCore } from "../components/ui/Sparkles";
import { BottomGlow, GradientText } from "./Home";

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <div className="flex flex-col mt-10 gap-20 ">
      <CommonHeading heading="About" />
      <div>
        <About hideHeading />
      </div>
    </div>
  );
}

export function CommonHeading({ heading }: { heading: string }) {
  return (
    <div
      data-aos="fade-down"
      className="relative text-4xl text-bold text-neutral-0 text-center"
    >
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full absolute z-[-1]"
        particleColor="#FFFFFF"
      />
      <div className="h-[5rem] md:h-[10rem] w-full  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <h1 className="">
            <GradientText className="md:text-6xl text-5xl">
              {heading}
            </GradientText>
            <BottomGlow />
          </h1>
        </p>
      </div>
    </div>
  );
}
