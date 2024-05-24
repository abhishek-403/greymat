import { motion } from "framer-motion";
import "swiper/css";
import { BottomGlow, GradientText, SecGadientText } from "../../pages/Home";
import contentimg from "../assets/contentmarketing.png";
import influimg from "../assets/influencerimg.png";
import seoimg from "../assets/seoimg2.png";
import socialimg from "../assets/socialimg.png";
import webimg from "../assets/webimg.png";
type CardProps = {
  img: string;
  title: string;
  brief: string;
  i?: number;
};
type Props = {};

export default function Services({}: Props) {
  return (
    <div className="text-white px-2 lg:px-20 mb-10 w-full flex  items-center flex-col gap-10">
      <div className="my-6 ">
        <h1 className="">
          <GradientText>Serives we offer</GradientText>
          <BottomGlow />
          <h6>How diverse we are</h6>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-10 items-center justify-center mx-auto w-full   ">
        {services.map((ser, i) => {
          let prop = { ...ser, i };
          return (
            <div className="mx-auto" key={i}>
              <Card {...prop} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
function Card({ img, title, brief, i }: CardProps) {
  let pos = 0;
  pos = (i! ) % 3;
  console.log("sd", i);

  return (
    <motion.div
      style={{
        background: "linear-gradient(180deg, #242424, #121212 65.62%)",
        boxShadow:
          "0 1px 0 1px rgba(0, 0, 0, .02), 0 4px 6px rgba(0, 0, 0, .02), inset 0 0 0 6px var(--accents-1)",
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      initial={{
        opacity: 0,
        x: pos == 0 ? -100 : pos == 1 ? 0 : 100,
        y: pos == 0 ? 0 : pos == 1 ? 100 : 0,
      }}
      className="transition-all duration-75 flex flex-col w-[90vw] sm:w-[400px] min-h-[450px] border-2 border-[#343434] p-6 gap-4"
    >
      <div className="flex items-center justify-center p-2 object-cover">
        <img
          src={img}
          alt=""
          className="bg-transparent "
          style={{
            objectFit: "contain",
            height: 180,
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <SecGadientText className="font-cataram text-center text-[24px] sm:text-3xl font-extrabold capitalize ">
          {title}
        </SecGadientText>
        <span className="text-[var(--accents-5)] font-poppins p-2 text-sm">
          {brief}
        </span>
      </div>
    </motion.div>
  );
}

const services: CardProps[] = [
  {
    img: seoimg,
    title: "SEO",
    brief:
      "SEO involves strategies to improve a website's visibility in search results pages to attract more traffic. It includes optimizing website content, meta tags, etc. to rank higher for search queries.",
  },
  {
    img: socialimg,
    title: "Social Media Marketing",
    brief:
      "Leveraging social platforms to engage audiences, build brand awareness, and drive traffic and sales through strategic content creation, community management, and targeted advertising.",
  },
  {
    img: contentimg,
    title: "Content Marketing",
    brief:
      "Strategically creating and distributing valuable, relevant content to attract and retain a specific audience, fostering brand loyalty, and driving profitable customer action through various channels and formats.",
  },
  {
    img: webimg,
    title: "Website Design",
    brief:
      "Creating visually appealing, user-friendly websites to enhance brand presence and user experience, optimizing for various devices and browsers to ensure seamless accessibility and engagement.",
  },

  {
    img: influimg,
    title: "Influencer Marketing",
    brief:
      "Partnering with influential individuals to promote products or services, leveraging their credibility and reach to connect with target audiences authentically and drive conversions.",
  },
  {
    img: seoimg,
    title: "SEO",
    brief:
      "SEO involves strategies to improve a website's visibility in search results pages to attract more traffic. It includes optimizing website content, meta tags, etc. to rank higher for search queries.",
  },
];
