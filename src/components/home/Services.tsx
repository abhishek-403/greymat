import { ArrowForwardIcon } from "@chakra-ui/icons";
import Tilt from "react-parallax-tilt";
import "swiper/css";
import { cn } from "../../utils/cn";
import { PrimaryHeading, SecGadientText } from "../../utils/utils";
import {
  default_service_head,
  default_service_subhead,
} from "../constants/service-page";
import { CardProps } from "../constants/types";
import PrimaryButton from "../ui/Buttons/Buttons";

type Props = {
  cards: CardProps[];
  heading?: string;
  subheading?: string;
  className?: string;
};

export default function Services({
  cards,
  heading,
  subheading,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "text-white  mb-10 w-full flex  items-center flex-col gap-10",
        className
      )}
    >
      <div className="my-6 ">
        <PrimaryHeading
          head={heading ?? default_service_head}
          subhead={subheading ?? default_service_subhead}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3  gap-10 items-center justify-center mx-auto w-full   ">
        {cards.map((ser, i) => {
          let prop = { ...ser, i };
          return (
            <div
              className="mx-auto px-3 md:px-0"
              data-aos-duration="1000"
              data-aos-delay={i * 150 + 100}
              data-aos="fade-up"
              key={i}
            >
              <Card {...prop} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export function Card({ img, title, brief, link, btn_text }: CardProps) {
  return (
    <Tilt
      glareBorderRadius="20"
      glarePosition="all"
      tiltMaxAngleY={2}
      tiltMaxAngleX={2}
      glareMaxOpacity={0.1}
      glareEnable
      style={{
        background: "linear-gradient(180deg, #242424, #121212 65.62%)",
        boxShadow:
          "0 1px 0 1px rgba(0, 0, 0, .02), 0 4px 6px rgba(0, 0, 0, .02), inset 0 0 0 6px var(--accents-1)",
      }}
      className="cursor-pointer  transition-all duration-75 flex flex-col sm:w-[400px] lg:w-[100%] min-h-[480px] rounded-xl border-2 border-[#343434] p-6 gap-4 aos-animate h-[520px]"
    >
      <div className="flex items-center justify-center p-2 object-cover ">
        <img
          src={img}
          alt=""
          className="bg-transparent dropshadow"
          style={{
            objectFit: "contain",
            height: 200,
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <SecGadientText className="font-cataram text-center text-[24px] sm:text-2xl font-extrabold capitalize ">
          {title}
        </SecGadientText>
        <span className="text-neutral-20 font-poppins p-2 md:text-[13px] text-xs text-center ">
          {brief}
        </span>
      </div>
      <PrimaryButton
        title={btn_text ?? "Get Started"}
        link={link ?? "/services"}
        icon={<ArrowForwardIcon />}
        className="w-fit m-auto "
      />
    </Tilt>
  );
}
