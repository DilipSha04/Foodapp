import React from "react";
import userContext from "../utils/userContext";
// import UserCard from "./UserCard";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("ComponantDidMount Parent");
  }

  render() {
    console.log("render parent");
    return (
      <div className="about flex justify-center items-center">
        <div className="my-8 text-center">
        <h1 className="font-bold text-[22px] text-center">About</h1>
        <div>
          LoggedIn User : 
          <userContext.Consumer>
            {({loggedInuser}) => <p className="font-semibold">{loggedInuser}</p>}
          </userContext.Consumer>
        </div>
        <h3>We are Food Panther</h3>
        {/* <UserCard
          name={"Dilip Sharma"}
          location={"Umaria"}
          contact={"dilipsha@gmail.com"}
        /> */}
        <UserClass
          name={"Dilip Sharma"}
          location={"Umaria"}
          contact={"dilipsha@gmail.com"}
        />
        </div>
      </div>
    );
   
  }
}

// const About = () => {
//   return (
//     <div className="about">
//       <h1>About</h1>
//       <h3>We are Food Panther</h3>
//       <UserCard name={"Dilip Sharma"} location={"Umaria"} contact={"dilipsha@gmail.com"}/>
//       {/* <UserClass name={"Dilip Sharma"} location={"Umaria"} contact={"dilipsha@gmail.com"} /> */}
//     </div>
//   );
// };

export default About;
