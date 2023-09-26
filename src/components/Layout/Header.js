import React from "react";
import "./Header.css";
import image from "../../assets/header-image.jpg"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
    <header className="header">
      <h1>My Food App</h1>
      <HeaderCartButton onShowModel={props.onShow}/>
    </header>
    <div className="image">
    <img
    src={image}
    alt="Food"
    
  />
  </div>
  </>
  );
};

export default Header;
