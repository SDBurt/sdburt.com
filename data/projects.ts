export type ProjectType = {
  label: string;
  code: string;
  description: string;
  date: string;
  slug: string;
  href: string;
};

export const allProjects: ProjectType[] = [
  {
    label: "Portfolio Site",
    slug: "sdburt-com",
    code: "https://github.com/sdburt/sdburt-com",
    description: "Portfolio and blog",
    date: "2022-11-28",
    href: "https://sdburt.com",
  },
  {
    label: "AI Playground",
    slug: "ai-sdburt-com",
    code: "https://github.com/sdburt/ai-sdburt-com",
    description: "My personal playground site for bridging ai with web",
    date: "2023-01-06",
    href: "https://ai.sdburt.com",
  },
  {
    label: "Refocus",
    slug: "refocus-sdburt-com",
    code: "https://github.com/sdburt/refocus",
    description: "Pomodoro timer with features for attention span tracking",
    date: "2023-01-31",
    href: "https://refocus.sdburt.com",
  },
];
