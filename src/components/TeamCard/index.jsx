import React from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
import './index.css'
import { useEffect, useState } from 'react';

const TeamCard = ({team}) => {
    const [user, setUser] = useState();
	useEffect(() => {
		const getUser = async () => {
			try{
				var id = localStorage.getItem("id");
				console.log(id);
				var myUser = await axios.get("https://cs308-db.herokuapp.com/api/profiles/" + id);
				setUser(myUser.data)

			}catch(e)
			{

			}
			
		}
	
		getUser();
	}, [])
    const seeDetails = () => {
        window.location = "/teamdetails/" + team._id;
        };
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
                <button  onClick={seeDetails} type='submit'>See Details</button>
                {(user && user.is_admin) && <button onClick={deleteTeam}>Delete Team</button>}
                
                <br></br>
                <br></br>
            </div>
        </div>
    </div>
  )
}

export default TeamCard