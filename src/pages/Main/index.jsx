import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar/Navbar";

import CompetitionList from "../CompetitionList";
import './index.css'

const Main = () => {
	
	useEffect(() => {
		const getUser = async () => {
			try{
				var id = localStorage.getItem("id");
				if(!id)
				{
					window.location = "/login";
					return;
				}
				


			}catch(e)
			{

			}
			
		}
		getUser();
	}, [])
	
	return (
		<div  className='main_container'>
			
			<Navbar></Navbar>
			
			<h1 className='header'>CURRENT EVENT LIST</h1>
			<div className='list'><CompetitionList></CompetitionList></div>
			
		</div>
	);
};

export default Main;
