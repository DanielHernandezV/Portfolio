import "./directory.styles.scss";
import { ReactComponent as SvgLinkedin } from "../../assets/Linkedin.svg";
import { ReactComponent as SvgGit } from "../../assets/GitHub.svg";
import { ReactComponent as Copy } from "../../assets/copy-svgrepo-com.svg";
import { ReactComponent as Resume } from "../../assets/reshot-icon-resume-XTALQHGEVC.svg";
import { ToastContainer, toast } from "react-toastify";
import Technologies from "../../Components/technologies-brand/technologies-brand.component";
import "react-toastify/dist/ReactToastify.css";
import Me from "../../images/me.png";
const Directory = () => {
  const email = "danielhvcr@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success("Copied to clipboard", {
          position: "top-center",
          autoClose: 700,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((err) => {
        console.error("Error al copiar al portapapeles: ", err);
      });
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={500}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      <div className="directory-container">
        <div className="main-background" />
        <div className="main-background-secondary" />
        <div className="social-media-container">
          <div>
            <a href="https://www.linkedin.com/in/daniel-hern%C3%A1ndez-vargas-01a403297/">
              <SvgLinkedin className="social-media-container-svg social-media-container-svg-linkedin" />
            </a>
          </div>
          <div>
            <a href="https://github.com/DanielHernandezV">
              <SvgGit className="social-media-container-svg social-media-container-svg-github" />
            </a>
          </div>
        </div>
        <div className="separator-container">
          <div className="main-tittle-container">
            <img src={Me} alt="MyImage"></img>
          </div>
        </div>

        <div className="directory-separator-brand" />
        <div className="main-information-card">
          <h1>Daniel Hernandez Vargas</h1>
          <div className="information-container-cv">
            <h1>Download CV</h1>
            <div>
              <a href="https://daniel-hernandez-cv.s3.amazonaws.com/CV+Daniel+Hern%C3%A1ndez+Vargas.pdf">
                <Resume />
              </a>
            </div>
          </div>
          <h2>Software Engineer</h2>
          <p>
            Passionate about programming, especially web development. I love
            challenges, learning, and, above all, seeing the fruits of my work
            and knowledge put into practice. I enjoy working in teams as it
            helps me consider new perspectives and learn from others.
          </p>
          <p>
            Always open to new doors and opportunities for learning, work, or
            any chance that can help enhance my general knowledge and
            professional development.
          </p>

          <div className="information-container">
            <a href="mailto:danielhvcr@gmail.com">danielhvcr@gmail.com</a>
            <div>
              <Copy onClick={copyToClipboard} />
            </div>
          </div>
          <div className="directory-separator-brand" />
          <Technologies />
        </div>
      </div>
    </>
  );
};
export default Directory;
