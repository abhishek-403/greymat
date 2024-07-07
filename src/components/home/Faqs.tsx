import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { PrimaryHeading } from "../../utils/utils";
import faqimg from "../assets/faq.png";

type Props = {};
type AccordionCardProps = {
  title: string;
  content: string;
};

export default function FAQS({}: Props) {
  return (
    <div className="flex flex-col mb-10 w-full items-center gap-10 py-6">
      <PrimaryHeading head="FAQ's" subhead="Still having doubts" />
      <div
        data-aos="fade-right"
        className="relative w-full text-white  item-center flex gap-10 sm:gap-10 lg:gap-2 lg:flex-row  flex-col-reverse  "
      >
        <div className=" max-h-[40rem] w-[100%] sm:max-h-[30rem] overflow-auto overflow-x-hidden px-4 ">
          <Accordion
            defaultIndex={[0]}
            allowMultiple
            className="flex flex-col gap-10 px-3  sm:min-w-[40vw]"
          >
            {accord.map((item: AccordionCardProps, i) => (
              <AccordianCard {...item} key={i} />
            ))}
          </Accordion>
        </div>
        <div data-aos="fade-left" className="flex items-center justify-center">
          <img
            src={faqimg}
            alt=""
            className="lg:max-w-[40vw] max-w-[300px] sm:max-w-[50vw] "
          />
        </div>
      </div>
    </div>
  );
}
function AccordianCard({ title, content }: AccordionCardProps) {
  return (
    <AccordionItem>
      <h2 className="text-xl font-poppins font-bold ">
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel
        pb={4}
        className="text-base font-normal pr-10 pt-2 opacity-60 text-left"
      >
        {content}
      </AccordionPanel>
      <hr className="mt-4 px-4 border border-[#212121] " />
    </AccordionItem>
  );
}

const accord: AccordionCardProps[] = [
  {
    title: "What is Greymat",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "How do we operate",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "What are the benefits of Greymat",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "What is Greymat",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "What is Greymat",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
