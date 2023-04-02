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
    <img className="img_anim1" src="/img/header2.png" alt="" />,
    <img className="img_anim2" src="/img/header3.png" alt="" />,
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
    <img src="/img/buduar/buduar1.jpg" alt="dasd" />,
    <img src="/img/buduar/buduar2.jpg" alt="dasd" />,
    <img src="/img/buduar/buduar3.jpg" alt="dasd" />,
    <img src="/img/buduar/buduar4.jpg" alt="dasd" />,
    <img src="/img/buduar/buduar5.jpg" alt="dasd" />,
    <img src="/img/buduar/buduar6.jpg" alt="dasd" />,
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
          <Route path="/Other" element={<Other />} />
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
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
