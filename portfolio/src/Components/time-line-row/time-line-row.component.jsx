import "./time-line-row.styles.scss";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { ReactComponent as ViewSvg } from "../../assets/View.svg";
import { ReactComponent as School } from "../../assets/School.svg";
import { ReactComponent as Certificate } from "../../assets/Certificate.svg";
import { ReactComponent as Work } from "../../assets/Work.svg";
const TimeLineRow = ({ row, align }) => {
  const { title, date, description, link, type } = row;

  const getIco = (type) => {
    if (type === "education") return School;
    if (type === "certification") return Certificate;
    if (type === "work") return Work;
    return Work;
  };
  const TheIco = getIco(type);
  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--${type}`}
      contentArrowStyle={{
        borderRight: "7px solid  rgb(33, 150, 243)",
      }}
      date={<h3>{date} </h3>}
      dateClassName={`time-date-element time-date-element-${align}`}
      iconClassName={`vertical-timeline-element--ico-${type}`}
      icon={<TheIco />}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>

      <p>{description}</p>
      {link && (
        <div className="vertical-time-line">
          <a href={link} alt={`link of ${title}`}>
            <ViewSvg className="svg" />
          </a>
        </div>
      )}
    </VerticalTimelineElement>
  );
};
export default TimeLineRow;
