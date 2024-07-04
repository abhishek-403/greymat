import Tilt from "react-parallax-tilt";
import "swiper/css";
import { BottomGlow, GradientText, SecGadientText } from "../../pages/Home";
import PrimaryButton from "../ui/Buttons/Buttons";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { CardProps } from "../constants/types";
import { services } from "../constants";

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
