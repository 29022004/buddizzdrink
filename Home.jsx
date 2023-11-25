import React from "react";
import { Link } from "react-router-dom";


import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: "url('https://chicagoparent.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2023/08/iStock-1303977605-696x464.jpeg')" }}>
      <div className="headerContainer">
        <h1> BuddizzDrink</h1>
        <p> GOOD TIME TOGETHER</p>
        <Link to="/menu">
          <button> OUR MENU </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;