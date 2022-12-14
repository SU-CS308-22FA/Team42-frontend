import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import TeamCard from '../../components/TeamCard';
import Navbar from '../../components/Navbar/Navbar';
import './index.css'

const TeamListPage = () => {
    const [teams, setTeams] = useState([]);

    const fetchTeams = async() => {
        const res = await axios.get("https://cs308-db.herokuapp.com/api/teams")
        setTeams(res.data)
    }

    useEffect(()=>{
        fetchTeams();
    },[])
    

  return (  
    <div>
        <Navbar></Navbar>
        <h1 className='title'> LIST OF TEAMS </h1>
        <ul>
            {teams.map((team,idx)=>(
                <TeamCard team={team}></TeamCard>
            ))}
        </ul>
    </div>
  )
}

export default TeamListPage