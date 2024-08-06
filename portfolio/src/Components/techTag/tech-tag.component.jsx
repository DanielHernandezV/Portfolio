import "./tech-tag.styles.scss";
import { useState, useEffect } from "react";
const TechTag = ({ nameTag }) => {
  const getImage = async (name) => {
    try {
      const image = await import(`../../assets/${name}.svg`);
      return image.default;
    } catch (error) {
      return null;
    }
  };
  const [image, setImage] = useState(null);

  useEffect(() => {
    getImage(nameTag).then(setImage);
  }, [nameTag]);

  return (
    <>
      {image ? (
        <div className="tech-stack-container">
          <img src={image} alt={nameTag} />
        </div>
      ) : (
        <div className="tech-stack-container">
          <h1>{nameTag}</h1>
        </div>
      )}
    </>
  );
};

export default TechTag;
