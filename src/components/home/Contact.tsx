import React from "react";
import { BottomGlow, GradientText } from "../../pages/Home";
import { cn } from "../../utils/cn";
import contactimg from "../assets/contactimg.png";
import { Input, TextArea } from "../ui/input";
import { Label } from "../ui/label";
import { Element } from "react-scroll";
type Props = {};

export default function Contact({}: Props) {
  return (
    <Element
      name="contact"
      className=" w-full  flex-col gap-10 text-white px-10 mb-10 flex  items-center py-6"
    >
      <div>
        <h1 className="">
          <GradientText>Contact Us</GradientText>
          <BottomGlow />
        </h1>
        <h6 className="">React out to us</h6>
      </div>
      <div className="transition-all duration-75 flex gap-10 sm:gap-4 items-center justify-between flex-col lg:flex-row ">
        <div data-aos="fade-right" className="">
          <img
            src={contactimg}
            alt=""
            className="object-fill w-[85vw] sm:w-[50vw] "
          />
        </div>
        <div
          data-aos="fade-left"
          className="w-[90vw] sm:w-[80%] px-2 sm:px-14 "
        >
          <ContactBox />
        </div>
      </div>
    </Element>
  );
}

export function ContactBox() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="py-2 w-[100%] border border-[#343434]  mx-auto rounded-none md:rounded-2xl px-4 md:px-8 shadow-input bg-white dark:bg-black">
      <form className="my-8 flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col  md:flex-row space-y-10 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input className="" id="firstname" placeholder="Sam" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Leo" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Your Email</Label>
          <Input id="email" placeholder="youremail@gmail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="text">Message</Label>
          <TextArea
            className="h-[170px] resize-none"
            maxLength={400}
            id="text"
            placeholder=""
            rows={20}
          />
        </LabelInputContainer>

        <button
          className="mx-auto bg-gradient-to-br text-lg px-10 w-[160px]  py-2 text-center  relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800  text-white rounded-md  font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
