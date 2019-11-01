import React from "react";
import "./styles.css"

export default function Footer() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
              <img src="/assets/images/LOGO_LUBNA.png" alt=""/>
          </div>
          <div className="col-sm pt">FAQ</div>
          <div className="col-sm pt">Products</div>
          <div className="col-sm pt">Career</div>
          <div className="col-sm pt">About</div>
        </div>
      </div>
    </div>
  );
}
