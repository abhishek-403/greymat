import { cn } from "../../utils/cn";
import { PrimaryHeading, SecGadientText } from "../../utils/utils";
import img2 from "../assets/saasimg.png";
import img1 from "../assets/Productimg.png";
import img3 from "../assets/Teamimg.png";
import { Arrow } from "../home/HeroSection";
type Props = {
  heading?: string;
  subheading?: string;
  className?: string;
};
export default function ExtendedServices({ className }: Props) {
  return (
    <div
      className={cn(
        "text-white  mb-10 w-full flex  items-center flex-col gap-10 scrollbar-hide ",
        className
      )}
    >
      <div className="my-6 ">
        <PrimaryHeading head={"How we work"} subhead={"What we bring"} />
      </div>
      <div className="w-full relative">
        <ParallaxSections />
      </div>
    </div>
  );
}

const sections = [
  {
    image: img1,
    head: "Design a new SaaS",
    subHead:
      "You get a dedicated SaaS designer through a monthly subscription.",
    text: [
      "Design an MVP based on your SaaS idea",
      "Transform a service business into SaaS",
      "Design SaaS for your internal needs",
      "Quickly test the business idea with potential customers",
    ],
  },
  {
    image: img2,
    head: "Redesign your product",

    subHead:
      "You get a dedicated SaaS designer through a monthly subscription.",
    text: [
      "Design an MVP based on your SaaS idea",
      "Transform a service business into SaaS",
      "Design SaaS for your internal needs",
      "Quickly test the business idea with potential customers",
    ],
  },
  {
    image: img3,
    head: "Extend your design team",
    subHead:
      "You get a dedicated SaaS designer through a monthly subscription.",
    text: [
      "Design an MVP based on your SaaS idea",
      "Transform a service business into SaaS",
      "Design SaaS for your internal needs",
      "Quickly test the business idea with potential customers",
    ],
  },
];

const ParallaxSections: React.FC = () => {
  return (
    <div className="relative w-full  flex flex-col gap-10">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`relative w-full h-full flex  flex-col p-6 justify-between gap-10 bg-neutral-95 border-2 border-neutral-90 rounded-lg ${
            index % 2 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div
            className="flex  items-center justify-center px-10"
            data-aos="fade-left"
          >
            <img
              src={section.image}
              alt={`Section ${index + 1}`}
              className="w-[360px] md:w-[600px] "
            />
          </div>
          <div
            data-aos="fade-right"
            className=" relative h-full flex items-center justify-around gap-4 sm:gap-6 py-8  flex-col text-left "
          >
            <p
              className={`absolute top-0 font-bold text-primary-40 text-lg md:text-4xl ${
                index % 2 ? "left-6" : "right-6"
              }  `}
            >
              #{index + 1}
            </p>
            <SecGadientText className="mt-2 sm:mt-6 font-poppins text-2xl md:text-3xl xl:text-4xl font-bold text-center">
              {section.head}
            </SecGadientText>

            <div className="xl:px-20 px-4 flex flex-col gap-4">
              <h2 className="text-left font-semibold text-base md:text-lg xl:text-xl ">
                {section.subHead}
              </h2>
              <div className=" text-neutral-20 text-sm md:text-base lg:text-lg font-semibold">
                Perfect if you need to:
              </div>
              <div className=" flex flex-col gap-3 text-neutral-30 font-semibold ">
                {section.text.map((text, i) => (
                  <p key={i} className="flex gap-2 items-center ">
                    <span className="text-blue-400 font-extrabold ">
                      <Arrow />
                    </span>
                    <div className="text-sm md:text-base xl:text-lg opacity-80 font-bold">
                      {text}
                    </div>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
