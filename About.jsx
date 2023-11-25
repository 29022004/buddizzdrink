import React from "react";

import "../styles/about.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(https://www.wellplated.com/wp-content/uploads/2018/12/Champagne-Punch-recipe.jpg)` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to BuddizzDrink, where refreshment meets innovation.
       At BuddizzDrink, we are passionate about crafting unique and delightful beverages that go beyond quenching your thirst.
       Our journey began with a simple idea—to create drinks that not only taste great but also reflect our commitment to 
       quality and creativity. From carefully selected ingredients to innovative brewing techniques, we strive to bring you a 
       diverse range of beverages that cater to your taste buds and elevate your drinking experience.
      At the core of BuddizzDrink is a dedication to providing a refreshing escape from the ordinary, encouraging a lifestyle 
      that embraces flavor, fun, and wellness. Join us on this flavorful adventure, and let BuddizzDrink be your companion in
     every sip. Cheers to the extraordinary taste of BuddizzDrink!
        </p>
      </div>
    </div>
  );
}

export default About;