import VisibilityIcon from "@mui/icons-material/Visibility";
import { userData } from "./userData";

function NewUser() {
  return (
    <div className="layoutCardFirst">
      <h3 className="homeTitle">New joined users</h3>
      <ul className="userList">
        {userData.map((user, index) => (
          <li key={index} className="userListItem">
            <img
              src="./assets/images/user.png"
              alt="user"
              className="userImg"
            />
            <div className="fcContainer">
              <span className="userName">{user.name}</span>
              <span className="userSkill">{user.skill}</span>
            </div>
            <span className="userVisibility">
              <VisibilityIcon />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewUser;
