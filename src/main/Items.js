import React from "react";

function Items(props) {
  return props.items.map((unit) => (
    <div key={unit.img} className="main--item">
    <a href="#">
      <img className="main--img" src={unit.img} alt={unit.alt} />
      <span>
        <a href="#" className="main--rating">
          <i className="main--star" style={unit.rating}></i>
          <span className="main--reviews">{unit.reviews} reviews</span>
        </a>
      </span>
      <span className="main--price">{unit.price} </span>
      <span className="main--short--desription">{unit.alt}</span>
      </a>
    </div>
  ));
}

export default Items;
