// ==============|| PACKAGES IMPORTS ||==================
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

// ==============|| IMAGES IMPORTS ||==================
import homeLogo from "../../assets/images/svg/home_logo.svg";
import startingIllustration from "../../assets/images/png/starting_illustration.png";

// ==============|| FUNCTIONS/UTILITIES IMPORTS ||==================

// ==============|| HOOKS IMPORTS ||==================

// ==============|| COMPONENTS IMPORTS ||==================
import "./Home.css";
import {
  useAddNewNoteModal,
  // useAllNotes,
  useHomeDisplayState,
} from "../../store/Stores";
import { getNotes } from "../../utilities/notes";

// import { useCurrentNavTab } from "../../store/Stores";

export async function loader() {
  return getNotes();
}

function Home() {
  // const currentTab = useCurrentNavTab((state) => state.tabValue);
  const setOpenSelectModal = useAddNewNoteModal((state) => state.updateIsOpen);
  const homeDisplayState = useHomeDisplayState((state) => state.displayState);
  const setHomeDisplayState = useHomeDisplayState(
    (state) => state.updateDisplayState
  );

  // const allNotes = useAllNotes((state) => state.allNotes);
  const notes = useLoaderData();

  useEffect(() => {
    setTimeout(() => {
      notes[0]
        ? setHomeDisplayState("notes_exist")
        : setHomeDisplayState("no_note");
    }, 3000);
  }, [homeDisplayState]);

  // console.log("the displayState: ", homeDisplayState);

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
            <div>
              <h2>Existing Notes</h2>
              <div>
                <ul>
                  {notes.map((note) => (
                    <li key={note.id}>
                      <Link to={`/note/${note.id}`}>{note.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Home;
