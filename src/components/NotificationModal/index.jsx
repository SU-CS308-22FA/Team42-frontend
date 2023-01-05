import React from 'react';
import "./index.css"
import axios from 'axios';
import { useState } from 'react';


const NotificationModal = ({ open, onClose }) => {
  var id = localStorage.getItem("id");
	const [data, setData] = useState({ recipient: id });
  const [not, setNot] = useState([]);
  const [reqs, setReqs] = useState({});
  const [refresh, setRefresh] = useState({});


  const postNotifications = async (e) =>{
		const res = await axios.post("https://cs308-db.herokuapp.com/api/friend/requeststome", data )
    setNot(res.data)
    var requester = not.data.requesttome.requester;
    const name = await axios.get("https://cs308-db.herokuapp.com/api/profiles/" + requester)
    var requesterName = name.data.fullname;
    var reqiq = not.data.requesttome._id
    setReqs({name: requesterName, id: requester, reqid: reqiq})
    console.log(requesterName)
    console.log(not)
	}

  const acceptRequest = async (e) => {
    const ress = await axios.put("https://cs308-db.herokuapp.com/api/profiles/add/friend/" + id, {"_id": reqs.id});
    const res = await axios.delete("https://cs308-db.herokuapp.com/api/delete_requests/"+ reqs.reqid)
    window.location = "/"

    
  }

  const rejectRequest = async (e) => {
    console.log(reqs)
    const res = await axios.delete("https://cs308-db.herokuapp.com/api/delete_requests/"+ reqs.reqid)
    window.location = "/"
  }
  


    if (!open) return null;
    return (
      <div onClick={onClose} className='overlay'>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
          <img src="https://cdn-icons-png.flaticon.com/512/1827/1827301.png" alt='/' />
          <div className='modalRight'>
            <p className='closeBtn' onClick={onClose}>
              X
            </p>
            <div className='content'>
            <button onClick={postNotifications}>see notifications</button>
              <p>
              {
                Object.keys(reqs).length !== 0 && 
                <div className='btnContainer'> 
                    <span>{reqs.name}</span>
                    <button onClick={acceptRequest} className='btnPrimary'>
                        <span className='bold'>YES</span>
                    </button>
                    <button className='btnOutline'>
                        <span onClick={rejectRequest} className='bold'>NO</span>
                    </button>
                </div>
              }
                
              </p>
            </div>
            
          </div>
        </div>
      </div>
    );
  };

export default NotificationModal;