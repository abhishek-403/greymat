import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  DIGITAL_MARKETING_PAGE_CONTENT,
  GAME_DEVELOPMENT_PAGE_CONTENT,
  GRAPHIC_DESIGNING_PAGE_CONTENT,
  MOBILE_APP_DEVELOPEMENT_PAGE_CONTENT,
  serviceRoutes,
  WEB_DEVELOPEMENT_PAGE_CONTENT,
} from "../constants/service-page";
import { ServicePageProps } from "../constants/types";
import Services from "../home/Services";
import { SparklesCore } from "../ui/Sparkles";

type Props = {};

export default function EachServicePage({}: Props) {
  const [pageDetails, setPageDetails] = useState<ServicePageProps>();
  const { id } = useParams();

  useEffect(() => {
    switch (id) {
      case serviceRoutes.GAME_DEVELOPMENT:
        setPageDetails(GAME_DEVELOPMENT_PAGE_CONTENT);
        break;
      case serviceRoutes.GRAPHIC_DESIGNING:
        setPageDetails(GRAPHIC_DESIGNING_PAGE_CONTENT);
        break;
      case serviceRoutes.WEB_DEVELOPEMENT:
        setPageDetails(WEB_DEVELOPEMENT_PAGE_CONTENT);
        break;
      case serviceRoutes.DIGITAL_MARKETING:
        setPageDetails(DIGITAL_MARKETING_PAGE_CONTENT);
        break;
      case serviceRoutes.MOBILE_APP_DEVELOPEMENT:
        setPageDetails(MOBILE_APP_DEVELOPEMENT_PAGE_CONTENT);
        break;
    }
  }, [id]);
  if (!pageDetails) {
    return <div className="text-white">Not found </div>;
  }
  return (
    <div className=" flex flex-col">
      <div className="relative flex flex-wrap-reverse gap-10 w-full items-center justify-center mt-10 md:px-0 px-10">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={40}
          className="w-full h-full absolute z-[-1]"
          particleColor="#FFFFFF"
        />
        <div
          data-aos="fade-right"
          className="flex flex-col w-full flex-1 text-neutral-0 gap-4 text-left"
        >
          <div className="md:text-4xl text-2xl font-bold">
            {pageDetails.heroHead}
          </div>
          <div className="text-base md:text-lg">{pageDetails.heroContent}</div>
        </div>
        <div
          data-aos="fade-left"
          className=" flex p-2 md:p-10 items-center justify-center"
        >
          <img
            src={pageDetails.img}
            alt=""
            className="md:max-w-[400px] max-w-[300px] "
          />
        </div>
      </div>
      <Services
       className="mt-10 md:mt-0"
        heading={pageDetails.cardsHead}
        subheading={pageDetails.cardsSubHead}
        cards={pageDetails.cards}
        
      />
    </div>
  );
}
