import React from 'react';
import './style/App.css'
import {Route, Link, Routes, Redirect, Router} from "react-router-dom";
import Serv from "./Components/Serv";
import MyPage from "./Components/MyPage";

function App() {
    return (
        <div className="App">
            <div>
           <Routes>
               <Route path={'/'} element = {<MyPage/>}/>
               <Route path={'/Serv'} element = {<Serv/>}/>
           </Routes>
            </div>
        </div>
    );

}
export default App;
