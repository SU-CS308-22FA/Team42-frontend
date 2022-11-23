import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateTeamModal() {
    const [data, setData] = useState({
		team_name: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const createEvent = async (e) => {
        e.preventDefault();
        if(data.team_name == "")
        {
          setError("Fill team name!")
          return;
        }
		try {
			const url = "https://cs308-db.herokuapp.com/api/teams/register";
			const { data: res } = await axios.post(url, data);
			navigate("/profile");
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
        Create Team
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <form>
              <h1>Create Team</h1>
              Team Name:  
              <input
                type="text"
                placeholder="Team Name"
                name="team_name"
                onChange={handleChange}
                value={data.team_name}
                required               
						  />

            </form>
            {
              error !== "" && 
              <p>{error}</p>
            }
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>

            <button type="submit" onClick={createEvent}>
              Create Team
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}