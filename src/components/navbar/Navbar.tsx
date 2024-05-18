import logo from "../assets/logo.png";
type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="flex flex-col sticky top-0 w-full z-[100] mt-2">
      <div className="flex bg-black justify-between  py-2 px-20 items-center  top-0 rounded-full ">
        <div>
          <img src={logo} alt="logo" className="w-[60px] " />
        </div>
        <div>
          <ul className="flex flex-row gap-10  text-lg cursor-pointer mr-10">
            <li className="">
              <TextBox>About</TextBox>
            </li>
            <li className="">
              <TextBox>Contact</TextBox>
            </li>
            <li className="">
              <TextBox>Services</TextBox>
            </li>
            <li className="">
              <TextBox>Work</TextBox>
            </li>
          </ul>
        </div>
      </div>
      {/* <BottomGlow/> */}
    </div>
  );
}

export function TextBox({ children }: any) {
  return (
    <a
      href="#"
      className="group font-medium text-white transition duration-300 hover:text-[#a6a6a6]"
    >
      {children}
      <span className="block rounded max-w-0 group-hover:max-w-full transition-all duration-200 h-[3px] bg-[#94c1fb]"></span>
    </a>
  );
}
