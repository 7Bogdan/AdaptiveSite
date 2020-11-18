import React from "react";

function HeaderLogo (props) {
  const country= props.country
  return (
    <div className="header--leftsection">
    <a href="#">
      <span className="header--span">
        <img className="emblem--left" src={country.img} alt={country.alt} />
        <h1>{country.alt}</h1>
      </span>
      </a>
    </div>
  );
}

export default HeaderLogo;
