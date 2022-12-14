import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DetailTeamCard from '../../components/DetailTeamCard';

const DetailTeamPage = () => {
    const [team, setTeam] = useState();

    var path = window.location.pathname;
    var directories = path.split("/");
    var lastDirecotry = directories[(directories.length - 1)];

    const fetchCompetition = async() => {
        const res = await axios.get( "https://cs308-db.herokuapp.com/api/teams/" + lastDirecotry ) 
        setTeam(res.data)
    }

    useEffect(()=>{
        fetchCompetition();
    },[])
  return (
    <div>{ team && 
      <DetailTeamCard team={team}></DetailTeamCard>

      }
    </div>
  )
}

export default DetailTeamPage