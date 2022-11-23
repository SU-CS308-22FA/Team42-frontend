import {
    Routes,
    Route
  } from "react-router-dom";

import Home from '../pages/Main/index.jsx';
import Profile from "../pages/Profile/index.jsx";
import Login from "../pages/Login/index.jsx";
import Signup from "../pages/Signup/index.jsx"
import DetailCompetitionPage from "../pages/DetailCompetitionPage/index.jsx";
import TeamListPage from "../pages/TeamList/index.jsx";
import ChangeInfo from "../pages/ChangeInfo/index.jsx";

export default function MainRouter()
{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path= {"/matchdetails/" + "*"}  element={<DetailCompetitionPage/>} />
            <Route path= {"/teamlist"}  element={<TeamListPage/>} />
            <Route path= {"/changeinfo"} element={<ChangeInfo/>} />
        </Routes>
    );
}