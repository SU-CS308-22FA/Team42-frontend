const Table = ({ data }) => {
  const args = ["teams", "competitions", "users"];
  var id = ""
  // const seeTeamDetails = () => {
  //   window.location = "/teamdetails/" + id;
  // };
  // const seeEventDetails = () => {
  //   window.location = "/matchdetails/" + id;
	// }; 
  const seeDetails = (item)=> {
    // detect what is that item
    if(item.team_id)
    {
      window.location = "/teamdetails/" + item._id;
    }else if(item.competition_id)
    {
      window.location = "/matchdetails/" + item._id;
    }else{
      // go to player page
    }
  }
    return (
      <table>
        <tbody>
          <tr>
            <th>Sarch Results</th>
          </tr>

          
          {data && args.map(
            (arg) => {
              return data[arg].map((item) => (
            <tr key={item.id}>
              <td onClick={() => seeDetails(item)}>{item.team_name} {item.competition_name} {item.fullname}{item.team_name !== undefined ? <span>"team"</span> : item.fullname ? <span>"user"</span> : <span>"event"</span>}</td>
                            
            </tr>
          ))
            }
          )}
        </tbody>
      </table>
    );
  };
  
  export default Table;