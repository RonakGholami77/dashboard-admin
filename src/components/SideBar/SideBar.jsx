import "./sideBar.css";
import Dashboard from "./sections/Dashboard";
import QuickMenu from "./sections/QuickMenu";
import Notifications from "./sections/Notifications";
import Staff from "./sections/Staff";

function SideBar() {
  return (
    <div className="side-bar">
      <div className="container">
        <Dashboard />
        <QuickMenu />
        <Notifications />
        <Staff />
      </div>
    </div>
  );
}

export default SideBar;
