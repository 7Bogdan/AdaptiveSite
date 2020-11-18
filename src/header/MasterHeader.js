import React from "react";
import HeaderLogo from "./HeaderLogo";
import Basket from "./Basket";
import Like from "./Like";
import Contact from "./Contact";
import Search from "./Search";

let info = require("./items.json");

function MasterHeader() {
  return (
    <header className="master--header">
      <div className="grid--header">
        <HeaderLogo country={info.logo} />
        <div className="header--mainsection">
          <Search />
          <div className="contact">
            <Contact />
          </div>
        </div>
        <div className="header--rightsection">
          <Like />
          <Basket />
        </div>
      </div>
    </header>
  );
}

export default MasterHeader;
