import React from 'react'
import './index.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
const CompetitionCard = ({competition}) => {
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
    window.location = "/matchdetails/" + competition._id;
	};
  const registerCompetition = () => {
	};
  const deleteCompetition = () => {
    axios.delete("https://cs308-db.herokuapp.com/api/competition/delete/"+competition._id).then(
			(res) => {
				console.log(res);
				window.location = '/';
			}
		)
	};
  
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img  src={"https://seeklogo.com/images/U/UEFA_Champions_league-logo-76E1E8D3FA-seeklogo.com.png"} alt=''></img>
      </div>
      <div className='card-content'>
        <div className='card-title'>
          <h3>{competition.competition_name}</h3>
        </div>
        <div className='card-body'>
          <p> Competition Starts At: {competition.competition_start}
              <br></br>
              Competition Ends At: {competition.competition_end}
          </p>
        </div>

        <div className='btn'>
            <button  onClick={seeDetails} type='submit'>See Details</button>
            <button onClick={registerCompetition} type='submit'>Register Competition</button>
            {(user && user.is_admin) && <button onClick={deleteCompetition} type='submit'>Delete Competition</button>}
            
        </div>
      </div>        
    </div>
    
    
  )
}

export default CompetitionCard