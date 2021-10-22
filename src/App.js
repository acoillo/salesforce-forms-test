import './App.css';
import React, { lazy, Suspense } from 'react';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';

const web = lazy(() => import('./scenes/web'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={
        <div>

        </div>
      }>
    <Router>
      <Switch>
        <Route path='/' name='Web' component={web} />
      </Switch>
    </Router>
      </Suspense>
  </div>
  );
}

export default App;
