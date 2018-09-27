import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from 'Pages/MainPage';
import ContinentsPage from 'Pages/ContinentsPage';
import CountriesPage from 'Pages/CountriesPage';
import NotFound from 'Pages/NotFound';
import CityInfoPage from 'Pages/CityInfoPage';
import './style.scss';

const App = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route exact path='/continents/' component={ContinentsPage} />
                <Route exact path='/countries/' component={CountriesPage} />
                <Route exact path='/countries/:continent/' component={MainPage} />
                <Route exact path='/country/:name/admin1divisions/' component={MainPage} />
                <Route exact path='/admin1divisions/:name/cities/' component={MainPage} />
                <Route exact path='/city/:name' component={CityInfoPage} />
                <Route path='*' component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
