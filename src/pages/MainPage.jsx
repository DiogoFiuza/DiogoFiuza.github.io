import React from "react";
import Aboutme from "../components/Aboutme";
import Apresentation from "../components/Apresentation";
import Header from "../components/Header";

function MainPage(){
    return(
      <>
        <Header />
        <Apresentation />
        <Aboutme />
      </>
    );
}

export default MainPage