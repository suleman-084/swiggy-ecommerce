import "./App.css";
import React, { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import UserContext from "./Utils/UserContext";

import { Outlet } from "react-router-dom";

const App = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "suleman",
    };
    setUserName(data.name);
  }, []);
  return (
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

export default App;
