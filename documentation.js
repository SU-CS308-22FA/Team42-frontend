FUNCTION 1: 
 /* 
    getUser function sets a spesific user's informations to a variable called "user". 
    It gets the information from our database via api -> "https://cs308-db.herokuapp.com/api/profiles/" + id"
    Then sets the data it gets to variable user with usestate function.
  */


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
  
  
FUNCTION 2:
/*
  handleSubmit function is called when a user want to log in. 
  First, it checks if the informations of the user is valid from our database via api --> "https://cs308-db.herokuapp.com/api/profiles/login" (It uses axios.post method.)
  Then, if the data is correct user will log in and local storage gets the id of the team just because it can be needed after a while.
  If the data is incorrect the function sets an error message and display it to the user.
*/

const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://cs308-db.herokuapp.com/api/profiles/login";
			const  res = await axios.post(url, data);
			localStorage.setItem("token", res.data.token);
			localStorage.setItem("id", res.data.user_id);
			window.location = "/";
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

