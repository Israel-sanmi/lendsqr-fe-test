import Dashboard from "./Components/Dashboard/Dashboard";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LogIn from "./Components/LogIn/LogIn";
import "./Styles/App.scss";
import Singleuser from "./Components/SingleUser/Singleuser";
import paginate from "./Components/Utilities/Paginate";

//
function App() {
  // as it's a test project, i'll be using props instead of contextapi or Redux to make it quite simpler
  type resultProps = {
    email: string;
    id: number;
    gender: string;
    username: string;
    createdAt: number;
    orgName: string;
    phoneNumber: number;
  };

  type fetchProps = {
    email: string;
    id: number;
    gender: string;
    username: string;
    createdAt: number;
    orgName: string;
    phoneNumber: number;
  };

  const [load, setLoad] = useState(false);
  const [addState, setAddState] = useState([]);
  //fetch users details from api
  const [users, setUsers] = useState<resultProps[]>([]);

  const [contain, setContain] = useState([]);

  useEffect(() => {
    contain.map((x: any) => {
      return console.log(x.id);
    });
  }, []);
  // console.log(addState);

  const fetchData = () => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(paginate(data));
        setLoad(true);
        setContain(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [userDetails, setUserDetails] = useState();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              users={users}
              load={load}
              contain={contain}
              setUserDetails={setUserDetails}
              userDetails={userDetails}
            />
          }
        />
        <Route
          path="/dashboard/:details"
          element={<Singleuser userDetails={userDetails} contain={contain} />}
        />
      </Routes>
    </div>
  );
}

export default App;
