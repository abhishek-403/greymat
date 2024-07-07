import serviceImg from "../components/assets/services/serviceimg.png";
import { servicepagecards } from "../components/constants/service-page";
import Services from "../components/home/Services";
import { SparklesCore } from "../components/ui/Sparkles";
type Props = {};
export default function ServicesPage({}: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex relative flex-wrap-reverse gap-10 w-full items-center justify-center mt-10 md:px-0 px-10">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="w-full h-full absolute z-[-1]"
          particleColor="#FFFFFF"
        />
        <div
          data-aos="fade-right"
          className="flex relative flex-col w-full flex-1 text-neutral-0 gap-4 text-left"
        >
          <div className="md:text-4xl text-2xl font-bold">
            WEB DEVELOPMENT & DESIGN SERVICES
          </div>
          <div className="text-base md:text-lg">
            Greymat is one of the top-rated web solutions company in India. We
            are a team of software developers, technology enthusiasts,
            designers, content developers and creative web developers who have
            all come together to deliver valuable services to businesses across
            the globe.
          </div>
        </div>
        <div
          data-aos="fade-left"
          className=" flex p-10 items-center justify-center"
        >
          <img
            src={serviceImg}
            alt=""
            className="md:max-w-[400px] max-w-[300px] "
          />
        </div>
      </div>
      <Services cards={servicepagecards} />
    </div>
  );
}
