import React from "react";
import Items from "./Items";

let info = require("./items.json");

function MasterAside() {
  return (
    <aside  className="aside--master ">
      <h2>Groceries :</h2>
      <div></div>
        <Items items={info.items}/>
    </aside >
  );
}

export default MasterAside;
