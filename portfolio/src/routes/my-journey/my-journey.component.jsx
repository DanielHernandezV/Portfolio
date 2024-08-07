import TimeLine from "../../Components/time-line/time-line.component";
import "./my-journey.styles.scss";
//type education,certification, work
const timeLine = [
  {
    title: "Information Systems Engineering Bachelor's Degree",
    date: "Expected in 2024-11",
    description:
      " I have completed all the necessary requirements and am waiting for the administrative processes to be finalized.",
    link: "https://documentos.una.ac.cr/bitstream/handle/unadocs/13581/Bach.%20Informatica.pdf?sequence=6&isAllowed=y",
    type: "education",
  },
  {
    title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
    date: "Ongoing",
    description:
      "I am enjoying React very much, and this course is helping me a lot in my professional growth. There is a lot of content, and I am still learning.",
    link: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
    type: "certification",
  },
  {
    title: "CSS - The Complete Guide 2024 (incl. Flexbox, Grid & Sass)",
    date: "July 2024",
    description:
      "I learned a lot about vanilla CSS, Sass, and React. It reinforced my belief that every developer should have a solid understanding of CSS.",
    link: "https://www.udemy.com/certificate/UC-78b39a5f-a4c2-41ec-b8e2-dfb588c6989f/",
    type: "certification",
  },
  {
    title:
      "Intern Developer | Empresa de servicios públicos de heredia (ESPH) | Heredia",
    date: "Feb 2024 to June 2024",
    description:
      "Led the migration of three web systems (SICA, SISINDI, VISIONWEB) from Java 8 to Java 21 Temurin LTS. Updated frontend and backend libraries, conducted testing, and prepared documentation. Enhanced communication skills and built professional relationships.",
    link: "",
    type: "work",
  },
  {
    title: ".NET Developer | CITY HALL OF SAN PABLO | Heredia",
    date: "Jan 2023 to June 2023",
    description:
      "Developed a webpage for small and medium enterprises to manage service details, products, photos, and location with Google Maps API integration. Managed both frontend and backend tasks, collaborated with product owners, and delivered technical documentation. Utilized Visual Studio 2019, .NET Framework, C#, MySQL, JavaScript, HTML, CSS, and Bootstrap.",
    link: "https://github.com/DanielHernandezV/SIPYME",
    type: "work",
  },
  {
    title: "Information Systems Engineering Diploma ",
    date: "May 2023",
    description:
      "I finished my Information Systems Engineering Diploma at Universidad Nacional de Costa Rica (UNA)",
    link: "",
    type: "education",
  },
  {
    title: "Scrum Fundamentals Certified (SFC™)",
    date: "May 2023",
    description:
      "This certification enhanced my ability to effectively apply Scrum methodologies in project management, improve team collaboration, and deliver incremental value.",
    link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=976884",

    type: "certification",
  },
  {
    title: "I Started College",
    date: "Jan 2020",
    description:
      'I started studying Software Engineering at "Universidad Nacional de Costa Rica".',
    link: "https://documentos.una.ac.cr/bitstream/handle/unadocs/13581/Bach.%20Informatica.pdf?sequence=6&isAllowed=y",

    type: "education",
  },
  {
    title: "I graduated from high school.",
    date: "Nov 2019",
    description:
      'I finished my high school diploma at "Colegio Técnico Profesional de Mercedes Norte", where I also earned a technical diploma in accounting.',
    link: "https://www.ctpmercedesnorte.com/",
    type: "education",
  },
];

const MyJourney = () => {
  return (
    <>
      <div className="my-journey-background" />
      <div className="my-journey-container">
        <TimeLine timeLine={timeLine} />
      </div>
    </>
  );
};
export default MyJourney;
