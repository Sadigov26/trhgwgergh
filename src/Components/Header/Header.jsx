import React from "react";
import style from "./Header.module.css";
import logo from "../About/logo (15).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {

const navigation = useNavigate()
    

const goHome= () => { 
    navigation("/")
}

const goShop= () => { 
    navigation("/shop")
}


  return (
    <div>
      <header>
        <div className={style.containerHeader}>
          <div className={style.headerLogo}>
            <img src={logo} alt="" />
          </div>
          <div className={style.headerNavbar}>
            <nav>
              <ul>
                <li>
                  <a onClick={goHome} href="">Home</a>
                </li>
                <li>
                  <a onClick={goShop} href="">Shop</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="" className={style.lastest}>
                    Latest
                    <a href="" className={style.hot}>
                      HOT
                    </a></a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Pages</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={style.headerSocial}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
