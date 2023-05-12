import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <header>
      <div className="Container">
        <Link to="/">
          <h2> Home </h2>
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
