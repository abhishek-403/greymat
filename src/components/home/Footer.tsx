import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="text-neutral-0 md:items-center justify-between bg-neutral-90 bg-opacity-70 rounded-md px-10 md:px-20 py-4 flex md:flex-row flex-col gap-10 items-start">
      <div className="flex gap-2 flex-col font-poppins">
        <p className="font-bold text-base md:text-lg">Get in touch</p>
        <p className="text-sm md:text-base text-neutral-20 ">sampleemail@gmail.com</p>
      </div>
      <div className="flex gap-4  flex-col ">
        <div className="font-bold text-base md:text-lg font-poppins ">Follow Us</div>
        <div className="flex  gap-10 cursor-pointer text-neutral-20">
          <FaXTwitter size={26} />
          <FaInstagram size={28} />
          <FaFacebook size={28} />
          <FaLinkedin size={28} />
        </div>
      </div>
    </div>
  );
}
