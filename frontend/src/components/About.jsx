import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <h3>GOOD FOOD</h3>
              <h3>BRIGHTER MOMENTS</h3>
              <p>Fresh ingredients. Real flavors. Together always.</p>
              
            </div>
            <p className="mid">
             We are a food-lovers’ restaurant, passionate about serving fresh, flavorful meals made with high-quality ingredients. From everyday cravings to special celebrations, our menu is crafted to bring people together and create moments worth remembering.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
