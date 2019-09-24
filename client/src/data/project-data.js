import futurehope from "../img/futurehopeapp.jpg";
import luncher from "../img/luncherapp.jpg";
import trackyourcoin from "../img/trackyourcoinapp.jpg";

const projects = [
  {
    id: 1,
    title: "Future Hope School",
    role: "Full-Stack Developer",
    technologies: "React, React Hooks, Redux, Firebase, Full Calendar",
    description:
      "Future Hope School connects teachers in Ghana to retired teachers in North America. Our mission is to increase school retention rates in Ghana",
    projectImage: futurehope,
    projectURL: "https://staging.futurehopeschool.com/",
    githubRepo:
      "https://github.com/labs-future-hope/Future-Hope-Client/tree/Staging"
  },
  {
    id: 2,
    title: "Track Your Coin",
    role: "Full-Stack Developer",
    technologies:
      "NodeJs, ExpressJs, Knex, Jest, BcryptJS, SQLite3, Postgres, Rect,React Hooks, Redux",
    description:
      "Track Your Coin allows you to manage your expenses and gain control of your finances.",
    projectImage: trackyourcoin,
    projectURL: "https://trackyourcoin.app/",
    githubRepo: "https://github.com/Track-Your-Coins"
  },
  {
    id: 3,
    title: "Luncher",
    role: "UI Developer",
    technologies: "CSS, LESS, Semantic HTML, Javascript",
    description:
      "Luncher is a web application that allows schools to request funds from donors for their school lunch programs. A simple landing page was built.",
    projectImage: luncher,
    projectURL: "https://ladykerr.github.io/Luncher-App/index.html",
    githubRepo: "https://github.com/LadyKerr/Luncher-App"
  }
];

export default projects;
