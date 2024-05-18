import React from "react";
import TextTransition, { presets } from "react-text-transition";
import bg from "../assets/bg2.png";
import bgnet from "../assets/bgnet.png";
import PrimaryButton from "../ui/Buttons/Buttons";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import {
  BottomGlow,
  GradientText,
  SecGadientText,
  TerGradientText,
} from "../../pages/Home";
import { motion } from "framer-motion";
type Props = {};
let words =
  "Partner with a leading digital marketing agency to increase brand awareness, reach your target audience & grow your business online.";

export default function HeroSection({}: Props) {
  return (
    <div
      style={
        {
          // backgroundImage: `url(${bgnet})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center center ",
        }
      }
      className="relative  flex justify-between px-24 gap-2 text-white z-100 mt-[50px]  w-full"
    >
      <div className="font-catamaran flex flex-col gap-8 w-[800px]  text-left">
        <div className="font-bold text-5xl flex gap-3 mt-20 transition-all duration-75 ">
          <span className="">Unlock Your Brand's </span>
          <TextComponent />
        </div>
        <div>
          <p className="font-poppins text-lg w-[90%]">
            Partner with a leading digital marketing agency to increase brand
            awareness, reach your target audience & grow your business online.
          </p>
        </div>
        <div className="ml-4">
          <ul className="flex flex-col gap-3 font-cataram font-semibold">
            <li className="flex gap-2 items-center  ">
              <span className="text-blue-400 font-extrabold ">
                <Arrow />
              </span>
              <TerGradientText className="text-2xl opacity-80 font-extrabold">
                Optimize Targeted Audiences
                <BottomGlow />
              </TerGradientText>
            </li>
            <li className="flex gap-2 items-center  ">
              <span className="text-blue-400 font-extrabold ">
                <Arrow />
              </span>
              <TerGradientText className="text-2xl opacity-80 font-extrabold">
                Generate Qualified Leads
                <BottomGlow />
              </TerGradientText>
            </li>
            <li className="flex gap-2 items-center  ">
              <span className="text-blue-400 font-extrabold ">
                <Arrow />
              </span>
              <TerGradientText className="text-2xl opacity-80 font-extrabold">
                Boost Brand Authority
                <BottomGlow />
              </TerGradientText>
            </li>
          </ul>
        </div>

        <div className="ml-4 mt-6">
          <PrimaryButton title="Get started" />
        </div>
      </div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 200 }} className="w-[550px]  ">
        <img src={bg} alt="bg" className="object-cover" />
      </motion.div>
    </div>
  );
}

const TEXTS = ["Potential", "Connect", "Engage", "Excel"];

const TextComponent = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <TextTransition springConfig={presets.wobbly} className="">
      <GradientText>{TEXTS[index % TEXTS.length]}</GradientText>
    </TextTransition>
  );
};

function Arrow() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

// <div
//   style={{
//     backgroundImage: `url(${bgnet})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center center ",
//   }}
//   className="relative flex justify-between px-16 gap-2 text-white  "
// >
//   <div className="font-catamaran flex flex-col gap-6 w-[800px]">
//     <div className="font-semibold text-5xl flex gap-3 mt-20 ">
//       <span>Unlock Your Brand's </span>
//     </div>
//     <div className="font-semibold text-xl ">
//       <span>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt error
//         ullam laboriosam magni voluptate voluptatum repellendus suscipit
//         nihil recusandae, eius minus, nesciunt omnis et rem iste ea
//         accusantium ut quis!{" "}
//       </span>
//     </div>

//     <div>
//       <PrimaryButton title="Get started" />
//     </div>
//   </div>
//   <div className="w-[500px]  ">
//     <img src={bg} alt="bg" />
//   </div>
// </div>
