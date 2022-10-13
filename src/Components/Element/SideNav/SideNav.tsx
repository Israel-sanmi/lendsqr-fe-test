import React, { useState } from "react";
import { FaBriefcase, FaChevronDown, FaHandshake, FaPiggyBank, FaUserCheck, FaUserTimes, FaBuilding, FaCoins, FaUserCog, FaScroll, FaPercentage, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {GiReceiveMoney} from 'react-icons/gi'
import {GrTransaction, GrServices} from 'react-icons/gr'
import {GiPayMoney} from 'react-icons/gi'
import {AiOutlineAudit} from 'react-icons/ai'
import {GoGraph, GoSettings} from 'react-icons/go'
import {ImUsers} from 'react-icons/im'
import NavTabs from "../NavTabs/NavTabs";
import { FaHome, FaUsers } from "react-icons/fa";
import './sideNav.scss'

const SideNav = () => {
    const [open, setOpen] = useState(false)

    const side = () => {
        setOpen(prev => !prev)
    }
    return (
        <div className={open ? "side-nav" : "close-nav"}>
            <div className={open ? "hide" : "unhide"}>
                { !open ? <FaArrowRight onClick={side}/> : <FaArrowLeft onClick={side}/>}
            </div>
        <div>
          <div>
            <div className="sideHead">
              <FaBriefcase />
              <p>Switch Organization</p>
              <FaChevronDown />
            </div>
                    <div className="side-tabs">
                        <NavTabs />
                    <div>
                        <NavTabs
                            tabDesc="Dashboard"
                            tabIcon=<FaHome/>
                        />
                            <h1>CUSTOMERS</h1>
                            <div>
                                <div className="active-nav">
                                     <NavTabs
                            tabDesc="Users"
                            tabIcon=<ImUsers/>
                        />
                               </div>
                                <NavTabs
                            tabDesc="Guarantors"
                            tabIcon=<FaUsers/>
                        />
                                <NavTabs
                            tabDesc="Loans"
                            tabIcon=<GiPayMoney/>
                        />
                                <NavTabs
                            tabDesc="Decision Models"
                            tabIcon=<FaHandshake/>
                        />
                                <NavTabs
                            tabDesc="Savings"
                            tabIcon=<FaUserTimes/>
                        />
                                <NavTabs
                            tabDesc="Loan Request"
                            tabIcon=<GiReceiveMoney/>
                        />
                                <NavTabs
                            tabDesc="WhiteList"
                            tabIcon=<FaUserCheck/>
                        />
                                <NavTabs
                            tabDesc="Karma"
                            tabIcon=<FaPiggyBank/>
                        />
                            </div>
                            <h1>BUSINESSES</h1>
                            <NavTabs
                            tabDesc="Organization"
                            tabIcon=<FaBriefcase/>
                        />
                            <NavTabs
                            tabDesc="Loan Products"
                            tabIcon=<FaPiggyBank/>
                        />
                            <NavTabs
                            tabDesc="Savings Products"
                            tabIcon=<FaBuilding/>
                        />
                            <NavTabs
                            tabDesc="Fees and Charges"
                            tabIcon=<FaCoins/>
                        />
                            <NavTabs
                            tabDesc="Transactions"
                            tabIcon=<GrTransaction/>
                        />
                            <NavTabs
                            tabDesc="Services"
                            tabIcon=<GrServices/>
                        />
                            <NavTabs
                            tabDesc="Service Accounts"
                            tabIcon=<FaUserCog/>
                        />
                            <NavTabs
                            tabDesc="Settlements"
                            tabIcon=<FaScroll/>
                        />
                            <NavTabs
                            tabDesc="Reports"
                            tabIcon=<GoGraph/>
                            />
                            <h1>SETTINGS</h1>
                            <NavTabs
                            tabDesc="Preferences"
                            tabIcon=<GoSettings/>
                            />
                            <NavTabs
                            tabDesc="Fees and Pricing"
                            tabIcon=<FaPercentage/>
                            />
                            <NavTabs
                            tabDesc="Audit Logs"
                            tabIcon=<AiOutlineAudit/>
                            />
                    </div>
                    </div>
          </div>
        </div>
      </div>
    );
};

export default SideNav;
