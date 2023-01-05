import axios from "axios";
import React, { useState, useEffect } from 'react';
import styles from "./styles.module.css";
import NotificationModal from "../NotificationModal";
import "./index.css";

const Navbar = () => {
	const [openModal, setOpenModal] = useState(false);
	
	const [user, setUser] = useState();
	useEffect(() => {
		const getUser = async () => {
			try{
				var id = localStorage.getItem("id");
				
				var myUser = await axios.get("https://cs308-db.herokuapp.com/api/profiles/" + id);
				setUser(myUser.data);

			}catch(e)
			{

			}
			
		}
		
		getUser();
	}, [])
	
	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("id");
		window.location = "/login";
	};
    const handleRouting = (route) => {
		window.location = route;
	};
	
	
	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1 onClick={() => handleRouting('/')}>play.tff</h1>
				<div className={styles.rhs}>
				<button 
					onClick={() => setOpenModal(true)} 
					className={styles.white_btn_outline}>
						Notifications
					</button>
					<NotificationModal 
						open={openModal} 
						onClose={() => setOpenModal(false)} />
					
				<button className={styles.white_btn_outline}onClick={() => handleRouting('/searchevent')}>Search Page</button>
				<button className={styles.white_btn_outline}onClick={() => handleRouting('/teamlist')}>Team List</button>
				<button className={styles.white_btn_outline}onClick={() => handleRouting('/friendlist')}>Friend List</button>

					<button className={styles.white_btn_outline}onClick={() => handleRouting('/profile')}>Profile</button>

					<button className={styles.white_btn} onClick={handleLogout}>Logout</button>

					
				</div>
                
			</nav>
		</div>
	);
};

export default Navbar;
