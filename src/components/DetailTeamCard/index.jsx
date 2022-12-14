import React, { useEffect } from 'react'
import './index.css'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import { useState } from 'react'


const DetailTeamCard = ({team}) => {
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
    var id = localStorage.getItem("id")
    const [username, setUsername] = useState("");

    useEffect(() => {
        // Get username
        axios.get("https://cs308-db.herokuapp.com/api/profiles/"+id).then(
        (res)=>{
            console.log(res)
            setUsername(res.data.fullname)
            
        }
        )
    }, [])
    
  const handleRouting = (route) => {
		window.location = route;
	};
    const joinTeam = () =>{       
        console.log(id)
        axios.put("https://cs308-db.herokuapp.com/api/teams/register/player/"+team._id+"/"+id, {lineup: {player_nickname: username, jersey_number: 88}}).then(
            (res) => {
                console.log(res);
                window.location = '/teamdetails/' + team._id;
            }
        )
    };

    const handleDeleteMember=(member)=>{
        axios.put("https://cs308-db.herokuapp.com/api/teams/delete/player/" + team._id + "/"+ member.user_id).then(
            (res) =>{
                console.log(res)
                window.location = '/teamdetails/' + team._id
            } 
        )

    }

  return (
    <div>
    <Navbar></Navbar>
    <div className="container">
       <div className="card_item" >
            <div className="card_inner">
                <h2>{team.team_name}</h2>
                <img src={"https://static.vecteezy.com/system/resources/previews/000/555/662/original/vector-soccer-badge.jpg"} alt="" />
                
                <ul>
                    {team && team.lineup.map((member,index)=>(<span>{index === 0 ? "Team Members: " : ""} {index !== 0 ? "," : ""} {member.player_name}  <button onClick={()=>handleDeleteMember(member)}>x</button></span>))}
                </ul>
                
                {
                    username && 
                    <button onClick={joinTeam}>Join Team</button>
                }
                <br></br>
                <button onClick={() => handleRouting('/teamlist')}>Go Back</button>
            </div>
            

        </div>        
    </div> 
    </div>
  )
}

export default DetailTeamCard