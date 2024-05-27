import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ChakraProvider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BottomGlow, GradientText } from "../../pages/Home";
import faqimg from "../assets/faq.png";

type Props = {};
type AccordionCardProps = {
  title: string;
  content: string;
};

export default function FAQS({}: Props) {
 
  return (
    <ChakraWrapper>
      <div className="flex flex-col  sm:px-3 lg:px-36 px-3  mb-10 w-full items-center gap-10">
        <div className="w-fit">
          <h1 className="">
            <GradientText>FAQ's</GradientText>
            <BottomGlow className="" />
          </h1>
          <h6 className="">Still having doubts</h6>
        </div>
        <div className="relative text-white flex gap-10 sm:gap-10 lg:gap-2 lg:flex-row  flex-col-reverse  ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -200 }}
            className=" max-h-[40rem] sm:max-h-[30rem] overflow-auto px-4 "
          >
            <Accordion defaultIndex={[0]} allowMultiple>
              <div className="flex flex-col gap-10 min-w-[41vw]">
                {accord.map((item: AccordionCardProps, i) => (
                  <AccordianCard {...item} key={i} />
                ))}
              </div>
            </Accordion>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 200 }}
            className="flex items-center justify-center"
          >
            <img
              src={faqimg}
              alt=""
              className="lg:max-w-[40rem] max-w-[300px] sm:max-w-[35rem] "
            />
          </motion.div>
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
