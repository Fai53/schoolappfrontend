import React from "react";
import Header from "../Components/Header";
import MySidebar from "../Components/MySidebar";


const Tertiary
 = () => {
  return (
    <>
      <Header />
      
	<div className="app">
  <MySidebar />
    <div className="content">
      <div className="styles">
      <h1>Tertiary Schools</h1>
      <p>
        These are the list of tertiary institutions in Upper West and their location
      </p>
    </div>
    </div>
    </div>
    </>
  );
};

export default Tertiary
;
