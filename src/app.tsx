import React from "react";
import "./styles/main.scss";
import 'normalize.css';
import MoviesState from "./context/Movies/MoviesState";
import {BrowserRouter as Router, Route} from "react-router-dom";
import FindMovie from "./Pages/FindMovie/FindMovie";
import FoundMovie from "./Pages/FoundMovie/FoundMovie";
import CatchError from "./components/CatchError/CatchError";

const App: React.FC = (props) => {

    return (
        <CatchError>
            <MoviesState>
                <Router>
                    <Route path='/movie/:movieId'>
                        <FoundMovie/>
                    </Route>
                    <Route path='/' exact={true}>
                        <FindMovie/>
                    </Route>
                </Router>
            </MoviesState>
         </CatchError>
    )
};

export default App
