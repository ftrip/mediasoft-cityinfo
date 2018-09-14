import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from 'Pages/MainPage';
import NotFound from 'Pages/NotFound';

const App = () => (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default App;
