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
    desctiption: {
      stacks:
        "Some of the common services we use for this includes Figma, Adobe XD, Sketch.",
      linkTo: "/services/uiux",
    },
    desc: "We will take care of everything from: user experience research, napkin drawings, wireframes, layouts, style guides, full-res mockups, and prototypes.",
  },
  {
    icon: <FcManager size={50} />,
    title: "Product Management",
    desctiption: {
      stacks:
        "We manage your products and services with the hands on softwares like Jira, Clickup, Trello, Slack.",
      linkTo: "/services/productmanagement",
    },
    desc: "Having Project Managers in-house allows our team to be in sync at all times. Minimizing communication errors saves valuable time and money.",
  },
  {
    icon: <FcConferenceCall size={50} />,
    title: "Consulting",
    desctiption: {
      stacks:
        "If you need any services like migrating to cloud or changing the operative stacks, we provide with a handy solution for you with better alternatives in case of confusion",
      linkTo: "/services/",
    },
    desc: "Our discovery and consulting offers to deliver well documented solutions and recommendations with keep in mind an apolitical approach. Bring in people with experience delivering products.",
  },
  {
    icon: <FaMobileAlt size={50} color="#FD7E14" />,
    title: "Mobile App Development",
    desctiption: {
      stacks:
        "Our stack include the use of Android natives, IOS natives, and cross platform sources like Flutter and React Native.",
      linkTo: "/services/",
    },
    desc: "We provide Android and IOS development services. We use the latest native and cross-platform technologies to ensure your users have the best experience.",
  },
  {
    icon: <MdMobileFriendly size={50} color="#1D3C78" />,
    title: "MVP Development",
    desctiption: {
      // stacks: ["WebApps", "PWA", "Websites", "Applications", "Cloud Services"],
      stacks: "desc here",
      linkTo: "/services/",
    },
    desc: "Minimum Viable Product development is a technique offering just enough features to please early adopters and collect feedback while raising capital for the end-solution.",
  },
  {
    icon: <TfiWorld size={50} />,
    title: "Web Development",
    desctiption: {
      // stacks: [
      //   "MERN/Mean stack",
      //   "PERN/PEAN",
      //   "Django",
      //   "React / Angular",
      //   "Vue",
      //   "PHP Laravel",
      //   "HTML CSS JS",
      // ],
      stacks: "desc here",

      linkTo: "/services/",
    },
    desc: "Web development is one of our core tech skill sets. We pride ourselves in being able to build anything from simple web apps to modern scalable distributed platforms.",
  },
  {
    icon: <BiTestTube size={50} color="#f5f013" />,
    title: "QA Testing",
    desctiption: {
      // stacks: ["Automated", "Manual", "Test scripts"],
      stacks: "desc here",

      linkTo: "/services/",
    },
    desc: "OnPoint Software has both manual and automated quality assurance services to ensure that everything is polished, refined, and optimized for your users.",
  },
  {
    icon: <FcDataSheet size={50} />,
    title: "Data Analysis",
    desctiption: {
      // stacks: ["BigData", "Data warehousing", "Web Scraping", "SEO"],
      stacks: "desc here",

      linkTo: "/services/",
    },
    desc: "We provide with the in-hand experties on optimizing your app to top notch search engine with best scripts. We also have in-house sdk in development to provide with the scraping and crawling data over web for your application.",
  },
  {
    icon: <GrHostMaintenance size={50} color="#1A2C77" />,
    title: "Product Maintenance",
    desctiption: {
      // stacks: ["Service Model", "Usage Model", "Product Model"],
      stacks: "desc here",

      linkTo: "/services/",
    },
    desc: "After your MVP has launched, our expert team can take care of maintaining and improving your digital product so that you can focus on growing your business.",
  },
];

export const HeroContent = {
  title: `OnTime, OnTrack, OnPlace, OnPoint!`,
  body: "We have on point solution for all your software problems. With an experienced and dedicated team, we provide you with a right resolution, to all your needs",
};
