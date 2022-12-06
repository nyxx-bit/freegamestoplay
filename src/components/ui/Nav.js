import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const removeToken = () => {
    localStorage.removeItem("authenticated");
    navigate("/");
  };

  return (
    <>
      <div>
        <nav className="center">
          <ul style={{ marginBottom: "50px" }}>
            <li>
              <Link to="/home">Home (All)</Link>
            </li>
            <li>
              <Link to="/pc">Games PC</Link>
            </li>
            <li>
              <Link to="/browser">Games Browser</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/" onClick={removeToken}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
