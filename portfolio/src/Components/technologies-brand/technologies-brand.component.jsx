import "./technologies-brand.styles.scss";
import { ReactComponent as HtmlSvg } from "../../assets/HTML.svg";
import { ReactComponent as CSSSvg } from "../../assets/CSS.svg";
import { ReactComponent as JavaScriptSvg } from "../../assets/JavaScript.svg";
import { ReactComponent as ReactSvg } from "../../assets/React.svg";
import { ReactComponent as JavaSvg } from "../../assets/Java.svg";
import { ReactComponent as SQLSvg } from "../../assets/SQL.svg";
const Technologies = () => {
  return (
    <div className="technologies-brand-container">
      <div className="technologies-brand-image-container">
        <HtmlSvg className="technologies-brand-svg" />
      </div>
      <div className="technologies-brand-image-container">
        <CSSSvg className="technologies-brand-svg" />
      </div>
      <div className="technologies-brand-image-container">
        <JavaScriptSvg className="technologies-brand-svg" />
      </div>
      <div className="technologies-brand-image-container">
        <ReactSvg className="technologies-brand-svg" />
      </div>
      <div className="technologies-brand-image-container">
        <JavaSvg className="technologies-brand-svg" />
      </div>
      <div className="technologies-brand-image-container">
        <SQLSvg className="technologies-brand-svg" />
      </div>
    </div>
  );
};

export default Technologies;
