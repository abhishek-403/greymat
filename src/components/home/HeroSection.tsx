import React from "react";
import TextTransition, { presets } from "react-text-transition";
import bg from "../assets/bg2.png";
import bgnet from "../assets/bgnet.png";
import PrimaryButton from "../ui/Buttons/Buttons";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { GradientText } from "../../pages/Home";

type Props = {};
let words =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunterror ullam laboriosam magni voluptate voluptatum repellendus suscipit nihil recusandae, eius minus, nesciunt omnis et rem iste ea accusantium ut qui";

export default function HeroSection({}: Props) {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${bgnet})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center center ",
      // }}

      className="relative flex justify-between px-24 gap-2 text-white z-100 mt-[50px]  w-full"
    >
      <div className="font-catamaran flex flex-col gap-2 w-[800px]">
        <div className="font-bold text-5xl flex gap-3 mt-20 ">
          <span className="">Unlock Your Brand's </span>
          <TextComponent />
        </div>
        <div className="font-semibold font-cataram text-xl opacity-70 ">
          <span>
            <TextGenerateEffect words={words} />
          </span>
        </div>

        <div className=" mt-8">
          <PrimaryButton title="Get started" />
        </div>
      </div>
      <div className="w-[500px]  ">
        <img src={bg} alt="bg" className="object-cover" />
      </div>
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
