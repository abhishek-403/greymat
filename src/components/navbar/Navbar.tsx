import { ReactNode, useState } from "react";
import { BottomGlow } from "../../pages/Home";
import logo from "../assets/logo-original-removebg.png";
import MobileNav from "./MobileNav";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { cn } from "../../utils/cn";
type Props = {};
export const TABS: { name: string; link: string }[] = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "Service",
    link: "services",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Contact Us",
    link: "contact",
  },
  {
    name: "FAQ",
    link: "faq",
  },
];
export default function Navbar({}: Props) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  window.onscroll = () => {
    setIsMobileNavOpen(false);
  };
  return (
    <div className="flex flex-col sticky top-0 w-full z-[999] mt-2 ">
      <div className="flex border border-[#212121] bg-black justify-between px-3 py-2 sm:px-10 items-center  top-0 rounded-full ">
        <div>
          <img
            src={logo}
            alt="logo"
            className="md:w-[70px] w-[60px] drop-shadow "
          />
        </div>
        <div>
          <ul className="hidden md:flex flex-row gap-10  text-lg cursor-pointer mr-10">
            {TABS.map((tab,i) => (
              <TextBox key={i} link={tab.link}>{tab.name}</TextBox>
            ))}
          </ul>
        </div>
        <div className="md:hidden w-[40px]">
          {isMobileNavOpen ? (
            <RiCloseLargeLine
              onClick={() => setIsMobileNavOpen(false)}
              className="text-white"
              size={26}
            />
          ) : (
            <GiHamburgerMenu
              className="text-white"
              size={26}
              onClick={() => setIsMobileNavOpen(true)}
            />
          )}
        </div>
      </div>
      <BottomGlow />
      <div className={cn("relative mx-2 z-[-1] transition")}>
        <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
      </div>
    </div>
  );
}

export function TextBox({
  children,
  link,
}: {
  children: ReactNode;
  link: string;
}) {
  return (
    <li className="w-fit">
      <Link
        duration={5}
        to={link}
        offset={-70}
        activeStyle={{ color: "#84b9ff" }}
        smooth={true}
        spy={true}
        className="group font-medium w-fit   text-white transition duration-300 hover:text-[#a6a6a6]"
      >
        {children}
        <span
          className={
            "block rounded max-w-0 group-hover:max-w-full transition-all duration-200 h-[3px] bg-[#3a8fff]"
          }
        ></span>
      </Link>
    </li>
  );
}
