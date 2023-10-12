// ==============|| PACKAGES IMPORTS ||==================
import { useEffect, useState } from "react";

// ==============|| IMAGES IMPORTS ||==================
import homeLogo from "../../assets/images/svg/home_logo.svg";
import startingIllustration from "../../assets/images/png/starting_illustration.png";

// ==============|| FUNCTIONS/UTILITIES IMPORTS ||==================

// ==============|| HOOKS IMPORTS ||==================

// ==============|| COMPONENTS IMPORTS ||==================
import "./Home.css";
import {
  useAddNewNoteModal,
  useAllNotes,
  useHomeDisplayState,
} from "../../store/Stores";
// import { useCurrentNavTab } from "../../store/Stores";

function Home() {
  // const currentTab = useCurrentNavTab((state) => state.tabValue);
  const setOpenSelectModal = useAddNewNoteModal((state) => state.updateIsOpen);
  const homeDisplayState = useHomeDisplayState((state) => state.displayState);
  const setHomeDisplayState = useHomeDisplayState(
    (state) => state.updateDisplayState
  );

  const allNotes = useAllNotes((state) => state.allNotes);

  useEffect(() => {
    setTimeout(() => {
      allNotes[0]
        ? setHomeDisplayState("notes_exist")
        : setHomeDisplayState("no_note");
    }, 3000);
  }, [homeDisplayState]);

  console.log("the displayState: ", homeDisplayState);

  // =======================================================
  // ====================|| INITIAL-LOADING-SCREEN STARTS ||=============================
  // =======================================================
  const InitialLoadingScreen = () => {
    return (
      <div className="initial-home-container">
        <img src={homeLogo} alt="" />
        <h1>My-Notes</h1>
        <p>
          Note-Ta<span>king App</span>
        </p>
      </div>
    );
  };
  // =======================================================
  // ====================|| INITIAL-LOADING-SCREEN ENDS ||=============================
  // =======================================================

  return (
    <>
      {homeDisplayState === "loading" ? (
        <InitialLoadingScreen />
      ) : (
        <div className="home-screen">
          {homeDisplayState === "no_note" ? (
            <div className="empty-home-screen">
              <img src={startingIllustration} alt="" />
              <div>
                <p>Start your journey</p>
                <p>
                  Every big step start with small step. Notes your first idea
                  and start your journey!
                </p>
              </div>
              <button
                onClick={() => setOpenSelectModal(true)}
                className="button"
              >
                Get Started
              </button>
            </div>
          ) : (
            <div>Notes exist here</div>
          )}
        </div>
      )}
    </>
  );
}

export default Home;
