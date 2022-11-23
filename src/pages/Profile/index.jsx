import axios from "axios";
import React, { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles.module.css";
import UserProfileCard from "../../components/UserProfileCard"

const Profile = () => {
	
	const [user, setUser] = useState();
	useEffect(() => {
		const getUser = async () => {
			try{
				var id = localStorage.getItem("id");
				console.log(id);
				var myUser = await axios.get("https://cs308-db.herokuapp.com/api/profiles/" + id);
				setUser(myUser.data);
				console.log(user);

			}catch(e)
			{

			}
			
		}
		console.log("here")
		getUser();
	}, [])
	
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

					<form onSubmit={updateUser}>
						<p>Change User informations:</p>
						<input type="text" placeholder="Email" name="email"  />
						<input type="text" placeholder="Fullname" name="fullname"  />
						<input type="text" placeholder="Phone" name="phone" />
						<input type="password" placeholder="New Password" name="password"  />
						{/* <input type="text" name="" required /> */}
						<button >Update User</button>
						<br></br>
						
					</form>

					
					
					
				</div>
			}
			
		</div>
	);
};

export default Profile;
