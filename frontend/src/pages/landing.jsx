import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>PeerConnect</h2>
        </div>
        <div className="navlist">
          <p>Join as Guest</p>
          <p>Register</p>
          <div role="button">
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            Stay close to your people{" "}
            <span style={{ color: "#ff8c00" }}>ChaiCode</span> vibes only. ☕
          </h1>

          <p>Distance fades with one message : PeerConnect.</p>

          <div role="button">
            <Link to={"/auth"}>Join the Brew</Link>
          </div>
        </div>

        <div className="hero-card">
          <img src="../public/mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
