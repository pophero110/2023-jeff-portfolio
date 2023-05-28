export interface Project {
  name: string;
  description: string;
  techList: string[];
  imageUrl?: string;
  repoLink?: string;
  externalLink?: string;
}

export const projects: Project[] = [
  {
    name: "Tic-tac-toe",
    description:
      "An interactive Tic-Tac-Toe game that provides two gameplay options: playing against an AI opponent or playing online with other players.",
    techList: ["JavaScript", "HTML", "SASS", "Socket.IO", "Heroku"],
    imageUrl: "./image/tic-tac-toe.png",
    repoLink: "https://github.com/pophero110/Tic-tac-toe",
    externalLink: "https://my-tic-tac-toe.herokuapp.com/",
  },
  {
    name: "Twitter REST APIs",
    description:
      "A backend-only application that provides REST APIs with functionalities similar to Twitter's backend and follows agile development practices, including brainstorming, entity identification, API design, user story creation, and a well-defined development process.",
    techList: [
      "Java",
      "Spring Boot",
      "PostgresSQL",
      "Postman",
      "GitHub Project",
    ],
    imageUrl: "./image/twitter.png",
    repoLink: "https://github.com/pophero110/Twitter-REST-API",
    externalLink: "https://github.com/users/pophero110/projects/5",
  },
];
