import { cn } from "../../utils/cn";
import { NESTED_TABS, TABS } from "../constants";
import { TabType } from "../constants/types";
import { TextBox } from "./Navbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
export default function MobileNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function handleClick() {
    setIsOpen(false);
    setOpen(false);
  }

  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <ul
        className={cn(
          "bg-neutral-100 w-full px-10 py-4 rounded-lg border-2 border-neutral-80 flex-col gap-4 z-10 hidden absolute text-lg cursor-pointer mr-10 opacity-0 top-[-100px] pt-10 items-center text-center",
          isOpen && `mobileNavVisible`
        )}
      >
        {TABS.map((tab: TabType, i: number) => (
          <div
            key={i}
            className="border-b border-neutral-80 "
            onClick={() => setIsOpen(false)}
          >
            <TextBox link={tab.link}>{tab.name}</TextBox>
          </div>
        ))}
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger className=" font-medium w-fit   text-white text-lg flex gap-2 border-none items-center  hover:text-[#a6a6a6]">
            Pages <FaChevronDown size={14} />
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
    </div>
  );
}
