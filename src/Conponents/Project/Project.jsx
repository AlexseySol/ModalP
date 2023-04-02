import "./Project.scss";
import React from "react";
import SwipStudio from "./Swiper/SwipStudio";
import SwipStudio2 from "./Swiper/SwipStudio2";
import SwipBuduar from "./Swiper/SwipBuduar";
import SwipSport from "./Swiper/SwipSport";
import SwipSuits from "./Swiper/SwipSuits";
import SwipTermo from "./Swiper/SwipTermo";

export function Project({
  arrayStudioFirst,
  arrayStudioTwo,
  arrayBuduar,
  arraySport,
  arraySuits,
  arrayTermo,
}) {
  const [visibil, setVisibil] = React.useState(false);
  const [swap, setSwap] = React.useState(false);
  const [swapSt2, setSwapSt2] = React.useState(false);
  const [buduar, setBuduar] = React.useState(false);
  const [sport, setSport] = React.useState(false);
  const [suits, setSuits] = React.useState(false);
  const [termo, setTermo] = React.useState(false);

  console.log(visibil);
  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 10) {
        setVisibil(true);
      } else {
        setVisibil(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
  });

  const scroolTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section>
      {swap ? (
        <SwipStudio setSwap={setSwap} arrayStudioFirst={arrayStudioFirst} />
      ) : (
        false
      )}
      {swapSt2 ? (
        <SwipStudio2 setSwapSt2={setSwapSt2} arrayStudioTwo={arrayStudioTwo} />
      ) : (
        false
      )}
      {buduar ? (
        <SwipBuduar setBuduar={setBuduar} arrayBuduar={arrayBuduar} />
      ) : (
        false
      )}
      {sport ? (
        <SwipSport setSport={setSport} arraySport={arraySport} />
      ) : (
        false
      )}
      {suits ? (
        <SwipSuits setSuits={setSuits} arraySuits={arraySuits} />
      ) : (
        false
      )}
      {termo ? (
        <SwipTermo setTermo={setTermo} arrayTermo={arrayTermo} />
      ) : (
        false
      )}
      <div className="project__wrapper">
        <h2 className="project__title">Project</h2>
        <div className="project__cardwrapper">
          <div
            className="project__card"
            onClick={() => setSwap((prev) => !prev)}
          >
            <img
              className="project__card_img"
              src="/img/1studio/1studio4.jpg"
              alt="asd"
            />
            <h4>My first studio photo shoot</h4>
          </div>
          {/* Card  2*/}

          <div
            className="project__card"
            onClick={() => setSport((prev) => !prev)}
          >
            <img
              className="project__card_img"
              src="/img/sports/sport3.jpg"
              alt="asd"
            />
            <h4>Gym workout</h4>
          </div>
          {/* Card 5 */}
          <div
            className="project__card"
            onClick={() => setSuits((prev) => !prev)}
          >
            <img
              className="project__card_img"
              src="/img/suits/suits4.jpg"
              alt="asd"
            />
            <h4>For a sportswear store</h4>
          </div>
          {/* Card   6*/}
          <div
            className="project__card"
            onClick={() => setTermo((prev) => !prev)}
          >
            <img
              className="project__card_img"
              src="/img/termo/termo2.jpg"
              alt="asd"
            />
            <h4>For a thermal underwear shop</h4>
          </div>
          <div
            className="project__card"
            onClick={() => setBuduar((prev) => !prev)}
          >
            <img
              className="project__card_img"
              src="/img/buduar3.jpg"
              alt="asdasdasdad"
            />
            <h4>Boudoir</h4>
          </div>
          <div
            className="project__card"
            onClick={() => setSwapSt2((prev) => !prev)}
          >
            <img
              className="project__card_img"
              src="/img/2studio/2studio4.jpg"
              alt="asd"
            />
            <h4>Studio B&W Colors</h4>
          </div>
        </div>
      </div>
      <div
        className={visibil ? "scroll-btn show" : "scroll-btn"}
        onClick={scroolTop}
      >
        Top
      </div>
    </section>
  );
}
