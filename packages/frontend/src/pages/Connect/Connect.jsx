import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Input from "../../components/Input/Input";

const Connect = () => {
  const currentUser = useSelector(state => state.user);
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([allUsers]);

  useEffect(() => {
    const f = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        let data = response.data;
        data = data.filter(
          datum => datum.name !== currentUser?.nickname.toLowerCase()
        );
        setAllUsers(data);
        setFilteredUsers(data);
      } catch (e) {
        console.log(e);
      }
    };
    f();
  }, [currentUser]);

  const filterUsers = e => {
    let filteredList = allUsers;
    filteredList = filteredList.filter(user =>
      user.name.includes(e.target.value)
    );
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
      {filteredUsers.map((user, i) => {
        return <p key={i}>{user.name}</p>;
      })}
    </>
  );
};

export default Connect;
