import React, { useEffect, useRef, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";
import "./users.scss";
import { FaChevronLeft, FaChevronRight, FaEye, FaSpinner, FaUserCheck, FaUserMinus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
// import useRefClick from '../Utilities/useRefClick'

const Users = ({ users, load, contain, setUserDetails, userDetails }: any) => {
  type fetchProps = {
    email: string;
    id: number;
    gender: string;
    username: string;
    createdAt: number;
    orgName: string;
    phoneNumber: number;
  };

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const handlePage = (index: any) => {
    setPage(index);
  };

  const prevPage = () => {
    setPage((old) => {
      let prevPage = old - 1;
      if (prevPage < 0) {
        prevPage = users.length - 1;
      }
      return prevPage;
    });
  };
  const nextPage = () => {
    setPage((old) => {
      let nextPage = old + 1;
      if (nextPage > users.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  useEffect(() => {
    setData(users[page]);
  }, [page, users]);

  const [filteredItem, setFilteredItem] = useState([]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    const filterFunct = contain.filter((x: any) => {
      return (
        x.orgName === data.org ||
        x.userName === data.user ||
        x.email === data.email ||
        x.createdAt === data.date ||
        x.phoneNumber === data.phone
      );
    });
    setFilteredItem(filterFunct);
  };

  const [dropFilter, setdropFilter] = useState(false);
  const dropFunct = () => {
    setdropFilter((prev) => !prev);
  };
  const [dropFilterA, setdropFilterA] = useState(false);
  const dropFunctA = () => {
    setdropFilterA((prev) => !prev);
  };
  const [dropFilterB, setdropFilterB] = useState(false);
  const dropFunctB = () => {
    setdropFilterB((prev) => !prev);
  };
  const [dropFilterC, setdropFilterC] = useState(false);
  const dropFunctC = () => {
    setdropFilterC((prev) => !prev);
  };
  const [dropFilterD, setdropFilterD] = useState(false);
  const dropFunctD = () => {
    setdropFilterD((prev) => !prev);
  };

  const [options, setOptions] = useState(false);

  return (
    <div className="users">
      <div>
        {load ? (
          <table>
            <thead>
              <tr>
                <th>
                  organization{" "}
                  <BiFilter onClick={dropFunct} className="filter" />
                  {dropFilter && (
                    <>
                      <form className="filter-form" onSubmit={handleSubmit(onSubmit)}>
                        <label>Organization</label>
                        <select {...register("org")}>
                          <option value="">Select</option>
                          {contain.map((x: any) => {
                            return (
                              <option value={x.orgName}>{x.orgName}</option>
                            );
                          })}
                        </select>
                        <label>Username</label>
                        <input
                          {...register("user")}
                          type="text"
                          placeholder="User"
                        />
                        <label>Email</label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="Email"
                        />
                        <label>Date</label>
                        <input
                          {...register("date")}
                          type="text"
                          placeholder="Date"
                        />
                        <label>Phone number</label>
                        <input
                          {...register("phone")}
                          type="text"
                          placeholder="Phone Number"
                        />
                        <div>
                          <button className="reset" type="reset">
                            Reset
                          </button>
                          <button className="submit" type="submit">
                            Filter
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </th>
                <th>
                  username <BiFilter onClick={dropFunctA} className="filter" />
                  {dropFilterA && (
                    <>
                      <form className="filter-form" onSubmit={handleSubmit(onSubmit)}>
                        <label>Organization</label>
                        <select {...register("org")}>
                          {contain.map((x: any) => {
                            return (
                              <option value={x.orgName}>{x.orgName}</option>
                            );
                          })}
                        </select>
                        <label>Username</label>
                        <input
                          {...register("user")}
                          type="text"
                          placeholder="User"
                        />
                        <label>Email</label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="Email"
                        />
                        <label>Date</label>
                        <input
                          {...register("date")}
                          type="text"
                          placeholder="Date"
                        />
                        <label>Phone number</label>
                        <input
                          {...register("phone")}
                          type="text"
                          placeholder="Phone Number"
                        />
                        <div>
                          <button className="reset" type="reset">
                            Reset
                          </button>
                          <button className="submit" type="submit">
                            Filter
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </th>
                <th>
                  Email <BiFilter onClick={dropFunctB} className="filter" />
                  {dropFilterB && (
                    <>
                      <form className="filter-form" onSubmit={handleSubmit(onSubmit)}>
                        <label>Organization</label>
                        <select {...register("org")}>
                          {contain.map((x: any) => {
                            return (
                              <option value={x.orgName}>{x.orgName}</option>
                            );
                          })}
                        </select>
                        <label>Username</label>
                        <input
                          {...register("user")}
                          type="text"
                          placeholder="User"
                        />
                        <label>Email</label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="Email"
                        />
                        <label>Date</label>
                        <input
                          {...register("date")}
                          type="text"
                          placeholder="Date"
                        />
                        <label>Phone number</label>
                        <input
                          {...register("phone")}
                          type="text"
                          placeholder="Phone Number"
                        />
                        <div>
                          <button className="reset" type="reset">
                            Reset
                          </button>
                          <button className="submit" type="submit">
                            Filter
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </th>
                <th>
                  Phone number{" "}
                  <BiFilter onClick={dropFunctC} className="filter" />
                  {dropFilterC && (
                    <>
                      <form className="filter-form" onSubmit={handleSubmit(onSubmit)}>
                        <label>Organization</label>
                        <select {...register("org")}>
                          {contain.map((x: any) => {
                            return (
                              <option value={x.orgName}>{x.orgName}</option>
                            );
                          })}
                        </select>
                        <label>Username</label>
                        <input
                          {...register("user")}
                          type="text"
                          placeholder="User"
                        />
                        <label>Email</label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="Email"
                        />
                        <label>Date</label>
                        <input
                          {...register("date")}
                          type="text"
                          placeholder="Date"
                        />
                        <label>Phone number</label>
                        <input
                          {...register("phone")}
                          type="text"
                          placeholder="Phone Number"
                        />
                        <div>
                          <button className="reset" type="reset">
                            Reset
                          </button>
                          <button className="submit" type="submit">
                            Filter
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </th>
                <th>
                  date joined{" "}
                  <BiFilter onClick={dropFunctD} className="filter" />
                  {dropFilterD && (
                    <>
                      <form className="filter-form" onSubmit={handleSubmit(onSubmit)}>
                        <label>Organization</label>
                        <select {...register("org")}>
                          {contain.map((x: any) => {
                            return (
                              <option value={x.orgName}>{x.orgName}</option>
                            );
                          })}
                        </select>
                        <label>Username</label>
                        <input
                          {...register("user")}
                          type="text"
                          placeholder="User"
                        />
                        <label>Email</label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="Email"
                        />
                        <label>Date</label>
                        <input
                          {...register("date")}
                          type="text"
                          placeholder="Date"
                        />
                        <label>Phone number</label>
                        <input
                          {...register("phone")}
                          type="text"
                          placeholder="Phone Number"
                        />
                        <div>
                          <button className="reset" type="reset">
                            Reset
                          </button>
                          <button className="submit" type="submit">
                            Filter
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredItem.length
                ? filteredItem.map((x: any) => {
                    return (
                      <>
                        <tr key={x.id}>
                          <td className="org">{x.orgName}</td>
                          <td>{x.userName}</td>
                          <td>{x.email}</td>
                          <td>{x.phoneNumber}</td>
                          <td>{x.createdAt}</td>
                          <td>
                            <HiDotsVertical
                              onClick={() => {
                                if (x.id === x.id) {
                                  setOptions((prev) => !prev);
                                }
                              }}
                              className="others"
                            />
                            {options && (
                              <div className="side-modal">
                                <Link to={`/dashboard/${x.id}`}>
                                  <p>
                                    <FaEye /> View user
                                  </p>
                                </Link>
                                <p>
                                  <FaUserMinus /> Delete user
                                </p>
                                <p>
                                  <FaUserCheck /> Activate user
                                </p>
                              </div>
                            )}
                          </td>
                        </tr>
                      </>
                    );
                  })
                : data?.map((user: any) => {
                    return (
                      <>
                        <tr key={user.id}>
                          <td className="org">{user.orgName}</td>
                          <td>{user.userName}</td>
                          <td>{user.email}</td>
                          <td>{user.phoneNumber}</td>
                          <td>{user.createdAt}</td>
                          <td>
                            <HiDotsVertical
                              onClick={() => {
                                if (user.id === user.id) {
                                  setOptions((prev) => !prev);
                                }
                              }}
                              className="others"
                            />
                            {options && (
                              <div className="side-modal">
                                <Link to={`/dashboard/${user.id}`}>
                                  <p>
                                   <FaEye/> View user
                                  </p>
                                </Link>
                                <p><FaUserMinus/>  Delete user</p>
                                <p><FaUserCheck/> Activate user</p>
                              </div>
                            )}
                          </td>
                        </tr>
                      </>
                    );
                  })}
            </tbody>
          </table>
        ) : (
          <FaSpinner className="spinner" />
        )}
        <div>
          <div className="switchPage">
            <button className="moveBtn" onClick={prevPage}>
              <p>
                {" "}
                <FaChevronLeft />{" "}
              </p>
            </button>
            {users.map((item: any, index: any) => {
              return (
                <button
                  className="page-number"
                  key={index}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="moveBtn" onClick={nextPage}>
              <p>
                <FaChevronRight />
              </p>
            </button>
          </div>
        </div>
        <div>
          {userDetails}
        </div>
      </div>
    </div>
  );
};

export default Users;
