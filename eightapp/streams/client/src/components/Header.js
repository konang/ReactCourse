import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/react/stream/client/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/react/stream/client/" className="item">
          All Streams
        </Link>
        <GoogleAuth></GoogleAuth>
      </div>
    </div>
  );
};

export default Header;
