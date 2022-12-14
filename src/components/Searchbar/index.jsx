import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Table from "./table";
import "./index.css"
import Navbar from '../Navbar/Navbar';
function SearchBar(){    

    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get("https://cs308-db.herokuapp.com/?search="+query);
        setData(res.data);
        console.log(data.data)
      };
      if (query.length === 0 || query.length > 2) fetchData();
        
    }, [query]);
  
    return (
    <div>
        <Navbar></Navbar>
      <div className="app">
        
          <input
            className="search"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />         
          {<Table data={data && data.data ? data.data : undefined} args={'teams'} />}

      </div>
      </div>
    );

  
}

export default SearchBar