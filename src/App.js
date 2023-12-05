import classes from "./Styles/app.module.css";

import Leftbar from "./Components/Leftbar";
import Content from "./Components/Content";
import Profile from "./Components/Profile";
import { Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Info from "./Components/Info";
import Noti from "./Components/Noti";
import Login from "./Components/Login";
import { useState } from "react";
import { GlobalStateProvider, useGlobalState } from "./Context/authctx";
import { useEffect } from "react";
function App() {
  const [state, dispatch] = useGlobalState();
  return (
    
      <div className={classes.container}>
        {state.log? (
          <>
            <Leftbar />
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/notifications" element={<Noti />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/info" element={<Info />} />
            </Routes>
            <Profile />
          </>
        ) : (
          <Routes>
             <Route path="/" element={<Login />} />
          </Routes>
        )}
      </div>
  
  );
}

export default App;
