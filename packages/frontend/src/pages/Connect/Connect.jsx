import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as ConnectIcon } from '../../assets/connect.svg';
import Input from '../../components/Input/Input';
import './Connect.css';

function Connect() {
  const currentUser = useSelector((state) => state.user);
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([allUsers]);

  useEffect(() => {
    const f = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_HOST}/users`);
        let { data } = response;
        data = data.filter(
          (datum) => datum.name.toLowerCase() !== currentUser?.nickname.toLowerCase(),
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
    <section className="connectContainer">
      <section>
        <h1>Find someone to follow</h1>
        <h2>Click a user's name to view their profile</h2>
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
      </section>
      <ConnectIcon />
    </section>
  );
}

export default Connect;
