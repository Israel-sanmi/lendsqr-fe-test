import React from "react";
import "./dashboard.scss";
import { ImUsers } from "react-icons/im";
import { FaUsers, FaCoins } from "react-icons/fa";
import { AiOutlineAudit } from "react-icons/ai";
import Dashnav from "../Element/DashNav/Dashnav";
import SideNav from "../Element/SideNav/SideNav";
import Users from "../Users/Users";

const Dashboard = ({ users, load, contain }: any) => {
  return (
    <div className="dashboard">
      <div>
        <Dashnav />
      </div>
      <div className="dash-body">
        <div>
          <SideNav />
        </div>
        <div className="dash-body-II">
          <h1 className="user">Users</h1>
          <div className="users-info-cards">
            <div className="user-info-card">
              <p>USERS</p>
              <ImUsers className="users-icon" />
              <h5>100</h5>
            </div>
            <div className="user-info-card">
              <p>ACTIVE USERS</p>
              <FaUsers className="active-users-icon" />
              <h5>23</h5>
            </div>
            <div className="user-info-card">
              <p>USERS WITH LOANS</p>
              <AiOutlineAudit className="loan-icon" />
              <h5>13</h5>
            </div>
            <div className="user-info-card">
              <p>USERS WITH SAVINGS</p>
              <FaCoins className="savings-icon" />
              <h5>53</h5>
            </div>
          </div>
          <div>
            <Users users={users} load={load} contain={contain} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
