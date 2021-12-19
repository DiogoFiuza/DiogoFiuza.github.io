import React from "react";
import Aboutme from "../components/Aboutme";
import Apresentation from "../components/Apresentation";
import Header from "../components/Header";
import Stacks from "../components/Stacks";

function MainPage(){
    return(
      <>
        <Header />
        <Apresentation />
        <Aboutme />
        <Stacks />
      </>
    );
}

export default MainPage