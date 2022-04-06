import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Input from '../../components/Input/Input';
import './Connect.css';

function Connect() {
  const currentUser = useSelector((state) => state.user);
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([allUsers]);

  useEffect(() => {
    const f = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        let { data } = response;
        data = data.filter(
          (datum) => datum.name !== currentUser?.nickname.toLowerCase(),
        );
        setAllUsers(data);
        setFilteredUsers(data);
      } catch (e) {
        throw new Error();
      }
    };
    f();
  }, [currentUser]);

  const filterUsers = (e) => {
    let filteredList = allUsers;
    filteredList = filteredList.filter((user) => user.name.includes(e.target.value));
    setFilteredUsers(filteredList);
  };

  return (
    <>
      <h1>Find a user on Fakebook!</h1>
      <Input
        onChange={filterUsers}
        search
        placeholder="Search for a user..."
        block
      />
      <div className="userContainer">
        {filteredUsers.map((user, i) => (
          <NavLink key={i} to={`/connect/${user.id}`} className="user">
            {user.name}
          </NavLink>
        ))}
      </div>
      <h2>Click a user's name to view their profile</h2>
    </>
  );
}

export default Connect;
