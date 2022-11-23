import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'

const ChangeInfo = ({user}) => {
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
    <div>
        <Navbar></Navbar>
        <form onSubmit={updateUser}>
						<p>Change User informations:</p>
						<input type="text" placeholder="Email" name="email"  />
                        <br></br>
						<input type="text" placeholder="Fullname" name="fullname"  />
                        <br></br>
						<input type="text" placeholder="Phone" name="phone" />
                        <br></br>
						<input type="password" placeholder="New Password" name="password"  />
                        <br></br>
						{/* <input type="text" name="" required /> */}
						<button >Update User</button>
						<br></br>
						<br></br>
						Do you want to delete your account?  <button onClick={deleteUser}> Delete User </button>
					</form>
    </div>
  )
}

export default ChangeInfo