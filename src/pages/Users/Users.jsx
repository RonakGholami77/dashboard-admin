import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { DataUsers } from "./usersData";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import "./users.css";
import { useState } from "react";

function Users() {
  const [usersData, setUsersData] = useState(DataUsers);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User Name",
      width: 300,
      renderCell: (params) => {
        return (
          <Link to={`/user/${params.row.id}`} className="link">
            <div className="userContainer">
              <img src={params.row.image} alt="user" className="userImg" />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    { field: "status", headerName: "Status", width: 140 },
    { field: "transaction", headerName: "Transaction", width: 140 },
    {
      field: "action",
      headerName: "Action",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="actionContainer">
            <Link to={`/user/${params.row.id}`}>
              <button className="editBtn">Edit</button>
            </Link>
            <DeleteIcon
              className="deleteIcon"
              onClick={() => deleteUserHandler(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  function deleteUserHandler(userId) {
    return setUsersData(usersData.filter((user) => user.id !== userId));
  }

  return (
    <Box className="users">
      <DataGrid
        rows={usersData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
      />
    </Box>
  );
}

export default Users;
