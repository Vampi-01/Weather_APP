// Assets Imports

import logo from "../assets/logo.png";

// Css

import "./styles/navbar.scss";

// function

export default function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="logo f-ctr">
          {/* <div className="logo-img">
            <img src={logo} alt="My Weather App" />
          </div> */}
          <h2 className="logo-title">Weather 24/7</h2>
        </div>
      </div>
    </>
  );
}
