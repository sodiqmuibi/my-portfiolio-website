import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    brainnest,
    threejs,
    depths,
    countries,
    dashboard,
    crypto
  } from "../assets";
  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "DepthsHq",
      icon: depths,
      iconBg: "#383E56",
      date: "Aug 2022 - April 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Assisted backend developers with coding and troubleshooting.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Brainnest",
      icon: brainnest,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - July 2022",
      points: [
        "Cultivated deep understandings of various software development lifecycles to diversify competencies.",
        "Continuously studied and improved abilities with wide range of web technologies, design tools and programming practices.",
        "Improved my coding of Javascript and CSS to enhance user experience and functionality.",
        "Gathered and evaluated the technical requirements for each site to produce the best code.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Rest Countries API",
      description:
        "Web-based platform that allows users see all countries from the homepage, search for a country, filter countries by region, click on a country and see more detailed information on a separate page.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "antdesign",
          color: "pink-text-gradient",
        },
      ],
      image: countries,
      source_code_link: "https://github.com/sodiqmuibi/rest-countries-api-with-color-theme-switcher",
      live_link: "https://get-rest-countries-info.netlify.app"
    },
    {
      name: "Admin Dashboard",
      description:
        "Admin dashboard application that includes one dashboard, three pages, four apps and seven fully functional charts",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/sodiqmuibi/admin-dashboard",
      live_link: "https://admin-dashboard-1iv7jxmjp-sodiqmuibi.vercel.app"
    },
    {
      name: "Crypto App",
      description:
        "A crypto information web app that allows users check the current top cryptocurrencies in the world and statistics such as price, market cap, and daily change of each cryptocurrency. It also allows users read the latest news on each cryptocurrency around the world.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://github.com/sodiqmuibi/crypto-app",
      live_link: "https://crypto-app-wheat-nu.vercel.app"
    },
  ];
  
export { services, technologies, experiences, projects };