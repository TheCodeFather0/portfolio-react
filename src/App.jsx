import React from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import ScrollSpy from "react-ui-scrollspy";

const App = () => {
  return (
    <ScrollSpy>
      <Header />
      <Banner />
    </ScrollSpy>
  );
};

export default App;
