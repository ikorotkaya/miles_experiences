import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/MainContainer";


import "./App.css";

export default function App() {
  return (
    <div className="w-full h-full fixed top-0 left-0">
      <div className="h-full grid grid-rows-[100px,1fr,100px] overflow-hidden ">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
