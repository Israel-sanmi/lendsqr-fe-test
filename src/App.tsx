import Dashboard from './Components/Dashboard/Dashboard'
import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import LogIn from './Components/LogIn/LogIn'
import './Styles/App.scss'

function App() {
// as it's a test project, i'll be using props instead of contextapi or Redux to make it quite simpler
type resultProps = {
  email: string;
  gender: string;
  username: string;
  createdAt: number;
  orgName: string;
  phoneNumber: number;
};
  
  //fetch users details from api
   const [users, setUsers] = useState<resultProps[]>([]);

   const fetchData = () => {
     fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
       .then((response) => {
         return response.json();
       })
       .then((data) => {
         setUsers(data);
       });
   };

   useEffect(() => {
     fetchData();
   }, []);


  return (
    <div className="App">
      {/* 
     */}

      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/dashboard' element={  <Dashboard users={users} /> }/>
      </Routes>
    </div>
  )
}

export default App
