import React  from "react";
import "./styles/main.scss";
import Header from "./components/Header/Header";
import {MoviesState} from "./context/Movies/MoviesState";
import 'normalize.css';
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
      <div className="App">
          <MoviesState>
              <Header/>
              <Footer/>
          </MoviesState>
      </div>
  )
};

export default App
