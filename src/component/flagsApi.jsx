import { useState, useEffect } from "react";
import Flags from "./Component";

export default function Data() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://xcountriesapi.onrender.com/all")
      .then((response) => {
        if (!response.ok) {
          //throw new Error(`HTTP error! status: ${response.status}`);
          console.log(response.status);
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setFilteredData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    const filtered = data.filter((el) => 
      el.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1, backgroundColor: 'white', padding: '10px', textAlign: 'center' }}>
        <input 
          style={{ width: '70%' }} 
          placeholder="Search Countries" 
          type="text" 
          onChange={handleChange} 
          value={text} 
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {filteredData.map((res, index) => (
            <Flags key={index} data={res} />
          ))}
        </div>
      </div>
    </>
  );
}
