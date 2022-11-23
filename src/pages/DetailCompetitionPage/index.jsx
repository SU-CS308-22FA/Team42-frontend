import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DetailCompetitionCard from '../../components/DetailCompetitionCard';

const DetailCompetitionPage = () => {
    const [competition, setCompetition] = useState();

    var path = window.location.pathname;
    var directories = path.split("/");
    var lastDirecotry = directories[(directories.length - 1)];

    const fetchCompetition = async() => {
        const res = await axios.get( "https://cs308-db.herokuapp.com/api/competition/" + lastDirecotry ) 
        setCompetition(res.data)
    }

    useEffect(()=>{
        fetchCompetition();
    },[])
  return (
    <div>{ competition && 
      <DetailCompetitionCard competition={competition}></DetailCompetitionCard>

      }
    </div>
  )
}

export default DetailCompetitionPage