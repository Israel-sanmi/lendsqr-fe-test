import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import "./users.scss";

const Users = ({ users }: any) => {
  console.log(users, "cxx");
  const columns: GridColDef[] = [
    {
      field: "Organization",
      headerName: "Organization",
      width: 200,
      minWidth: 150,
      maxWidth: 300,
      resizable: true,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className="org">
            <p>{params.row.orgName}</p>
          </div>
        );
      },
    },
    {
      field: "Username",
      headerName: "Username",
      width: 150,
      headerAlign: "center",
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.profile.firstName || ""} ${
          params.row.profile.lastName || ""
        }`,
    },
    {
      field: "Email",
      headerName: "Email",
      width: 200,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div>
            <p>{params.row.email}</p>
          </div>
        );
      },
    },
    {
      field: "Phone number",
      headerName: "Phone number",
      type: "number",
      width: 150,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div>
            <p>{params.row.profile.phoneNumber}</p>
          </div>
        );
      },
    },
    {
      field: "Date joined",
      headerName: "Date joined",
      width: 150,
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div>
            <p>{params.row.createdAt}</p>
          </div>
        );
      },
    },
    {
      field: "Status",
      headerName: "Status",
      width: 100,
      headerAlign: "center",
    },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
  ];

  return (
    <div className="users">
      {/* {
              users.map((user:any) => {
                  return (
                    <>
                      <p>{user.phoneNumber}</p>
                    </>
                  );
              })
          } */}
      <Box sx={{ height: 620, width: "100%" }}>
        <DataGrid
          sx={{
            borderColor: "border: 1px solid rgba(33, 63, 125, 0.06);",
            outline: "none",
            borderRadius: "4px",
          }}
          rows={users}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[6]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
};

export default Users;
