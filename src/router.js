import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Index from './page/index';

function RouterConfig({history}) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={IndexPage}/>
                <Route path="/index" exact component={Index}/>
            </Switch>
        </Router>
    );
}

export default RouterConfig;
