import React from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import ScrollSpy from "react-ui-scrollspy";
import About from "./Components/About";

const App = () => {
  return (
    <ScrollSpy>
      <Header />
      <Banner />
      <About />
    </ScrollSpy>
  );
};

export default App;
