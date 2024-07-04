import serviceImg from "../components/assets/services/serviceimg.png";
import Services from "../components/home/Services";
type Props = {};
export default function ServicesPage({}: Props) {
  // const params = useRouter()
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap-reverse gap-10 w-full items-center justify-center mt-10">
        <div
          data-aos="fade-right"
          className="flex flex-col w-full flex-1 text-neutral-0 gap-4 text-center"
        >
          <div className="md:text-5xl text-3xl font-bold">No code automation</div>
          <div className="text-base md:text-lg">
            At Tech Lego, Our mission is to empower our clients to work smarter,
            not harder, by leveraging the power of automation to increase
            efficiency, reduce costs, and drive growth. Whether you need help
            with building a custom web or mobile application, setting up an
            e-commerce store, or automating your marketing and sales processes.
            We use the Power of No-Code to develop your Digital Projects in 4 to
            6 weeks.
          </div>
        </div>
        <div
          data-aos="fade-left"
          className=" flex p-10 items-center justify-center"
        >
          <img src={serviceImg} alt="" className="md:max-w-[400px] max-w-[300px] " />
        </div>
      </div>
      <Services />
    </div>
  );
}
