import { BLOG_CARDS } from "../components/constants/blog-page";
import { BlogCard } from "../components/constants/types";
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
        <div className=" flex flex-col gap-8 md:gap-12 w-full items-center justify-center">
          {BLOG_CARDS.map((blog, i) => (
            <BlogPreviewCard key={i} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogPreviewCard({
  title,
  description,
  date,
  image,
  category,
}: BlogCard) {
  return (
    <div
      style={{
        background: "linear-gradient(270deg, #1A1A1A, #212121 65%)",
        boxShadow:
          "0 1px 0 1px rgba(0, 0, 0, .02), 0 2px 3px rgba(0, 0, 0, .02), inset 0 0 0 4px var(--accents-1)",
      }}
      className="w-[90%]  flex-col md:flex-row-reverse flex gap-8 md:gap-6 p-4 md:p-[60px] rounded-lg items-center"
    >
      <div className="flex-1 flex items-center justify-center">
        <img src={image} alt="img" className="rounded-lg w-[480px]" />
      </div>
      <div className="flex-1 flex flex-col gap-4  justify-center text-left px-4">
        <div className="flex justify-between mb-2 items-center">
          <p className="py-2 px-6 rounded-full w-fit transition-all text-white  border border-neutral-40">
            {category}
          </p>
          <p className="text-neutral-20 text-xs sm:text-sm ">{date}</p>
        </div>
        <h2 className="text-left text-neutral-0">{title}</h2>
        <p className="text-neutral-20">{description}</p>
        {/* <TerButton title="Read more" className=" mt-12 bg-neutral-100" />
         */}
        <p className="py-3 px-6 rounded-lg w-fit transition-all text-white bg-black hover:bg-neutral-0 hover:text-neutral-100 border border-neutral-40 mt-6 md:mt-12 cursor-pointer">
          Read More
        </p>
      </div>
    </div>
  );
}
