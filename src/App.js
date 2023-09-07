import "./App.css";
import React, { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import UserContext from "./Utils/UserContext";

import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../src/Redux/appStore";

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
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

export default App;
