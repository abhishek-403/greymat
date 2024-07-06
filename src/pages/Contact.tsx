import Contact from "../components/home/Contact";
import { CommonHeading } from "./About";

type Props = {};

function ContactPage({}: Props) {
  return (
    <div className="flex flex-col mt-10 gap-20">
      <CommonHeading heading="Contact" />
      <div>
        <Contact hideHeading />
      </div>
    </div>
  );
}

export default ContactPage;
