import React from "react";
import UserContext from "../Utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "dummyName",
        location: "dummlocation",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const parseData = await data.json();
    this.setState({
      userinfo: parseData,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userinfo;
    return (
      <div className="user-card-class">
        <img className="abt-img" alt="git profile" src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}
export default UserClass;
