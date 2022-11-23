import React from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
import './index.css'

const TeamCard = ({team}) => {
    const deleteTeam = () => {
        axios.delete("https://cs308-db.herokuapp.com/api/teams/delete/"+team._id).then(
                (res) => {
                    console.log(res);
                    window.location = '/teamlist';
                }
            )
        };
  return (
    <div>
        <div className='teamcard'>
            <div className='teamcontent'>
                <img style={{width: 120, height: 120, borderRadius: 120/ 2}} src='https://static.vecteezy.com/system/resources/previews/000/555/662/original/vector-soccer-badge.jpg'></img>
                <h2 className='teamname'> {team.team_name} </h2>
                <button onClick={deleteTeam}>Delete Team</button>
                <br></br>
                <br></br>
            </div>
        </div>
    </div>
  )
}

export default TeamCard