import React from "react";
import Contact from "../header/Contact"

function MasterFooter() {
  return (
    <footer className="footer--master">
      <div className="footer--container">
        <ul className="footer--info">
          <li className="footer--info--li--main">About :</li>
          <li className="footer--info--li">
            <a href="#">Store Locator</a>
          </li>
          <li className="footer--info--li">
            <a href="#">Click&Collect</a>
          </li>
        </ul>
        <ul className="footer--info">
          <li className="footer--info--li--main"> More :</li>
          <li className="footer--info--li">
            <a href="#">Photo Prints</a>
          </li>
          <li className="footer--info--li">
            <a href="#">CreditCard</a>
          </li>
          <li className="footer--info--li">
            <a href="#">Car</a>
          </li>
        </ul>

        <div className="footer--contact"><Contact/></div>
      </div>
    </footer>
  );
}

export default MasterFooter;
