import "./proyects.styles.scss";
import ProyectCard from "../../Components/proyect-card/proyect-card.component";

const proyects = [
  {
    name: "SIPYME",
    gitHub: "https://github.com/DanielHernandezV/SIPYME",
    description:
      "This project was developed for the Municipality of San Pablo de Heredia, is a webpage where the owners of small and medium enterprises can add information about their services, products and photos, also can and add their location due to a integration of Google Maps API with a system of markers",
    techStack: ["MySQL", "ASP.NET", "C", "Bootstrap", "JavaScript"],
    status: "Finished",
    link: "",
  },
  {
    name: "crownCloding",

    gitHub: "https://github.com/DanielHernandezV/CompleteReactCourse",
    description:
      'Project developed as part of the "Complete React Developer in 2024" course. This is a React application that simulates an online clothing store, featuring authentication via Firebase with Google Sign-In and user login. ',
    techStack: ["React", "HTML", "StyledComponents", "Firebase", "Redux"],
    status: "InProgress",
    link: "https://verdant-liger-c37690.netlify.app/",
  },
  {
    name: "uHost",
    gitHub: "https://github.com/DanielHernandezV/CSS-Course",
    description:
      "Front-end implementation of a landing page designed to showcase various hosting plans, developed as part of the course 'CSS - The Complete Guide 2024 (incl. Flexbox, Grid & Sass)' on Udemy",
    techStack: ["CSS", "React", "HTML"],
    status: "Finished",
    link: "https://master--uhostingcss.netlify.app/",
  },
  {
    name: "Portfolio",
    gitHub: "https://github.com/DanielHernandezV/Perfolio",
    description: "My personal portfolio",
    techStack: ["SASS", "React", "HTML"],
    status: "Finished",
    link: "",
  },
];
const Proyects = () => {
  return (
    <>
      <div className="main-proyect-background" />

      <div className="main-proyect-container">
        {proyects.map((proyect) => (
          <ProyectCard key={proyect.name} proyect={proyect} />
        ))}
      </div>
    </>
  );
};
export default Proyects;
