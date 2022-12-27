import { FaCrop, FaMobileAlt } from "react-icons/fa";
import { FcManager, FcConferenceCall, FcDataSheet } from "react-icons/fc";
import { MdMobileFriendly } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { BiTestTube } from "react-icons/bi";
import { GrHostMaintenance } from "react-icons/gr";
import {
  AJAX,
  AWS,
  AZURE,
  DJANGO,
  DOCKER,
  DOTNET,
  FIREBASE,
  FLASK,
  GCP,
  HTML,
  JAVASCRIPT,
  JQUERY,
  LARAVEL,
  NODEJS,
  PHP,
  Programmer,
  PYTHON,
  REACT,
  REACTNATIVE,
  RUST,
  SHOPIFY,
  TERRAFORM,
  VUE,
  WEBFLOW,
  WORDPRESS,
} from "../assets";
import { Landing } from "../pages";
import Contact from "../pages/Contact";

export const navigationItems = [
  {
    to: "/",
    title: "Home",
    component: <Landing />,
    exact: true,
  },
  {
    to: "/contact",
    title: "Contact",
    component: <Contact />,
    exact: false,
  },
  {
    to: "/about",
    title: "About",
    component: <Landing />,
    exact: false,
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

export const MarqueeContent = [
  { logo: LARAVEL },
  { logo: NODEJS },
  { logo: PHP },
  { logo: PYTHON },
  { logo: REACT },
  { logo: REACTNATIVE },
  { logo: RUST },
  { logo: SHOPIFY },
  { logo: TERRAFORM },
  { logo: VUE },
  { logo: WEBFLOW },
  { logo: WORDPRESS },
  { logo: AJAX },
  { logo: AZURE },
  { logo: AWS },
  { logo: DJANGO },
  { logo: DOCKER },
  { logo: DOTNET },
  { logo: FIREBASE },
  { logo: FLASK },
  { logo: HTML },
  { logo: JAVASCRIPT },
  { logo: JQUERY },
  { logo: GCP },
];

export const ReasonContent = {
  image: Programmer,
  cardContents: [
    {
      title: "A",
      text: "abc",
    },
    {
      title: "A",
      text: "abc",
    },
    {
      title: "A",
      text: "abc",
    },
    {
      title: "A",
      text: "abc",
    },
  ],
};

export const testimonialContent = [
  {
    name: "Michael Davis",
    review:
      "I have been using this software for a few mostomer support team is always available to help with any questions or issues. The features and tools provided have greatly improved my productivity and saved me a lot of time. I highly recommend this software to anyone looking to streamline their operations.",
    position: "Marketing Manager",
    profileImage: "http://t.commonsupport.com/adro/images/resource/thumb-1.jpg",
  },
  {
    name: "Jessica Williams",
    review:
      "I have been using this software for my business for the past year and I am extremely happy with the results. The platform is reliable and user-friendly, and the customer service team is always available to help with any issues or questions. The features and tools provided have greatly improved my workflow and increased efficiency. I highly recommend this software to any business looking to streamline their operations.",
    position: "CEO",
    profileImage: "http://t.commonsupport.com/adro/images/resource/thumb-1.jpg",
  },
  {
    name: "John Smith",
    review:
      "I have been using this software for my business for the past few months and I am extremely satisfied with the results. The platform is easy to use and the customer service team is always available to help with any issues or questions. The features and tools provided have greatly improved my productivity and saved me a lot of time. I highly recommend this software to any business looking to streamline their operations.",
    position: "Project Manager",
    profileImage: "http://t.commonsupport.com/adro/images/resource/thumb-1.jpg",
  },
  {
    name: "Rachel Thompson",
    review:
      "I have been using this software for my business for the past year and I am extremely impressed with the results. The platform is user-friendly and easy to navigate, and the customer service team is always available to help with any questions or issues. The features and tools provided have greatly improved my workflow and increased efficiency in my business. I highly recommend this software to anyone looking to streamline their operations.",
    position: "Operations Manager",
    profileImage: "http://t.commonsupport.com/adro/images/resource/thumb-1.jpg",
  },
];
