import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-svelte";

export const appConfig = {
  title: "Chizi Victor - Software Developer",
  description: "Software developer and unabashed nerd.",
  url: "https://chizi.dev",
} as const;

export const personalData = {
  headline: appConfig.description,
  bio: `Based in Port Harcourt, Nigeria. Building my own ideas, helping you launch yours.`,
  summary: "End-to-end development, designed to scale. Efficient. Thoughtful. Budget-friendly.",
  projects: [
    /*{
      title: "Emails for Developers",
      link: "/emails",
      summary: "Email setup guide for Software developers.",
      pending: true,
      external: false,
    },*/
    {
      title: "Link",
      link: "https://aidm.link?ref=chizidotdev",
      summary: "Digital portfolio generator for creatives.",
      pending: true,
      external: true,
    },
    {
      title: "Aidmedium",
      link: "https://aidmedium.com?ref=chizidotdev",
      summary: "Software development for business owners and startups.",
      pending: false,
      external: true,
    },
    /*{
      title: "Nuntius",
      link: "https://nuntius.aidmedium.com",
      summary: "An anonymous messaging web-app.",
      pending: false,
    },*/
  ],
  socials: [
    { icon: TwitterIcon, id: "twitter", name: "Twitter", url: "https://twitter.com/chizidotdev" },
    { icon: GithubIcon, id: "github", name: "Github", url: "https://github.com/chizidotdev" },
    {
      icon: LinkedinIcon,
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/chizi-wokoma-1b486a226/",
    },
    { icon: MailIcon, id: "email", name: "Email", url: "mailto:chiziwokoma@gmail.com" },
  ],
} as const;
