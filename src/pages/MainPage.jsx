import React from "react";
import Aboutme from "../components/Aboutme";
import Apresentation from "../components/Apresentation";
import Header from "../components/Header";
import Stacks from "../components/Stacks";
import Footer from "../components/Footer";
import "../styles/MainPage.css"

function MainPage(){
    return(
      <>
        <Header />
        <Apresentation />
        <Aboutme />
        <Stacks />
        <Footer />
      </>
    );
}

export default MainPage