import TimelineIcon from "@mui/icons-material/Timeline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";

function Staff() {
  return (
    <div className="side-section">
      <h4 className="title">Staff</h4>
      <ul className="menu">
        <Link to="/" className="link">
          <li>
            <WorkOutlineIcon className="icon" />
            Manage
          </li>
        </Link>
        <Link to="/" className="link">
          <li>
            <TimelineIcon className="icon" />
            Analytics
          </li>
        </Link>
        <Link to="/" className="link">
          <li>
            <ReportIcon className="icon" />
            Reports
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Staff;
