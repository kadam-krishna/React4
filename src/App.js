import React,{ useEffect ,useState} from 'react';
import './App.css';
function App() {
  const [userData,setData] = useState([]);
  useEffect(()=>{
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setData(data.users));
  }, []);
const dummy=()=>
{
  return userData.map((user) => (
    <tr>
      <td>{user.id}</td>
      <td>
        <img src={user.image} alt={user.firstName} width={30} />
      </td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.gender}</td>
      <td>{user.email}</td>
      <td>{user.username}</td>
      <td>{user.domain}</td>
      <td>{user.ip}</td>
      <td>{user.university}</td>
    </tr>
  ))
}
  return (
    <div className='container'> 
        <table className='table' border={1} width={'100%'}>
          <thead>
          <tr>
              <th>SNo</th>
              <th>Profile</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Gender</th>
              <th>E-mail</th>
              <th>Username</th>
              <th>Domain</th>
              <th>IP</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            {dummy()}
          </tbody>
        </table>
      </div>
  );
}

export default App;
