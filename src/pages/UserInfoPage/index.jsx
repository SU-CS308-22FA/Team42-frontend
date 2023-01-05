import axios from "axios";
import React, { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles.module.css";
import UserProfileCard from "../../components/UserProfileCard"

const UserInfoPage = () => {
	const [user, setUser] = useState();
    var path = window.location.pathname;
    var directories = path.split("/");
    var lastDirecotry = directories[(directories.length - 1)];
	var id = localStorage.getItem("id");
	const [data, setData] = useState({ requester: id, recipient: lastDirecotry });

    const fetchCompetition = async() => {
        const res = await axios.get( "https://cs308-db.herokuapp.com/api/profiles/" + lastDirecotry ) 
        setUser(res.data)
    }

    useEffect(()=>{
        fetchCompetition();
    },[])

	const addFriend = async (e) =>{
		const res = await axios.post("https://cs308-db.herokuapp.com/api/friend_requests/create", data )
		console.log(res)
		console.log(data)
	}
	
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	const deleteUser = () => {
		axios.delete("https://cs308-db.herokuapp.com/api/profiles/delete/"+user._id).then(
			(res) => {
				console.log(res);
				window.location = '/login';
			}
		)
	}
	// {email: event.target[0].value && event.target[0].value != ""? event.target[0].value : user.email, fullname: event.target[1].value && event.target[1].value != ""? event.target[1].value : user.fullname, phone:event.target[2].value && event.target[2].value != ""? event.target[2].value : user.phone, password: event.target[3].value && event.target[3].value != ""? event.target[3].value : user.password,}).then(
	// 	(res) => {
	const updateUser = (event) => {
		axios.put("https://cs308-db.herokuapp.com/api/profiles/update/"+user._id, {email: event.target[0].value, fullname: event.target[1].value, phone:event.target[2].value, password: event.target[3].value}).then(
			(res) => {
				console.log(res);
				window.location.reload();
			}
		)
	}
	
	return (
		<div className={styles.main_container}>
			<Navbar></Navbar>
			{
				user && 
				<div>
					<UserProfileCard user={user}></UserProfileCard>
					<button onClick={addFriend} > Add Friend </button>

					

					
					
					
				</div>
			}
			
		</div>
	);
};

export default UserInfoPage;
