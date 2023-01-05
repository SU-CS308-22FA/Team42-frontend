import React, { useState } from 'react'
import axios from 'axios';

const FriendList = () => {
  var id = localStorage.getItem("id");
  const [data, setData] = useState({ requester: id });
  const [not, setNot] = useState([]);
  const postRequests = async (e) =>{
    const res = await axios.post("https://cs308-db.herokuapp.com/api/friend_requests/create", data )
    setNot(res.data)
    console.log(res)
    } 
  const 
  return (
    <div>Requested FriendList
        <div>
            <button onClick={postRequests}> Click </button>
        </div>
    </div>
  )
};

export default FriendList;