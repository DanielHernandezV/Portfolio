import "./tech-tag.styles.scss";

const TechTag = ({ children }) => {
  const getImage = (name) => {
    try {
      return require(`../../assets/${name}.svg`);
    } catch (error) {
      console.error("No se pudo cargar la imagen:", name);
      return null;
    }
  };

  return <div className="tech-stack-container">{children}</div>;
};

export default TechTag;
