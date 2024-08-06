import "./proyect-card.styles.scss";
import { ReactComponent as GitHub } from "../../assets/GitHub.svg";
import { ReactComponent as View } from "../../assets/View.svg";
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
        {link && (
          <div className="proyect-card-link-container">
            <a href={link}>
              <View className="proyect-card-git-svg" />
            </a>
          </div>
        )}

        <img src={imageSrc} alt={name} />
      </div>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <ul>
        {techStack.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProyectCard;
