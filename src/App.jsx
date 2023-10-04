// ==============|| PACKAGES IMPORTS ||==================
import { useState } from "react";

// ==============|| IMAGES IMPORTS ||==================
import homeLogo from "./assets/images/svg/home_logo.svg";
import startingIllustration from "./assets/images/png/starting_illustration.png";

// ==============|| FUNCTIONS/UTILITIES IMPORTS ||==================

// ==============|| HOOKS IMPORTS ||==================

// ==============|| COMPONENTS IMPORTS ||==================
import "./App.css";
import LayoutGeneral from "./layouts/layout_general/LayoutGeneral";

function App() {
  const [continueClicked, setContinueClicked] = useState(false);

  // =======================================================
  // ====================|| INITIAL-LOADING-SCREEN STARTS ||=============================
  // =======================================================
  const InitialLoadingScreen = () => {
    const handleContinueClick = () => {
      setContinueClicked(true);
    };
    return (
      <div className="initial-home-container">
        <img src={homeLogo} alt="" />
        <h1>My-Notes</h1>
        <p>
          Note-Ta<span>king App</span>
        </p>
        <button onClick={handleContinueClick} className="button">
          Continue
        </button>
      </div>
    );
  };
  // =======================================================
  // ====================|| INITIAL-LOADING-SCREEN ENDS ||=============================
  // =======================================================
  return (
    <>
      {!continueClicked ? (
        <InitialLoadingScreen />
      ) : (
        <LayoutGeneral>
          <div className="home-screen">
            <div className="empty-home-screen">
              <img src={startingIllustration} alt="" />
              <div>
                <p>Start your journey</p>
                <p>
                  Every big step start with small step. Notes your first idea
                  and start your journey!
                </p>
              </div>
              <button className="button">Get Started</button>
            </div>
          </div>
        </LayoutGeneral>
      )}
    </>
  );
}

export default App;
