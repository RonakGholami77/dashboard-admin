import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Link } from "react-router-dom";

function Notifications() {
  return (
    <div className="side-section">
      <h4 className="title">Notifications</h4>
      <ul className="menu">
        <Link to="/">
          <li>
            <MailOutlineIcon className="icon" />
            Mail
          </li>
        </Link>
        <Link to="/">
          <li>
            <DynamicFeedIcon className="icon" />
            Feedback
          </li>
        </Link>
        <Link to="/">
          <li>
            <ChatBubbleOutlineIcon className="icon" />
            Messages
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Notifications;
