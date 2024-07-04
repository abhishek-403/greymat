import { cn } from "../../utils/cn";
import { TABS } from "../constants";
import { TabType } from "../constants/types";
import { TextBox } from "./Navbar";

export default function MobileNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div>
      <ul
        className={cn(
          "bg-[#121212] w-full px-10 py-4 rounded-lg border-2 border-neutral-80 flex-col gap-4 z-10 flex absolute text-lg cursor-pointer mr-10 opacity-0 top-[-100px] pt-10 items-center text-center",
          isOpen && `opacity-100 mobileNavVisible`
        )}
      >
        {TABS.map((tab: TabType, i:number) => (
          <div
            key={i}
            className="border-b border-neutral-80 "
            onClick={() => setIsOpen(false)}
          >
            <TextBox link={tab.link}>{tab.name}</TextBox>
          </div>
        ))}
      </ul>
    </div>
  );
}
