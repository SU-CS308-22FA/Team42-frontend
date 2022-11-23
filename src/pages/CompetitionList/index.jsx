import React, { useEffect } from 'react'
import CompetitionCard from '../../components/CompetitionCard'
import { useState } from 'react';
import axios from 'axios';

const CompetitionList = () => {
    const [competitions, setCompetitions] = useState([]);

    const fetchCompetitions = async() => {
        const response = await axios.get("https://cs308-db.herokuapp.com/api/competition")
        setCompetitions(response.data)
    }

    useEffect(()=>{
        fetchCompetitions();
    },[])

  return (
    <div>
        <ul>
            {competitions.map((competition, idx)=> (
                        <CompetitionCard competition={competition} key={idx} />
                  
            ))}
            
        </ul>
    </div>
  )
}

export default CompetitionList