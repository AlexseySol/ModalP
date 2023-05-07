import React from "react";
import "./Home.scss";
import "../../mixin.scss"



export const Home = ({arrayImg,count}) => {



  return (
    <header>
      <div className="header__wrapper">
       
        <div className="block__backgr">
          <div className="block__title">
            <h1 className="title">Alexsey Solyanoy</h1>
            <ul>
              <li>
                Height <span>177</span>{" "}
              </li>
              <li>
                Weight <span>76</span>
              </li>
              <li>
                Age <span>27</span>{" "}
              </li>
              <li>
                shoe size <span>41</span>{" "}
              </li>
              <li>
                Bust-Waist-Hips <span>102-79-101</span>
              </li>
            </ul>
          </div>

          {arrayImg[count]}
        </div>
      </div>
    </header>
  );
};
