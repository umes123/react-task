import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash } from 'react-bootstrap-icons';

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios.get('http://localhost:3002/posts')
      .then(response => {
        setData(response.data);
        setLoading(false);
        

      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });

  }, []);
  const handleDelete = (id) => {
   
    axios.delete(`http://localhost:3002/api/delete/${id}`)
      .then(() => {
     
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
      })
      .catch((error) => {
        console.error("Error deleting row:", error);
      });
  };
  

  return (
    <div>
      <div className="App">
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">firstname</th>
              <th scope="col">lastname</th>
              <th scope="col">percentage</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => (
              <tr key={key}>
                <th scope="row">{key+1}</th>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.percentage}</td>
                <td>
                  <i className='btn'  data-id={key} onClick={() => handleDelete(item.id)}>
                  <Trash color="royalblue" size={20} />
                  </i>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Table;
