import React from "react";
import "./styles/main.scss";
import 'normalize.css';
import MoviesState from "./context/Movies/MoviesState";
import {BrowserRouter as Router, Route} from "react-router-dom";
import s from "./app.module.scss";
import FindMovie from "./Pages/FindMovie/FindMovie";
import FoundMovie from "./Pages/FoundMovie/FoundMovie";

const App: React.FC = (props) => {

    return (
        <MoviesState>
            <Router>
                <Route path='/movie'>
                    <FoundMovie/>
                </Route>
                <Route path='/'>
                    <FindMovie/>
                </Route>
            </Router>
        </MoviesState>

    )
};

export default App
