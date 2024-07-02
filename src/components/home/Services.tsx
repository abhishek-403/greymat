import Tilt from "react-parallax-tilt";
import "swiper/css";
import { BottomGlow, GradientText, SecGadientText } from "../../pages/Home";
import webimg from "../assets/webimg.png";
import webappimg from "../assets/webappimg.png";
import growbuisnessimg from "../assets/growbuisness.png";
import ecommerceimg from "../assets/ecommerceimg.png";
import enterpriseimg from "../assets/enterpriseimg.png";
import startupimg from "../assets/stratupimg.png";
import PrimaryButton from "../ui/Buttons/Buttons";
import { ArrowForwardIcon } from "@chakra-ui/icons";
type CardProps = {
  img: string;
  title: string;
  brief: string;
  i?: number;
};
type Props = {};

export default function Services({}: Props) {
  return (
    <div className="text-white  mb-10 w-full flex  items-center flex-col gap-10">
      <div className="my-6 ">
        <h1 className="">
          <GradientText>Serives we offer</GradientText>
          <BottomGlow />
          <h6>How diverse we are</h6>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3  gap-10 items-center justify-center mx-auto w-full   ">
        {services.map((ser, i) => {
          let prop = { ...ser, i };
          return (
            <div data-aos="fade-up" className="mx-auto" key={i}>
              <Card {...prop} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
function Card({ img, title, brief }: CardProps) {
  return (
    <Tilt
      glareBorderRadius="20"
      glarePosition="all"
      tiltMaxAngleY={10}
      tiltMaxAngleX={10}
      glareMaxOpacity={0.1}
      glareEnable
      style={{
        background: "linear-gradient(180deg, #242424, #121212 65.62%)",
        boxShadow:
          "0 1px 0 1px rgba(0, 0, 0, .02), 0 4px 6px rgba(0, 0, 0, .02), inset 0 0 0 6px var(--accents-1)",
      }}
      className="cursor-pointer  transition-all duration-75 flex flex-col sm:w-[400px] lg:w-[100%] min-h-[450px] rounded-xl border-2 border-[#343434] p-6 gap-4 "
    >
      <div className="flex items-center justify-center p-2 object-cover ">
        <img
          src={img}
          alt=""
          className="bg-transparent dropshadow"
          style={{
            objectFit: "contain",
            height: 220,
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <SecGadientText className="font-cataram text-center text-[24px] sm:text-2xl font-extrabold capitalize ">
          {title}
        </SecGadientText>
        <span className="text-neutral-20 font-poppins p-2 text-sm text-center ">
          {brief}
        </span>
        <PrimaryButton title={"Get Started"} icon={<ArrowForwardIcon />} />
      </div>
    </Tilt>
  );
}

const services: CardProps[] = [
  {
    img: startupimg,
    title: "Web for startup",
    brief:
      "Kick start your new venture with a stunning website and a great online presence with the best web development company in Vizag. We develop top-notch websites for startups at affordable prices and offer complete support.",
  },
  {
    img: growbuisnessimg,
    title: "Web for growing business",
    brief:
      "Growing businesses need a strong online presence to establish their brand value. With professional websites developed by our developers, businesses can offer their customers a complete view of their offerings and an amazing user experience.",
  },
  {
    img: enterpriseimg,
    title: "Web For Enterprise",
    brief:
      "We can help enterprises build a strong brand identity for their business with a stunning website that offers their users a great user experience. Our attractive and robust websites are custom designed for our clients at the best prices.",
  },
  {
    img: ecommerceimg,
    title: "E-commerce development",
    brief:
      "Success in e-commerce business demands a great user experience. The websites we develop for e-commerce businesses give not only a great look but also offer detailed categorization of products and/or services.",
  },

  {
    img: webappimg,
    title: "Web App development",
    brief:
      "Boost your business success with web applications that help establish your brand image. The web apps developed by our developers will meet all your requirements and help achieve your business goals.",
  },
  {
    img: webimg,
    title: "Website Rampage",
    brief:
      "Give your website a fresh new look that attracts more customers. We can help your website get a complete redo with a whole new set of features and colours. ",
  },
];
