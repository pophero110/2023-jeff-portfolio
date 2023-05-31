export interface Project {
  name: string;
  description: string;
  techList: string[];
  imageUrl?: string;
  repoLink?: string;
  externalLink?: string;
}

export const featureDProjects: Project[] = [
  {
    name: "Tic-tac-toe",
    description:
      "An interactive Tic-Tac-Toe game that provides two gameplay options: playing against an AI opponent or playing online with other players.",
    techList: ["JavaScript", "HTML", "SCSS", "Socket.IO", "Heroku"],
    imageUrl: "./image/tic-tac-toe.png",
    repoLink: "https://github.com/pophero110/Tic-tac-toe",
    externalLink: "https://my-tic-tac-toe.herokuapp.com/",
  },
  {
    name: "Twitter REST APIs",
    description:
      "A backend-only application that provides REST APIs with functionalities similar to Twitter's backend and follows agile development practices, including brainstorming, entity identification, API design, user story creation, and a well-defined development process.",
    techList: ["Java", "Spring Boot", "PostgresSQL", "Postman", "IntelliJ"],
    imageUrl: "./image/twitter.png",
    repoLink: "https://github.com/pophero110/Twitter-REST-API",
    externalLink: "https://github.com/users/pophero110/projects/5",
  },
];

export const projects: Project[] = [
  {
    name: "Audio Galaxy Streaming APIs",
    description:
      "Led and managed a backend-only application that provides REST APIs with functionalities similar to Spotify backend and follows agile development practices.",
    techList: ["Java", "Spring Boot", "H2 Database", "JWT", "JUnit", "Mockito"],
    repoLink: "https://github.com/pophero110/AudioGalaxy-stream-APIs",
  },
  {
    name: "Wayfarer",
    description:
      "Led and managed a frontend application that allow users to share tips (AKA posts) about their favorite locations around the world.",
    techList: ["TypeScript", "Angular", "Bootstrap", "Figma"],
    repoLink: "https://github.com/pophero110/Wayfarer",
    externalLink: "https://wayfarer-rouge.vercel.app",
  },
  {
    name: "Rock Paper Scissors",
    description:
      "Made a rock-paper-scissors game using Java, IntelliJ and object oriented programming",
    techList: ["Java", "IntelliJ", "OOP"],
    repoLink: "https://github.com/pophero110/rock-paper-scissors",
  },
  {
    name: "Awesome Chicken Wing E-commerce",
    description: "Built and design a MVP restaurant online ordering website",
    techList: [
      "TypeScript",
      "Strip",
      "Next.js",
      "Prisma",
      "tRPC",
      "Postgres",
      "Vercel",
    ],
    repoLink: "https://github.com/pophero110/awesome-chicken-wings-ecommerce",
    externalLink:
      "https://awesome-chicken-wings-ecommerce-m7cqn6clv-pophero110.vercel.app/menu",
  },

  {
    name: "My Portfolio Website",
    description: "Built and designed my own portfolio website",
    techList: ["TypeScript", "Next.js", "SCSS", "Figma", "Vercel"],
    repoLink: "https://github.com/pophero110/Jeff-Ou-Portfolio",
    externalLink: "https://www.jeffou.dev/",
  },
  {
    name: "Letter.io",
    description: "Built and designed a letter writing assistance website",
    techList: ["Next.js", "Figma", "Prisma", "MongoDB", "NextAuth", "Vercel"],
    repoLink: "https://github.com/pophero110/letterio-web",
    externalLink: "https://letterio-web.vercel.app/",
  },
];
