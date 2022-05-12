import { faUser, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Searchbar } from "../Searchbar/Searchbar";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div class="navigation-container flex-hz">
        <div className="navigation-item-1 flex-hz jc-sb">
          <Link className="links" to="/">
            <h5 class="lib-name-1">
              Glowing <span class="lib-name-2">Divas</span>
            </h5>
          </Link>
          <Link to="/" className="links header-link">
            Explore{" "}
          </Link>
          <Link to="/" className="links header-link">
            Playlist{" "}
          </Link>
        </div>
        <Searchbar/>
        <div class="navigation-item-3 flex-hz">
          <Link to="/signin">
            <button class="btn btn-primary">Signin</button>
          </Link>
          <FontAwesomeIcon
            className="icons"
            icon={faUserCircle}
          ></FontAwesomeIcon>
        </div>
      </div>
    </>
  );
};

export { Header };
