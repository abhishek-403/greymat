import About from "../components/home/About";
import { CommonHeading } from "../utils/utils";

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <div className="flex flex-col mt-10 gap-20 ">
      <CommonHeading heading="About" />
      <div>
        <About hideHeading />
      </div>
    </div>
  );
}


