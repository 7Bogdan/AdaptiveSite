import React from "react";

function Items(props) {
  return (
    <nav className="grociers--nav">
      {props.items.map((unit) => (
        <div key={unit.alt} className="grociers--item ">
          <a href="#">
            <span className="grociers--span">
              <img className="grociers--emblem" src={unit.img} alt={unit.alt} />
              <span>{unit.alt}</span>
            </span>
          </a>
        </div>
      ))}
    </nav>
  );
}

export default Items;
