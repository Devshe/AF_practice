import React, { createContext, useReducer } from "react";
import { books, users } from "../../data";

const UserContext = createContext();

const UserContextProvider = (props) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rachel",
      email: "rachel@example.com",
      phone: "123-456-7890",
      borrowedBooks: [],
    },
    {
      id: 2,
      name: "Claire",
      email: "claire@example.com",
      phone: "123-456-7890",
      borrowedBooks: [],
    },
  ]);

  const addUser = (id, name, email, phone, borrowedBooks) => {
    setUser([
      ...users,
      {
        id: users.length + 1,
        name,
        email,
        phone,
        borrowedBooks,
      },
    ]);
  };

  const editUser = (id, name, email, phone, borrowedBooks) => {
    const updatedUsers = users.map((user) => {
      if (user.is === id) {
        return { id, name, email, phone, borrowedBooks };
      }
      return users;
    });
    setUsers(updatedUsers);
  };

  const deleteUser = (id) => {
    const filteredUser = users.filter((user) => user.id !== id);
    setUsers(filteredUser);
  };

  return (
    <UserContext.Provider value={{ users, addUser, editUser, deleteUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
