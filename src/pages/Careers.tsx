import Careers from "../components/home/Careers";
import { CommonHeading } from "../utils/utils";

type Props = {};

export default function CareersPage({}: Props) {
  return (
    <div className="flex flex-col mt-10 gap-20">
      
      <CommonHeading heading="Career" />
      <div>
        <Careers hideHeading />
      </div>
    </div>
  );
}

