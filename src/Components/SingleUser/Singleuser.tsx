import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaSpinner, FaStar } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import DetailsAtoms from "../Element/Atoms/DetailsAtoms";
import Dashnav from "../Element/DashNav/Dashnav";
import SideNav from "../Element/SideNav/SideNav";
import "./singleUser.scss";

const Singleuser = ({ userDetails, users, contain }: any) => {
  const { details }: any = useParams();

  type fetchProps = {
    email: string;
    gender: string;
    username: string;
    createdAt: number;
    orgName: string;
    phoneNumber: number;
  };

  return (
    <div>
      <div>
        <Dashnav />
      </div>
      <div className="details-body">
        <div>
          <SideNav />
        </div>
        <div className="details">
          <Link to="/dashboard" className="nav-back">
            {" "}
            <FaArrowLeft /> Back to Users
          </Link>
          <div className="details-body-header">
            <p className="user-details">User Details</p>
            <div className="options">
              <p className="blacklist">Blacklist User</p>
              <p className="activate">Activate User</p>
            </div>
          </div>
          <div>
            {contain.map((x: any) => {
              if (details == x.id) {
                return (
                  <div>
                    <div className="details-head-container">
                      <div className="details-board">
                        <div className="profile">
                          <img src={x.profile.avatar} alt="" />
                          <div>
                            <p className="user-name">
                              {`${x.profile.firstName}  ${x.profile.lastName}`}{" "}
                            </p>
                            <p className="user-account">{x.accountNumber}</p>
                          </div>
                        </div>
                        <div className="star">
                          <p>User’s Tier</p>
                          <FaStar className="full-star" />
                          <FaStar className="full-star" />
                          <FaStar className="full-star" />
                        </div>
                        <div>
                          <p className="balance">₦{x.accountBalance}</p>
                          <p className="bank-details">
                            9912345678/Providus Bank
                          </p>
                        </div>
                      </div>

                      <div className="links">
                        <p className="active">General Details</p>
                        <p>Documents</p>
                        <p>Bank Details</p>
                        <p>Loans</p>
                        <p>Savings</p>
                        <p>App and System</p>
                      </div>
                    </div>
                    <div className="details-content">
                      <div>
                        <p className="content-header">Personal Information</p>
                        <div className="personal">
                          <DetailsAtoms
                            title="full Name"
                            info={`${x.profile.firstName}  ${x.profile.lastName}`}
                          />
                          <DetailsAtoms
                            title="Phone Number"
                            info={x.phoneNumber}
                          />
                          <DetailsAtoms title="Email Address" info={x.email} />
                          <DetailsAtoms title="Bvn" info={x.profile.bvn} />
                          <DetailsAtoms
                            title="Gender"
                            info={x.profile.gender}
                          />
                          <DetailsAtoms title="Marital status" info="Married" />
                          <DetailsAtoms title="Children" info="None" />
                          <DetailsAtoms
                            title="Type of residence"
                            info={x.profile.address}
                          />
                        </div>
                      </div>
                      <div>
                        <p className="content-header">
                          Education and Employment
                        </p>
                        <div className="personal">
                          <DetailsAtoms
                            title="level of education"
                            info={x.education.level}
                          />
                          <DetailsAtoms
                            title="employment status"
                            info={x.education.employmentStatus}
                          />
                          <DetailsAtoms
                            title="sector of employment"
                            info={x.education.sector}
                          />
                          <DetailsAtoms
                            title="Duration of employment"
                            info={x.education.duration}
                          />
                          <DetailsAtoms
                            title="office email"
                            info={x.education.officeEmail}
                          />
                          <DetailsAtoms
                            title="Monthly income"
                            info={`₦${x.education.monthlyIncome[0]} - ₦${x.education.monthlyIncome[1]}`}
                          />
                          <DetailsAtoms
                            title="loan repayment"
                            info={x.education.loanRepayment}
                          />
                        </div>
                      </div>
                      <div>
                        <p className="content-header">Socials</p>
                        <div className="personal">
                          <DetailsAtoms
                            title="Twitter"
                            info={x.socials.twitter}
                          />
                          <DetailsAtoms
                            title="Facebook"
                            info={x.socials.facebook}
                          />
                          <DetailsAtoms
                            title="Instagram"
                            info={x.socials.instagram}
                          />
                        </div>
                      </div>
                      <div>
                        <p className="content-header">Guarantor</p>
                        <div className="personal">
                          <DetailsAtoms
                            title="full Name"
                            info={`${x.guarantor.firstName} ${x.guarantor.lastName}`}
                          />
                          <DetailsAtoms
                            title="Phone Number"
                            info={x.guarantor.phoneNumber}
                          />
                          <DetailsAtoms
                            title="Email Address"
                            info="xyz@gmail.com"
                          />
                          <DetailsAtoms title="Relationship" info="Fiancee" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Singleuser;
