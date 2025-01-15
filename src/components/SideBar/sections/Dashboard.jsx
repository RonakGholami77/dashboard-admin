import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="side-section">
      <h4 className="title">Dashboard</h4>
      <ul className="menu">
        <Link to="/">
          <li>
            <LineStyleIcon className="icon" />
            Home
          </li>
        </Link>
        <Link to="/">
          <li>
            <TimelineIcon className="icon" />
            Analytics
          </li>
        </Link>
        <Link to="/">
          <li>
            <TrendingUpIcon className="icon" />
            Sales
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Dashboard;
