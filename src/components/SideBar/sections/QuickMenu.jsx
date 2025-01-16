import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { Link } from "react-router-dom";

function QuickMenu() {
  return (
    <div className="side-section">
      <h4 className="title">Quick Menu</h4>
      <ul className="menu">
        <Link to="/users" className="link">
          <li>
            <GroupIcon className="icon" />
            Users
          </li>
        </Link>
        <Link to="/newUser" className="link">
          <li>
            <PersonAddIcon className="icon" />
            New Users
          </li>
        </Link>
        <Link to="/products" className="link">
          <li>
            <StorefrontIcon className="icon" />
            Products
          </li>
        </Link>
        <Link to="/" className="link">
          <li>
            <AttachMoneyIcon className="icon" />
            Transaction
          </li>
        </Link>
        <Link to="/" className="link">
          <li>
            <EqualizerIcon className="icon" />
            Reports
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default QuickMenu;
