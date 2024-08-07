import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimeLineRow from "../time-line-row/time-line-row.component";
import { ReactComponent as Rocket } from "../../assets/Rocket.svg";
const TimeLine = ({ timeLine }) => {
  return (
    <VerticalTimeline>
      {timeLine.map((row, index) => {
        const align = index % 2 === 0;
        return <TimeLineRow key={index} row={row} align={align} />;
      })}

      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<Rocket />}
      />
    </VerticalTimeline>
  );
};
export default TimeLine;
