import React from "react";
import "./Breadcrums.css";
import arrrow_icon from "../Assets/breadcrum_arrow.png";
const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrrow_icon} alt="" />
      SHOP <img src={arrrow_icon} alt="" />
      {product.category} <img src={arrrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrums;
