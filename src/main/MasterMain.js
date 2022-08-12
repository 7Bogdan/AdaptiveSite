import React from "react";
import Items from "./Items"

let info = require("./info.json");

function MasterMain() {
  return (
    <main className="master--main">
      <div className="grid--catalog">
      <Items items={info.items}/>
      </div>
    </main>
  );
}

export default MasterMain;
