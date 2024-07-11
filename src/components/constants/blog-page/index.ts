import { BlogCard } from "../types";
import blogimg1 from "../../assets/blogs/blogthumb1.png";
import blogimg2 from "../../assets/blogs/blogthumb2.png";
export const BLOG_CARDS: BlogCard[] = [
  {
    title: "Is Coding a required skill",
    description:
      "This blog discusses the evolution of coding and how no-code and automation changed the tech industry. Know why you should upskill constantly if being a techie is your goal.",
    link: "/coding",
    date: "24 July",
    image: blogimg1,
    category:"No code"
  },
  {
    title: "Reasons Why No-Code Automation is the Future of Business",
    description: "No Code Automation is the Future of Business",
    link: "/nocode",
    date: "24 July",
    image: blogimg2,
    category:"How to"
  },
];
