import React, { Component, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

const Home = lazy(() => import('./Home'));


class Web extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path='/' name='Web' component={Home} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Web;