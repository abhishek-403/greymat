import { BottomGlow, PrimaryHeading } from "../../utils/utils";
import aboutImg2 from "../assets/aboutimg2-removebg.png";
import Tilt from "react-parallax-tilt";
import aboutImg1 from "../assets/aboutimg3.jpg";
type Props = { hideHeading?: boolean };

function About({ hideHeading }: Props) {
  return (
    <div className="text-white mb-10 w-full flex  items-center flex-col gap-10">
      {!hideHeading && (
        <PrimaryHeading head={"About Us"} subhead={"Meet our team"} />
      )}
      <div className="flex gap-10 flex-col items-center justify-center mx-auto w-full   ">
        <TiltWrapper>
          <div
            data-aos="fade-right"
            className="flex-1 text-center flex flex-col md:gap-10 gap-4 md:p-10 py-0 px-6 border-r border-neutral-80"
          >
            <div className="pt-2 md:pt-10 flex flex-col gap-4 ">
              <p className="md:text-2xl text-lg font-semibold ">
                Efficiency & Effectiveness in every step of Web Design and App
                Development
              </p>
              <BottomGlow />
            </div>
            <div className="md:text-base text-sm text-neutral-30">
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
        </TiltWrapper>

        <TiltWrapper>
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
            className="flex-1 text-center flex flex-col md:gap-10 gap-4 md:p-10 py-0 px-6 border-l border-neutral-80 "
          >
            <div className="pt-2 md:pt-10 flex flex-col gap-4">
              <p className="md:text-2xl text-lg font-semibold ">
                Enthusiasm & Energy in every form of work
              </p>
              <BottomGlow />
            </div>
            <div className="md:text-base text-sm text-neutral-30 ">
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
        </TiltWrapper>
        <TiltWrapper>
          <div
            data-aos="fade-right"
            className="flex-1 text-center flex flex-col md:gap-10 gap-4 md:p-10 py-0 px-6 border-r border-neutral-80 "
          >
            <div className="pt-2 md:pt-10 flex flex-col gap-4">
              <p className="md:text-2xl text-lg font-semibold ">
                Efficiency & Effectiveness in every step of Web Design and App
                Development
              </p>
              <BottomGlow />
            </div>
            <div className="md:text-base text-sm text-neutral-30">
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
        </TiltWrapper>
      </div>
    </div>
  );
}

function TiltWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Tilt
      glareBorderRadius="10"
      glarePosition="all"
      tiltMaxAngleY={.1}
      tiltMaxAngleX={.1}
      glareMaxOpacity={0.1}
      glareEnable
      style={{
        background: "linear-gradient(180deg, #000000, #0F0F0F 65.62%)",
        boxShadow:
          "0 1px 0 1px rgba(0, 0, 0, .02), 0 4px 6px rgba(0, 0, 0, .02), inset 0 0 0 6px var(--accents-1)",
      }}
      className="flex sm:flex-row flex-col  gap-6 md:gap-2 bg-neutral-95 rounded-2xl p-4"
    >
      {children}
    </Tilt>
  );
}
export default About;
