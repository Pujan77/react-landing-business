import { FaCrop, FaMobileAlt } from "react-icons/fa";
import { FcManager, FcConferenceCall, FcDataSheet } from "react-icons/fc";
import { MdMobileFriendly } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { BiTestTube } from "react-icons/bi";
import { GrHostMaintenance } from "react-icons/gr";

export const navigationItems = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/contact",
    title: "Contact",
  },
];

export const servicesContent = [
  {
    icon: <FaCrop size={50} color="#0D6EFD" />,
    title: "UI/UX Design",
    desc: "We will take care of everything from: user experience research, napkin drawings, wireframes, layouts, style guides, full-res mockups, and prototypes.",
  },
  {
    icon: <FcManager size={50} />,
    title: "Product Management",
    desc: "Having Project Managers in-house allows our team to be in sync at all times. Minimizing communication errors saves valuable time and money.",
  },
  {
    icon: <FcConferenceCall size={50} />,
    title: "Consulting",
    desc: "Our discovery and consulting offers to deliver well documented solutions and recommendations with keep in mind an apolitical approach. Bring in people with experience delivering products.",
  },
  {
    icon: <FaMobileAlt size={50} color="#FD7E14" />,
    title: "Mobile App Development",
    desc: "We provide Android and IOS development services. We use the latest native and cross-platform technologies to ensure your users have the best experience.",
  },
  {
    icon: <MdMobileFriendly size={50} color="#1D3C78" />,
    title: "MVP Development",
    desc: "Minimum Viable Product development is a technique offering just enough features to please early adopters and collect feedback while raising capital for the end-solution.",
  },
  {
    icon: <TfiWorld size={50} />,
    title: "Web Development",
    desc: "Web development is one of our core tech skill sets. We pride ourselves in being able to build anything from simple web apps to modern scalable distributed platforms.",
  },
  {
    icon: <BiTestTube size={50} color="#f5f013" />,
    title: "QA Testing",
    desc: "OnPoint Software has both manual and automated quality assurance services to ensure that everything is polished, refined, and optimized for your users.",
  },
  {
    icon: <FcDataSheet size={50} />,
    title: "Data Analysis",
    desc: "We provide with the in-hand experties on optimizing your app to top notch search engine with best scripts. We also have in-house sdk in development to provide with the scraping and crawling data over web for your application.",
  },
  {
    icon: <GrHostMaintenance size={50} color="#1A2C77" />,
    title: "Product Maintenance",
    desc: "After your MVP has launched, our expert team can take care of maintaining and improving your digital product so that you can focus on growing your business.",
  },
];

export const HeroContent = {
  title: "OnPoint Software",
  body: "We have on point solution for all your software problems. With an experienced and dedicated team, we provide you with a right resolution, to all your needs",
};
