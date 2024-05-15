import React from "react";
import TextTransition, { presets } from "react-text-transition";
import bg from "../assets/bg2.png";
import bgnet from "../assets/bgnet.png";
import PrimaryButton from "../ui/Buttons/Buttons";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <div
      style={{
        backgroundImage: `url(${bgnet})`,
        backgroundSize: "cover",
        backgroundPosition: "center center ",
      }}
      className="relative flex justify-between px-16 gap-2 text-white  "
    >
      <div className="font-catamaran flex flex-col gap-6 w-[800px]">
        <div className="font-semibold text-5xl flex gap-3 mt-20 ">
          <span>Unlock Your Brand's </span>
        </div>
        <div className="font-semibold text-xl ">
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt error
            ullam laboriosam magni voluptate voluptatum repellendus suscipit
            nihil recusandae, eius minus, nesciunt omnis et rem iste ea
            accusantium ut quis!{" "}
          </span>
        </div>

        <div>
          <PrimaryButton title="Get started" />
        </div>
      </div>
      <div className="w-[500px]  ">
        <img src={bg} alt="bg" />
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
    <span className=" text-blue-400 bg-radiant-r  ">
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </span>
  );
};
