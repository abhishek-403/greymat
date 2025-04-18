import { Link } from "react-router-dom";
import "./Button.css";
import { cn } from "../../../utils/cn";
type Props = {
  title?: string;
  icon?: React.ReactNode;
  link?: string;
  className?: string;
};

export default function PrimaryButton({ title, icon, link,className }: Props) {
  return (
    <Link
      to={link ?? "/"}
      className={cn("relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",className)}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-4 text-lg font-semibold  text-white backdrop-blur-3xl gap-2">
        <div>{title}</div>
        <div>{icon}</div>
      </span>
    </Link>
  );
}
export function PrimaryButtonLight({ title, icon, link }: Props) {
  return (
    <Link
      to={link ?? "/"}
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#f93BB2_50%,#f2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-0 px-10 py-4 text-lg font-semibold  text-black backdrop-blur-3xl gap-2 hover:bg-neutral-100 hover:text-white transition-all duration-800 ">
        <div>{title}</div>
        <div>{icon}</div>
      </span>
    </Link>
  );
}

export function TerButton({ title, link, className }: Props) {
  return (
    <section className={"buttons"}>
      <div className={cn("container2", className)}>
        <Link to={link ?? "/"} className="btn btn-5">
          {title}
        </Link>
      </div>
    </section>
  );
}

