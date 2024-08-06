import "./proyect-card.styles.scss";
import { ReactComponent as GitHub } from "../../assets/GitHub.svg";
import { ReactComponent as View } from "../../assets/View.svg";
import TechTag from "../techTag/tech-tag.component";
const ProyectCard = ({ proyect }) => {
  const { name, gitHub, description, techStack, status, link } = proyect;

  const getImage = (name) => {
    try {
      return require(`../../images/${name}.jpg`);
    } catch (error) {
      console.error("No se pudo cargar la imagen:", name);
      return null;
    }
  };

  const imageSrc = getImage(name);
  return (
    <div className="proyect-card-container">
      <div className="proyect-card-image-container">
        <div className="proyect-card-git-container">
          <a href={gitHub}>
            <GitHub className="proyect-card-git-svg" />
          </a>
        </div>
        <div
          className={`proyect-card-finish-container proyect-card-finish-container-${status}`}
        >
          {status}
        </div>
        {link && (
          <div className="proyect-card-link-container">
            <a href={link}>
              <View className="proyect-card-git-svg" />
            </a>
          </div>
        )}

        <img src={imageSrc} alt={name} />
      </div>
      <h1 className="proyect-card-title">{name}</h1>
      <h2>{description}</h2>
      <div className="proyect-card-techStack-container">
        <h3>TechStack:</h3>
        <ul>
          {techStack.map((item) => (
            <TechTag key={`name-${item}`} nameTag={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProyectCard;
