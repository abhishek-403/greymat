import { BottomGlow, GradientText } from "../../pages/Home";
import aboutImg1 from "../assets/how-we-work.webp";
import aboutImg2 from "../assets/team.webp";
type Props = { hideHeading?: boolean };

function About({ hideHeading }: Props) {
  return (
    <div className="text-white mb-10 w-full flex  items-center flex-col md:gap-8">
      {!hideHeading && (
        <div className="my-6 ">
          <h1 className="">
            <GradientText>About Us</GradientText>
            <BottomGlow />
            <h6>Meet our team</h6>
          </h1>
        </div>
      )}
      <div className="flex gap-10 flex-col items-center justify-center mx-auto w-full   ">
        <div className="flex sm:flex-row flex-col  gap-6 md:gap-2 ">
          <div
            data-aos="fade-right"
            className="flex-1 text-center flex flex-col md:gap-10 gap-4 md:p-10 py-0 px-6"
          >
            <div className="pt-2 md:pt-10 flex flex-col gap-4">
              <p className="md:text-2xl text-lg font-semibold ">
                Efficiency & Effectiveness in every step of Web Design and App
                Development
              </p>
              <BottomGlow />
            </div>
            <div className="md:text-base text-sm text-neutral-40">
              If you are looking to overshadow your competitors and win the
              heart of your customers with a great online presence, then you are
              just where you need to be. Since 2008 providing services like
              mobile application development, web development, game development,
              graphics designing and digital marketing, we, at Colourmoon
              Technologies can guarantee that, with our services your brand will
              rule the market within no time.
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex-1 flex items-center justify-center px-2"
          >
            <img
              src={aboutImg1}
              alt="aboutimg"
              className="rounded-[30px] sm:p-4"
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col-reverse gap-6 md:gap-2">
          <div
            data-aos="fade-right"
            className="flex-1 flex items-center justify-center px-2"
          >
            <img
              src={aboutImg2}
              alt="aboutim2"
              className="rounded-[30px] sm:p-4"
            />
          </div>

          <div
            data-aos="fade-left"
            className="flex-1 text-center flex flex-col md:gap-10 gap-4 md:p-10 py-0 px-6"
          >
            <div className="pt-2 md:pt-10 flex flex-col gap-4">
              <p className="md:text-2xl text-lg font-semibold ">
                Enthusiasm & Energy in every form of work
              </p>
              <BottomGlow />
            </div>
            <div className="md:text-base text-sm text-neutral-40">
              Being one of the top web and app development company in India, we
              have been successful in working with some of the biggest ventures
              across the globe. With a team of experts in every domain, we
              design and develop websites, applications and come up with
              strategies for digital growth that truly add value to our
              customers’ companies. We work in coordination with our clients to
              understand their requirements and plan the execution process once
              we get their approval. Our customer satisfaction is always our
              first priority. Our team is available at all times to discuss and
              improve the work according to our customers’ requirements.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
