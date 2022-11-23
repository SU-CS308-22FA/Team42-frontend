import React from 'react'
import './index.css'
import Navbar from '../Navbar/Navbar'

const DetailCompetitionCard = ({competition}) => {
  const handleRouting = (route) => {
		window.location = route;
	};
  if (competition.competition_youth){
    var youth = "Under 18"
  }
  else{
    var youth = "Over 18"
  }
  return (
    <div>
    <Navbar></Navbar>
    <div className="container">
       <div className="card_item" >
            <div className="card_inner">
                <h2>{competition.competition_name}</h2>
                <img src={"https://www.freepnglogos.com/uploads/trophy-png/trophy-award-winner-png-33.png"} alt="" />
                <div className="detail-box">
                    <div className="gitDetail"><span> {youth} Tournament </span></div>
                    <div className="gitDetail"><span> Competition Starts At: {competition.competition_start} </span></div>
                    <div className="gitDetail"><span> Competition Ends At: {competition.competition_end} </span></div>
                </div>
                <p className='bio'>MORE DETAILS WILL BE DISPLAYED HERE
                <br></br>
                <br></br>
                Prize of the event: ####
                <br></br>
                Registered Teams: ####
                <br></br>
                


                
                </p>

                <button onClick={() => handleRouting('/')}>Go Back</button>
            </div>
            

        </div>        
    </div> 
    </div>
  )
}

export default DetailCompetitionCard