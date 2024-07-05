import blogImg1 from "../components/assets/blogimg1.png";
import { TerButton } from "../components/ui/Buttons/Buttons";
import { BottomGlow, GradientText, SecGadientText } from "./Home";
type Props = {};

export default function BlogPage({}: Props) {
  return (
    <div className="flex flex-col mt-10 gap-20">
      <div
        data-aos="fade-down"
        className="text-4xl text-bold text-neutral-0 text-center"
      >
        <div className="h-[5rem] md:h-[10rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            <h1 className="">
              <GradientText className="md:text-6xl text-4xl">
                Our Blogs
              </GradientText>
              <BottomGlow />
            </h1>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-8 items-center justify-center">
        <SecGadientText className="md:text-3xl text-xl font-bold">
          Browse Our Content
        </SecGadientText>
        <BottomGlow />
        {/* <Careers hideHeading /> */}
        <div className=" flex flex-col gap-4 md:gap-8 w-full items-center justify-center">
          <BlogPreviewCard />
          <BlogPreviewCard />
          <BlogPreviewCard />
          <BlogPreviewCard />
        </div>
      </div>
    </div>
  );
}

function BlogPreviewCard() {
  return (
    <div className="w-[80%] flex-col md:flex-row-reverse flex gap-4 text-neutral-0 bg-gradient-to-tr from-primary-120 via-primary-80 to-primary-40 p-4 md:p-8 rounded-lg">
      <div className="flex-1 flex items-center justify-center">
        <img src={blogImg1} alt="img" className="rounded-lg" />
      </div>
      <div className="flex-1 flex flex-col gap-2   text-left px-5 ">
        <h2 className="text-left">Is coding required skill?</h2>
        <p className="text-neutral-20">
          This blog discusses the evolution of coding and how no-code and
          automation changed the tech industry. Know why you should upskill
          constantly if being a techie is your goal.
        </p>
        <TerButton title="Read more" className="mt-auto" />
      </div>
    </div>
  );
}
