import React, { Component } from 'react';
// import { Route} from "react-router";
import{BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import CreatePage from "./Pages/CreatePage";
import ReadPage from "./Pages/ReadPage";
import UpdatePage from "./Pages/UpdatePage";
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<ReadPage/>}/>
                        <Route exact path='/create' element={<CreatePage/>} />
                        <Route exact path='/update/:id' element={<UpdatePage/>} />
                    </Routes>
                </Router>
            </div>
        );
    }
}
export default App;
