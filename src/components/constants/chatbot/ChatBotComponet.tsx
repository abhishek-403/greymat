//@ts-ignore
import ChatBot from "react-simple-chatbot";
import "../../../index.css";
import { NESTED_TABS, TABS } from "..";
import { Link } from "react-router-dom";
type Props = {};

export default function ChatBotComponet({}: Props) {
  const chatSteps = [
    {
      id: "greet",
      message: "Hello, Welcome to Greymat",
      trigger: "help",
    },
    {
      id: "help",
      message: "How can I help you",
      trigger: "help-options",
    },
    {
      id: "help-options",
      options: [
        {
          value: "Navigate issue",
          label: "Navigation issue",
          trigger: "navigation-issue",
        },
        {
          value: "Services",
          label: "Regarding services",
          trigger: "service-issue",
        },
        {
          value: "Contact issue",
          label: "Contact directly",
          trigger: "contact-issue",
        },
        {
          value: "report issue",
          label: "Report",
          trigger: "report-issue",
        },
      ],
    },
    {
      id: "navigation-issue",
      component: <NavigationOptions />,
      trigger: "help",
    },
    {
      id: "service-issue",
      component: <ServicesOption />,
      trigger: "help",
    },
    {
      id: "contact-issue",
      component: <ContactOption />,
      trigger: "help",
    },
    {
      id: "report-issue",
      message: "Write your issuse",
      trigger: "take-issue",
    },
    {
      id: "take-issue",
      user: true,
      trigger: "report-ack",
    },
    {
      id: "report-ack",
      message: "Sorry for inconvenience. We will fix the issue",
      trigger: "help",
    },
  ];

  return (
    <div>
      <ChatBot
        className="bg-black"
        style={{
          backgroundColor: "#212121",
        }}
        inputStyle={{
          backgroundColor: "#212121",
          color: "white",
        }}
        bubbleOptionStyle={{
          display: "block",
          width: "300px",
          backgroundColor: "black",
          color: "white",
        }}
        customStyle={{
          padding: "0px",
          borderRadius: "20px",
          width:"fit"
        }}
        enableSmoothScroll
        steps={chatSteps}
        floating={true}
        headerTitle="Bot"
      />
    </div>
  );
}

function NavigationOptions() {
  return (
    <div className="flex w-full rounded-xl bg-neutral-80  flex-col items-center justify-center text-neutral-0 py-4 gap-4 font-poppins">
      <p className="text-primary-40 font-bold border-b border-neutral-60 pb-1 text-sm">Here are the navigation options</p>
      {TABS.map((tab, i) => (
        <div key={i} className="flex hover:text-neutral-40">
          <Link to={tab.link}>{tab.name}</Link>
        </div>
      ))}
      {NESTED_TABS.map((tab, i) => (
        <div key={i} className="flex  hover:text-neutral-40">
          <Link to={tab.link}>{tab.name}</Link>
        </div>
      ))}
    </div>
  );
}
function ContactOption() {
  return (
    <div className="flex w-full rounded-xl bg-neutral-80  flex-col items-center justify-center text-neutral-0 py-4 gap-4 font-poppins">
      {TABS.filter((op) => op.name === "Contact").map((tab, i) => (
        <div key={i} className="flex hover:text-neutral-40">
          <Link to={tab.link}>Navigate to {tab.name}</Link>
        </div>
      ))}
    </div>
  );
}
function ServicesOption() {
  return (
    <div className="flex w-full rounded-xl bg-neutral-80  flex-col items-center justify-center text-neutral-0 py-4 gap-4 font-poppins">
      {NESTED_TABS.filter((op) => op.name === "Services").map((tab, i) => (
        <div key={i} className="flex hover:text-neutral-40">
          <Link to={tab.link}>Navigate to {tab.name}</Link>
        </div>
      ))}
    </div>
  );
}
