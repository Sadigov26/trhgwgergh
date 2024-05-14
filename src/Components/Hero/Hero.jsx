import React from "react";
import style from "./Hero.module.css";
import watch from "../About/watch (1).png";
import { useNavigate } from "react-router-dom";

const Hero = () => {


  const navigation = useNavigate()
    

const goHome= () => { 
    navigation("/")
}

const goShop= () => { 
    navigation("/shop")
}


  return (
    <div>
      <section className={style.Hero}>
        <div className={style.containerSec}>
          <div className={style.containerDesk}>
            <h1>Select Your New Perfect Style</h1>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat is aute irure.
            </p>
            <button onClick={goShop}>SHOP NOW</button>
          </div>
          <div className={style.containerImage}>
            <img src={watch} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
