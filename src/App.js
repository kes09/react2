import './App.css';
import React from 'react';

const App = () => {

  return(
    <Child isUserLoggedIn={true}  const users = {[
      {
        id:1,
        name:"Robert",
        lname:" Kiyosaki",
        age:"63"
      },
      {
        id:2,
        name:"Chethan",
        lname:" bhagath",
        age:"44"
      },
      {
        id:3,
        name:"Napoleon",
        lname:" Hill",
        age:"89"
      },
      {
        id:4,
        name:"Ankur",
        lname:"Warikoo",
        age:"33"
      }
    ]} />
  )
}
const Child =({users,isUserLoggedIn})=>{
  if (users.length === 0) {
    return <h2>No user in System</h2>
  }
  if (isUserLoggedIn === false) {
    return <h2>are not authorized to see user list.</h2>
  }
  return (
    <> 
      {users.map((arr) => (
             <h1 key={arr.id}>
              Name:{arr.name} - Surname:{arr.lname} - Age:{arr.age}
          </h1>
        ))}
    </>
  );
}

export default App;
