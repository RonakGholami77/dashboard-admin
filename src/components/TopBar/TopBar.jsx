import "./topBar.css";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";

function TopBar() {
  const [notif, setNotif] = useState("2");
  const [language, setLanguage] = useState("3");
  const [setting, setSetting] = useState("1");
  const [image, setImage] = useState("");

  return (
    <div className="topbar">
      <div className="left-container">Kiawaan💖</div>
      <div className="right-container">
        <div className="icon">
          <NotificationsNoneIcon />
          {notif && <span className="notif-badge">{notif}</span>}
        </div>
        <div className="icon">
          <LanguageIcon />
          {language && <span className="notif-badge">{language}</span>}
        </div>
        <div className="icon">
          <SettingsIcon />
          {setting && <span className="notif-badge">{setting}</span>}
        </div>
        <div className="profile-img">
          <img
            src={image ? { image } : "./assets/images/jihon.jpeg"}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
