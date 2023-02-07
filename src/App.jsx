import {
  Blog,
  Header,
  WhatGPT3,
  Features,
  Possibility,
  Footer,
} from "./containers";
import { Brand, CTA, Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
