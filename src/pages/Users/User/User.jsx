import { useParams } from "react-router-dom";
import { usersData } from "../../../shared/userData";
import { transactionData } from "../../../shared/salesData";
import "./user.css";
import { useState } from "react";

function User() {
  const param = useParams();
  const parseParam = parseInt(param.idUser);

  const person = usersData.find((user) => user.id === parseParam);

  const transaction = transactionData.find(
    (user) => user.name === person.username
  );

  console.log(person);

  return (
    <div className="profileUser">
      <div className="profileContainer">
        <div className="profileContainerTop">
          <div className="profileContainerLeft flexOne layout">
            <img src={person.image} alt="profile" className="profileImg" />
            <div>
              <h2 className="profileName">{person.username}</h2>
              <span className="profileSkill">{person.skill}</span>
            </div>
          </div>

          <div className="profileContainerRight flexFour layout">
            <ul className="profileList flexOne">
              <li className="profileListItem">
                Email:
                <span className="profileItem">{person.email}</span>
              </li>
              <li className="profileListItem">
                Phone:
                <span className="profileItem">0{person.phone}</span>
              </li>
              <li className="profileListItem">
                Status:
                <span className="profileItem">{person.status}</span>
              </li>
              <li className="profileListItem">
                Total transaction:
                <span className="profileItem">{person.transaction}</span>
              </li>
            </ul>

            <div className="tableTransaction flexTwo">
              <h3>Last Transaction</h3>
              <div className="radious">
                <table class="styled-table">
                  <tbody class="t-body">
                    {transaction.transaction.map((trans, index) => (
                      <tr key={index}>
                        <td>{trans.amount}</td>
                        <td>{trans.date}</td>
                        <td>{trans.status}</td>
                        <td>
                          <a href="#" onclick="">
                            Show
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="profileContainerBottom">
          <div className="layout height">Nothing...</div>
        </div>
      </div>
    </div>
  );
}

export default User;
