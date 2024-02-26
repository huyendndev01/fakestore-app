import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const UserLoginContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", auth: false });
  const [allUser, SetAllUser] = useState([]);
  const [id, setId] = useState();

  const login = (name, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("name", name);

    const name1 = localStorage.getItem("name");

    const item = allUser.find((item) => item.username === name1);

    if (item && item.id) {
      setId(item.id);
    }

    setUser((user) => ({
      id: id,
      name: name,
      auth: true,
    }));
  };

  // Logout updates the user data to default
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setUser((user) => ({
      name: "",
      auth: false,
    }));
    toast.success("Log out success");
  };

  return (
    <UserLoginContext.Provider
      value={{ user, login, logout, allUser, SetAllUser, id }}
    >
      {children}
    </UserLoginContext.Provider>
  );
};

export { UserProvider, UserLoginContext };
