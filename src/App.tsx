import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/MainContainer";


import "./App.css";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
