import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade"> Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commence website is an online platform that facilitates buying
          and selling of products or services over the internet serves as a
          virtual marketplace wher businesses and individual showcase their
          products, interact with customer, and conduct transactions without the
          need for a physical presence. E-commerce websites have gained immense
          popularity.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
