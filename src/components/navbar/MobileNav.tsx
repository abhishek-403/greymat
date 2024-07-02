import { cn } from "../../utils/cn";
import { TABS, TextBox } from "./Navbar";

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
          "bg-black w-full px-10 py-4 rounded-lg border border-[#212121] flex-col gap-4 z-10 flex absolute text-lg cursor-pointer mr-10 opacity-0 top-[-100px]",
          isOpen && `opacity-100 mobileNavVisible`
        )}
      >
        {TABS.map((tab) => (
          <div onClick={()=>setIsOpen(false)}>
            <TextBox link={tab.link}>{tab.name}</TextBox>
          </div>
        ))}
      </ul>
    </div>
  );
}
