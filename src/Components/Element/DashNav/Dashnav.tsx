import React from "react";
import { FaBell, FaSearch, FaChevronDown } from "react-icons/fa";
import logo from "../../../assets/lendLogo.png";
import profileImage from "../../../assets/Dashboard/profileImage.png";
import './Dashnav.scss'

const Dashnav = () => {
  return (
    <div>
      <div className="dash-head">
        <div className="login-logo">
          <img src={logo} alt="" />
          <p>lendsqr</p>
        </div>
        <div className="dash-search">
          <input type="text" placeholder="Search for anything" />
          <button className="searchBtn">
            <FaSearch />
          </button>
        </div>
        <div className="dash-profile">
          <p>Docs</p>
          <FaBell className="notification" />
          <img src={profileImage} alt="" />
          <h1>Adedeji</h1>
           <FaChevronDown className="dropDown" />
        </div>
      </div>
    </div>
  );
};

export default Dashnav;
