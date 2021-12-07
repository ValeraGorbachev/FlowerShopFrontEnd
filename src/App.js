import React, { useState, useEffect } from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListBouquetComponent from "./components/ListBouquetComponent";
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ViewBouquetComponent from './components/ViewBouquetComponent';
import CreateBouquetComponent from './components/CreateBouquetComponent';
import UpdateBouquetComponent from './components/UpdateBouquetComponent';


function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route path = "/" exact component = {ListBouquetComponent}></Route>
                        <Route path = "/bouquets" component = {ListBouquetComponent}></Route>
                        <Route path = "/add-bouquet/:id" component = {CreateBouquetComponent}></Route>
                        <Route path = "/view-bouquet/:id" component = {ViewBouquetComponent}></Route>
                         <Route path = "/update-bouquet/:id" component = {UpdateBouquetComponent}></Route>
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>
);
}

export default App;