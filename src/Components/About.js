import React from "react";
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      {/* <User
        name={"Akshay saini"}
        location={"Bengaluru"}
        contact={+918888888888}
      /> */}
      <UserClass
        name={"sagar class based"}
        location={"Bengaluru"}
        contact={+918888888888}
      />
    </div>
  );
};

export default About;
