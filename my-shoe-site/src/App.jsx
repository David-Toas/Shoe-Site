// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Down from "./Components/Down/Down";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-between bg-gray-900 text-gray-200 sm:h-screen">
     <Navbar/>
     <Hero/>
     <Down />
    </div>
  )
}

export default App;