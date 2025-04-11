import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-nav">
      <div className="header-title">Enhancing Mental & Social Wellness!</div>
      <div className="heardernav">
        <ul className="">
          <li>
            <img
              src="../public/green-leaf-logo-vector.png
              "
            //   height={50}/
              width={50}
            />
          </li>
          <li>About</li>
          <li>Workshop</li>
          <li>Gallery</li>
          <li>For Induvisual</li>
        </ul>

        <div className="">
         
          <li>Logout</li>
       
        </div>
      </div>
    </div>
  );
}
