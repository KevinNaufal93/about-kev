export type Profile = {
  name: string;
  role: string;
  status: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  site: string;
};

/** Single source of truth for everything shown on the page. */
export const profile: Profile = {
  name: "Kevin Naufal Permana",
  role: "Full Stack & Backend Engineer",
  status: "Online",
  email: "naufal.kevin7@outlook.com",
  github: "https://github.com/KevinNaufal93",
  linkedin: "https://www.linkedin.com/in/kev28",
  location: "Tangerang Selatan, Indonesia",
  site: "about-kev.vercel.app",
};
