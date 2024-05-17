import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  ChakraProvider,
} from "@chakra-ui/react";
import { BottomGlow, GradientText } from "../../pages/Home";

type Props = {};
type AccordionCardProps = {
  title: string;
  content: string;
};
import faqimg from "../assets/faq.png"
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

export default function FAQS({}: Props) {
  return (
    <ChakraWrapper>
      <div className="flex flex-col px-20 mt-10 mb-10 w-full items-center gap-10">
        <div className="w-fit">
          <h1 className="">
            <GradientText>FAQ's</GradientText>
            <BottomGlow className="" />
          </h1>
          <h6 className="">Still having doubts</h6>
        </div>
        <div className="text-white flex   ">
          <div className=" max-h-[30rem] overflow-auto px-4 ">
            <Accordion defaultIndex={[0]} allowMultiple>
              <div className="flex flex-col gap-10">
                {accord.map((item: AccordionCardProps) => (
                  <AccordianCard {...item} />
                ))}
              </div>
            </Accordion>
          </div>
          <div>
            <img src={faqimg} alt="" className="w-[100rem]" />
          </div>
        </div>
      </div>
    </ChakraWrapper>
  );
}

function ChakraWrapper({ children }: any) {
  // @ts-ignore
  return <ChakraProvider theme="dark">{children}</ChakraProvider>;
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
        className="text-lg font-normal pr-10 pt-2 opacity-60 text-left"
      >
        {content}
      </AccordionPanel>
      <hr className="mt-4 px-4 border border-[#212121] " />
    </AccordionItem>
  );
}
