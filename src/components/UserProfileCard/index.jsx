import React from 'react'
import './index.css'
import CreateEventModal from '../CreateEventModal';
import CreateTeamModal from '../CreateTeamModal';
import axios from 'axios';

const UserCard = ({user}) => {
  const deleteUser = () => {
		axios.delete("https://cs308-db.herokuapp.com/api/profiles/delete/"+user._id).then(
			(res) => {
				console.log(res);
				window.location = '/login';
			}
		)
	}
  const addFriend = () =>{

  }
  return (
    <div className="container">
       <div className="card_item" >
            <div className="card_inner">
                <img src={"https://cdn-icons-png.flaticon.com/512/219/219983.png"} alt="" />
                <div className="detail-box">
                    <div className="gitDetail"><span>{user.fullname} </span></div>
                    <div className="gitDetail"><span>{user.email} </span></div>
                    <div className="gitDetail"><span>{user.phone} </span></div>
                </div>
                <p className='bio'>STATISTICS WILL BE DISPLAYED HERE</p>
                
               
                
            </div>
            

        </div>        
    </div>           
  
  )
}

export default UserCard