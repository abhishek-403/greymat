import { SparklesCore } from "../components/ui/Sparkles";
import { cn } from "./cn";


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
export const PrimaryHeading = ({
  head,
  subhead,
}: {
  head: string;
  subhead: string;
}) => {
  return (
    <div className="w-fit">
      <h1>
        <GradientText>{head}</GradientText>
        <BottomGlow />
      </h1>
      <h6>{subhead}</h6>
    </div>
  );
};

export function GradientText({ children, className }: any) {
  return (
    <span
      className={cn(
        `bg-gradient-to-b from-blue-400 via-indigo-300 to-white  text-transparent bg-clip-text`,
        className
      )}
    >
      {children}
    </span>
  );
}
export function TerGradientText({ children, className }: any) {
  return (
    <span
      className={cn(
        `bg-gradient-to-l  from-[#a185ff] to-white   text-transparent bg-clip-text`,
        className
      )}
    >
      {children}
    </span>
  );
}
export function SecGadientText({ children, className }: any) {
  return (
    <span
      className={cn(
        `bg-gradient-to-b from-purple-400  to-white   text-transparent bg-clip-text`,
        className
      )}
    >
      {children}
    </span>
  );
}
export function BottomGlow({ className }: any) {
  return (
    <div className={cn(`relative`, className)}>
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      {/* <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" /> */}
      {/* <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}
    </div>
  );
}
