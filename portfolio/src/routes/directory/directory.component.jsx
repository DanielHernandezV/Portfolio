import "./directory.styles.scss";
import { ReactComponent as SvgLinkedin } from "../../assets/Linkedin.svg";
import { ReactComponent as SvgGit } from "../../assets/GitHub.svg";
import { ReactComponent as Copy } from "../../assets/copy-svgrepo-com.svg";
import { ReactComponent as Resume } from "../../assets/reshot-icon-resume-XTALQHGEVC.svg";
import Technologies from "../../Components/technologies-brand/technologies-brand.component";
import Me from "../../images/me.png";
const Directory = () => {
  const email = "danielhvcr@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Correo copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar al portapapeles: ", err);
      });
  };
  return (
    <>
      <div className="main-background" />
      <div className="main-background-secondary" />
      <div className="directory-container">
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
          <div className="information-container information-container-cv">
            <div>
              <a href="https://daniel-hernandez-cv.s3.amazonaws.com/CV+Daniel+Hern%C3%A1ndez+Vargas.pdf">
                <Resume />
              </a>
            </div>
          </div>
          <h2>Full stack developer</h2>
          <h3>
            Passionate about web software development, love taking on new
            challenges and constantly expanding my knowledge and skills.
          </h3>
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
