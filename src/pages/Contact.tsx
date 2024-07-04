import Contact from "../components/home/Contact";
import { BottomGlow, GradientText } from "./Home";

type Props = {};

function ContactPage({}: Props) {
  return (
    <div className="flex flex-col mt-10 gap-20">
      <div data-aos="fade-down" className="text-4xl text-bold text-neutral-0 text-center">
        <div className="h-[5rem] md:h-[10rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            <h1 className="">
              <GradientText className="md:text-6xl text-4xl">Lets Talk</GradientText>
              <BottomGlow/>
            </h1>
          </p>
        </div>
      </div>
      <div>
        <Contact hideHeading />
      </div>
    </div>
  );
}

export default ContactPage;
