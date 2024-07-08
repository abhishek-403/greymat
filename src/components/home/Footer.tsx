import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SOCIAL_MEDIA_URLS } from "../constants";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineFolderCopy } from "react-icons/md";
import { ImBullhorn } from "react-icons/im";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="text-neutral-0 flex-wrap md:items-center justify-between bg-neutral-90 bg-opacity-70 rounded-md px-10 md:px-20 py-8 flex md:flex-row flex-col gap-16 items-start mt-32 font-poppins">
      <div className="flex  gap-4 flex-col ">
        <p className="flex gap-4 font-bold text-lg md:text-2xl items-center  ">
          <MdOutlineMail className="text-blue-400" size={32} />
          Get in touch
        </p>
        <p className="text-sm sm:text-base md:text-lg text-secondary py-4 px-6 hover:bg-primary-80 hover:text-white cursor-pointer font-bold bg-neutral-80 rounded-lg">
          graymat.digital@gmail.com
        </p>
      </div>
      <div className="flex flex-col gap-4  ">
        <div className="flex gap-4 font-bold text-lg md:text-2xl items-center  ">
          <MdOutlineFolderCopy className="text-red-400" size={32} />
          Pages
        </div>
        <div className="flex gap-6 flex-wrap items-center text-base md:text-lg  font-semibold py-4 px-6">
          <Link className="hover:text-primary-40 text-neutral-20" to={"/"}>
            Home
          </Link>
          <Link className="hover:text-primary-40 text-neutral-20" to={"/about"}>
            About
          </Link>
          <Link
            className="hover:text-primary-40 text-neutral-20"
            to={"/contact"}
          >
            Contact
          </Link>
          <Link
            className="hover:text-primary-40 text-neutral-20"
            to={"/services"}
          >
            Services
          </Link>
        </div>
      </div>
      <div className="flex gap-4  flex-col ">
        <div className="flex gap-4 font-bold text-lg md:text-2xl items-center">
          <ImBullhorn className="text-green-400" size={32} />
          Follow Us
        </div>
        <div className="flex py-4 px-6  gap-10 cursor-pointer ">
          <Link
            to={SOCIAL_MEDIA_URLS.TWITTER}
            target="blank"
            className="hover:text-primary-40 text-neutral-20"
          >
            <FaXTwitter size={32} />
          </Link>
          <Link
            className="hover:text-primary-40 text-neutral-20"
            to={SOCIAL_MEDIA_URLS.INSTAGRAM}
          >
            <FaInstagram size={34} />
          </Link>
          <Link
            className="hover:text-primary-40 text-neutral-20"
            to={SOCIAL_MEDIA_URLS.LINKEDIN}
          >
            <FaLinkedin size={34} />
          </Link>
        </div>
      </div>
    </div>
  );
}
