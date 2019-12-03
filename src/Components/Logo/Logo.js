import React from "react";
import LogoImg from "../../assets/images/burger-logo.png";
import "./Logo.css";

const Logo = props => {
  return (
    <div className="Logo" style={{ header: props.height }}>
      <img src={LogoImg} alt="LogoImg" />
    </div>
  );
};

export default Logo;
