import React from "react";
import "./styles/main.scss";
import 'normalize.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import FindMovie from "./Pages/FindMovie/FindMovie";
import FoundMovie from "./Pages/FoundMovie/FoundMovie";
import CatchError from "./components/CatchError/CatchError";
import {Provider} from 'react-redux';
import store from "./redux/store";
const App: React.FC = (props) => {

    return (
        // <CatchError>
           <Provider store={store}>
                <Router>
                    <Route path='/movie/:movieId'>
                        <FoundMovie/>
                    </Route>
                    <Route path='/' exact={true}>
                        <FindMovie/>
                    </Route>
                </Router>
        </Provider>
         // </CatchError>
    )
};

export default App
