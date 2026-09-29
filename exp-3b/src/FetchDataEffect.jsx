import React, { useEffect, useState } from 'react';

function FetchDataEffect() {
  const [users, setUsers] = useState([]);

  // useEffect runs once after the component mounts
  useEffect(() => {
    // Fetch data from API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data); // Update state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array = run only once

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      

      <h2>Users List (Fetched using useEffect)</h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchDataEffect;