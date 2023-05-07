import "./App.scss";
import { Home } from "./Conponents/Home/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { NavBar } from "./Conponents/NavBar/NavBar";
import Other from "./Conponents/Other/Other";
import { Project } from "./Conponents/Project/Project";

function App() {
  const [count, setCount] = React.useState(0);
  let arrayImg = [
    <img className="img_anim" src="/img/header1.png" alt="" />,
    <img className="img_anim2" src="/img/header5.png" alt="" />,
    <img className="img_anim1" src="/img/header4.png" alt="" />,
  ];

  let arrayStudioFirst = [
    <img src="/img/1studio/1studio1.jpg" alt="dasd" />,
    <img src="/img/1studio/1studio2.jpg" alt="dasd" />,
    <img src="/img/1studio/1studio3.jpg" alt="dasd" />,
    <img src="/img/1studio/1studio4.jpg" alt="dasd" />,
    <img src="/img/1studio/1studio5.jpg" alt="dasd" />,
    <img src="/img/1studio/1studio6.jpg" alt="dasd" />,
  ];
  let arrayStudioTwo = [
    <img src="/img/2studio/2studio1.jpg" alt="dasd" />,
    <img src="/img/2studio/2studio2.jpg" alt="dasd" />,
    <img src="/img/2studio/2studio3.jpg" alt="dasd" />,
    <img src="/img/2studio/2studio4.jpg" alt="dasd" />,
    <img src="/img/2studio/2studio5.jpg" alt="dasd" />,
  ];
  let arrayBuduar = [
    <img src="/img/buduar1.jpg" alt="dasd" />,
    <img src="/img/buduar3.jpg" alt="dasd" />,
    <img src="/img/buduar4.jpg" alt="dasd" />,
    <img src="/img/buduar5.jpg" alt="dasd" />,
    <img src="/img/buduar6.jpg" alt="dasd" />,
  ];

  let arraySport = [
    <img src="/img/sports/sport1.jpg" alt="dasd" />,
    <img src="/img/sports/sport2.jpg" alt="dasd" />,
    <img src="/img/sports/sport3.jpg" alt="dasd" />,
    <img src="/img/sports/sport4.jpg" alt="dasd" />,
    <img src="/img/sports/sport5.jpg" alt="dasd" />,
  ];
  let arraySuits = [
    <img src="/img/suits/suits1.jpg" alt="dasd" />,
    <img src="/img/suits/suits2.jpg" alt="dasd" />,
    <img src="/img/suits/suits3.jpg" alt="dasd" />,
    <img src="/img/suits/suits4.jpg" alt="dasd" />,
    <img src="/img/suits/suits5.jpg" alt="dasd" />,
    <img src="/img/suits/suits6.jpg" alt="dasd" />,
  ];
  let arrayTermo = [
    <img src="/img/termo/termo1.jpg" alt="dasd" />,
    <img src="/img/termo/termo2.jpg" alt="dasd" />,
    <img src="/img/termo/termo3.jpg" alt="dasd" />,
    <img src="/img/termo/termo4.jpg" alt="dasd" />,
    <img src="/img/termo/termo5.jpg" alt="dasd" />,
    <img src="/img/termo/termo6.jpg" alt="dasd" />,
  ];

  let arrayOther = [
    <img src="/img/Other/other14.jpg" alt="dasd" />,
    <img src="/img/Other/other17.jpg" alt="dasd" />,
    <img src="/img/Other/other15.jpg" alt="dasd" />,
    <img src="/img/Other/other16.jpg" alt="dasd" />,
    <img src="/img/Other/other18.jpg" alt="dasd" />,
    <img src="/img/Other/other1.jpg" alt="dasd" />,
    <img src="/img/Other/other2.jpg" alt="dasd" />,
    <img src="/img/Other/other3.jpg" alt="dasd" />,
    <img src="/img/Other/other4.jpg" alt="dasd" />,
    <img src="/img/Other/other5.jpg" alt="dasd" />,
    <img src="/img/Other/other6.jpg" alt="dasd" />,
    <img src="/img/Other/other7.jpg" alt="dasd" />,
    <img src="/img/Other/other9.jpg" alt="dasd" />,
    <img src="/img/Other/other10.jpg" alt="dasd" />,
    <img src="/img/Other/other12.jpg" alt="dasd" />,
    <img src="/img/Other/other13.jpg" alt="dasd" />,
   
  ];

  let arrayTShirts = [
    <img src="/img/Футболки/футболка.JPG" alt="dasd" />,
    <img src="/img/Футболки/футболка2.jpg" alt="dasd" />,
    <img src="/img/Футболки/футболка3.jpg" alt="dasd" />,
    <img src="/img/Футболки/футболка4.jpg" alt="dasd" />,
    <img src="/img/Футболки/футболка5.jpg" alt="dasd" />,
    <img src="/img/Футболки/футболка6.jpg" alt="dasd" />,
    <img src="/img/Футболки/футболка7.jpg" alt="dasd" />,
  ];

  let arraySportSuilNew = [
    <img src="/img/Костюмы/костюм.jpg" alt="dasd" />,
    <img src="/img/Костюмы/костюм2.jpg" alt="dasd" />,
    <img src="/img/Костюмы/костюм3.jpg" alt="dasd" />,
    <img src="/img/Костюмы/костюм4.jpg" alt="dasd" />,
    <img src="/img/Костюмы/костюм5.jpg" alt="dasd" />,
    <img src="/img/Костюмы/костюм6.jpg" alt="dasd" />,
    <img src="/img/Костюмы/костюм7.jpg" alt="dasd" />,
  ];

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => (prev === arrayImg.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(intervalId);
  }, [count, arrayImg.length]);

  return (
    <div className="app">
      <Router>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<Home count={count} arrayImg={arrayImg} />}
          />
          <Route path="/Other" element={<Other arrayOther={arrayOther} />} />
          <Route
            path="/Project"
            element={
              <Project
                arrayStudioFirst={arrayStudioFirst}
                arrayStudioTwo={arrayStudioTwo}
                arrayBuduar={arrayBuduar}
                arraySport={arraySport}
                arraySuits={arraySuits}
                arrayTermo={arrayTermo}
                arrayTShirts={arrayTShirts}
                arraySportSuilNew={arraySportSuilNew}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
