export const CAL_LINK = "https://cal.com/chizidotdev/15min";

export const appConfig = {
  title: "Chizi Victor - Software Developer",
  description: "Creative software developer and unabashed nerd.",
  url: "https://chizi.dev",
} as const;

export const usp = {
  startups: {
    problem: [
      "You’ve got a brilliant idea but no coding skills.",
      "You're worried that the guy on Fiverr might not actually build something scalable.",
      "You don’t have the time or resources to deal with dev fires every other week.",
    ],
    solution: [
      "A dedicated full-stack dev partner ready to bring your vision to life.",
      "Robust, scalable, and user-friendly software that your customers will love using.",
      "Ongoing support to ensure that your project keeps growing and scaling.",
    ],
  },
  businesses: {
    problem: [
      "You're drowning in repetitive tasks that take away time from actually growing your business.",
      "Your sales funnel isn’t converting like it should, and you’re missing out on easy wins.",
      "You don’t have the time or expertise to build the systems your business needs.",
    ],
    solution: [
      "A developer partner ready to automate your workflows, build sales-driven websites, and take the guesswork out of scaling.",
      "A custom solution designed to run your business on autopilot, letting you focus on growth and strategy.",
      "Seamless integration with your existing tools to boost efficiency across the board.",
    ],
  },
};

export const personalData = {
  headline: { top: "Building my own ideas.", bottom: "Assisting you to launch yours." },
  summary: "End-to-end development, designed to scale. Efficient. Thoughtful. Budget-friendly.",
  projects: [
    {
      title: "Link",
      link: "https://aidm.link",
      summary:
        "Digital portfolio generator for creatives. Publish an online portfolio in just a few minutes and showcase your work to the world.",
      pending: true,
    },
    {
      title: "Copia",
      link: "https://copia.aidmedium.com",
      summary:
        "Headless multi-vendor e-commerce platform for small businesses and direct sales representatives.",
      pending: true,
    },
    {
      title: "Nuntius",
      link: "https://nuntius.aidmedium.com",
      summary: "An interactive messaging web-app with a dare game.",
      pending: false,
    },
  ],
  socials: [
    { id: "twitter", name: "Twitter", url: "https://twitter.com/chizidotdev" },
    { id: "github", name: "GitHub", url: "https://github.com/chizidotdev" },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/chizi-wokoma-1b486a226/",
    },
    { id: "mail", name: "Email", url: "mailto:chiziwokoma@gmail.com" },
  ],
} as const;

export const projects = [
  {
    title: "Slimepay Finance Portal",
    link: "https://aidm.link",
    category: "Fintech",
    summary:
      "Digital portfolio generator for creatives. Publish an online portfolio in just a few minutes and showcase your work to the world.",
    pending: true,
  },
  {
    title: "Winewave",
    link: "https://copia.aidmedium.com",
    category: "Ecommerce",
    summary:
      "Headless multi-vendor e-commerce platform for small businesses and direct sales representatives.",
    pending: true,
  },
  {
    title: "Nuntius Web Chat",
    link: "https://nuntius.aidmedium.com",
    category: "Social",
    summary: "An interactive messaging web-app with a dare game.",
    pending: false,
  },
];
