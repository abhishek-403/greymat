import blogImg1 from "../components/assets/blogimg1.png";
import { TerButton } from "../components/ui/Buttons/Buttons";
import { BottomGlow, CommonHeading, SecGadientText } from "../utils/utils";
type Props = {};

export default function BlogPage({}: Props) {
  return (
    <div className="flex flex-col mt-10 gap-20">
      
      <CommonHeading heading="Blogs" />
      <div className="flex flex-col gap-4 md:gap-8 items-center justify-center">
        <SecGadientText className="md:text-3xl text-xl font-bold">
          Browse Our Content
        </SecGadientText>
        <BottomGlow />
        {/* <Careers hideHeading /> */}
        <div className=" flex flex-col gap-6 md:gap-8 w-full items-center justify-center">
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
    <div className="w-[90%]  flex-col md:flex-row-reverse flex gap-4 text-neutral-0 bg-gradient-to-tr from-neutral-90 via-neutral-80 to-neutral-90 p-4 md:p-8 rounded-lg">
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
