import { CardProps, TabType } from "./types";
import webimg from "../assets/webimg.png";
import webappimg from "../assets/webappimg.png";
import growbuisnessimg from "../assets/growbuisness.png";
import ecommerceimg from "../assets/ecommerceimg.png";
import enterpriseimg from "../assets/enterpriseimg.png";
import startupimg from "../assets/stratupimg.png";
export const TABS: TabType[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Service",
      link: "/services",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "Careers",
      link: "/careers",
    },
  ];


  
export const services: CardProps[] = [
    {
      img: startupimg,
      title: "Web for startup",
      brief:
        "Kick start your new venture with a stunning website and a great online presence with the best web development company in Vizag. We develop top-notch websites for startups at affordable prices and offer complete support.",
    },
    {
      img: growbuisnessimg,
      title: "Web for growing business",
      brief:
        "Growing businesses need a strong online presence to establish their brand value. With professional websites developed by our developers, businesses can offer their customers a complete view of their offerings and an amazing user experience.",
    },
    {
      img: enterpriseimg,
      title: "Web For Enterprise",
      brief:
        "We can help enterprises build a strong brand identity for their business with a stunning website that offers their users a great user experience. Our attractive and robust websites are custom designed for our clients at the best prices.",
    },
    {
      img: ecommerceimg,
      title: "E-commerce development",
      brief:
        "Success in e-commerce business demands a great user experience. The websites we develop for e-commerce businesses give not only a great look but also offer detailed categorization of products and/or services.",
    },
  
    {
      img: webappimg,
      title: "Web App development",
      brief:
        "Boost your business success with web applications that help establish your brand image. The web apps developed by our developers will meet all your requirements and help achieve your business goals.",
    },
    {
      img: webimg,
      title: "Website Rampage",
      brief:
        "Give your website a fresh new look that attracts more customers. We can help your website get a complete redo with a whole new set of features and colours. ",
    },
  ];
  