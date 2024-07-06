import { ReactNode, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { BottomGlow } from "../../pages/Home";
import { cn } from "../../utils/cn";
import logo from "../assets/logo-original-removebg.png";
import { NESTED_TABS, TABS } from "../constants";
import MobileNav from "./MobileNav";

import { Link, useLocation } from "react-router-dom";
type Props = {};

export default function Navbar({}: Props) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  window.onscroll = () => {
    setIsMobileNavOpen(false);
    setOpen(false);
  };
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(false);
  }
  return (
    <div className="flex flex-col  ">
      <div className="flex border border-[#212121] bg-black justify-between px-3 py-2 sm:px-10 items-center  top-0 rounded-full ">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="md:h-[70px] h-[60px] drop-shadow "
          />
        </Link>
        <div className="text-white hidden md:flex ">
          <ul className="flex flex-row gap-10  text-lg cursor-pointer mr-10 ">
            {TABS.map((tab, i) => (
              <TextBox key={i} link={tab.link}>
                {tab.name}
              </TextBox>
            ))}
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger
                className=" font-medium w-fit   text-white text-lg flex gap-2 !border-none items-center  hover:text-[#a6a6a6]"
              >
                Pages{" "}
                {open ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
              </DropdownMenuTrigger>
              <DropdownMenuContent
                onClick={handleClick}
                className="z-[120] bg-neutral-100 p-3 gap-2 flex flex-col border-neutral-80 border-2"
              >
                {NESTED_TABS.map((tab, i) => (
                  <TextBox key={i} link={tab.link}>
                    {tab.name}
                  </TextBox>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </ul>
          <div className="text-neutral-0 dark cursor-pointer text-xl "></div>
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
  const location = useLocation();
  const isActive = location.pathname === link;
  return (
    <li className="w-fit list-none ">
      <Link
        to={link}
        className="group font-medium w-fit   text-white transition duration-300 hover:text-[#a6a6a6]"
      >
        {children}
        {isActive && (
          <span
            className={
              "block rounded max-w-full group-hover:max-w-full transition-all duration-200 h-[3px] bg-[#3a8fff] "
            }
          ></span>
        )}
      </Link>
    </li>
  );
}
