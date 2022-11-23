import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateEventModal() {
    const [data, setData] = useState({
    competition_id: "123456789",
    season_id: "123456789",
		competition_name: "",
		competition_gender: "MALE",
    competition_youth: false,
		season_name: "",
		competition_start: "",
    competition_end: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const createEvent = async (e) => {
        e.preventDefault();
        if(data.competition_name === "" || data.season_name === "" || data.competition_start === "" || data.competition_end=== "")
        {
          setError("Please fill all the values!")
          return;
        }
		try {
			const url = "https://cs308-db.herokuapp.com/api/competition/register";
			const { data: res } = await axios.post(url, data);
			navigate("/");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};



  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      
      <button onClick={toggleModal} className="btn-modal">
        Create Event
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <form>
              <h1>Create Event</h1>
              Event Name:  
              <input
                type="text"
                placeholder="Competition Name"
                name="competition_name"
                onChange={handleChange}
                value={data.competition_name}
                required               
						  />
              <br></br>
              Event Gender: 
              <select onChange={handleChange} name="competition_gender" value={data.competition_gender}>
                <option value="Male">MALE</option>
                <option value="Female">FEMALE</option>
              </select>
              <br></br>
              Select Youth: 
              <select onChange={handleChange} name="competition_youth" value={data.competition_youth}>
                <option value= {true} >U18</option>
                <option value= {false} >O18</option>
                
              </select>
              <br></br>
              Season Name: 
              <input
                type="text"
                placeholder="Season Name"
                name="season_name"
                onChange={handleChange}
                value={data.season_name}
                required               
						  />
              <br></br>
              Competition Start Time: 
              <input
                type="text"
                placeholder="competition start time"
                name="competition_start"
                onChange={handleChange}
                value={data.competition_start}
                required               
						  />
              <br></br>
              Competition End Time: 
              <input
                type="text"
                placeholder="competition end time"
                name="competition_end"
                onChange={handleChange}
                value={data.competition_end}
                required               
						  />
            {
              error !== "" && 
              <p>{error}</p>
            }
            </form>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>

            <button type="submit" onClick={createEvent}>
              Create Event
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}