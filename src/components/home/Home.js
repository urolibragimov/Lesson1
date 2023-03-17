import React, { Component } from "react";
// rcc
import homeImg from "../../assets/photos/amico.png";

class Home extends Component {
  render() {
    return (
      <section className="container">
        Home
        <img src={homeImg} alt="Home" />
        <img src="/logo512.png" alt="" />
      </section>
    );
  }
}

export default Home;
