import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Index from './page/index';
import Manage from './page/layout/Manage1';
import Content from './page/layout/Content';
import cloneDeep from 'lodash/cloneDeep';
import { getPlainNode } from './utils/utils';
import { getNavData } from 'common/nav.js';

// 第一种方式
// 设置默认的加载组件
// dynamic.setDefaultLoadingComponent(() => {
//     return <Spin size="large" className={styles.globalSpin} />;
// });

function getRouteData(navData, path) {
    if (!navData.some(item => item.layout === path) ||
        !(navData.filter(item => item.layout === path)[0].children)) {
        return null;
    }
    const route = cloneDeep(navData.filter(item => item.layout === path)[0]);
    const nodeList = getPlainNode(route.children);
    return nodeList;
}

function RouterConfig({ history, app }) {
    const navData = getNavData(app);
    const passProps = {
        app,
        getRouteData: (path) => {
            return getRouteData(navData, path);
        },
    };
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/index" exact component={Index} />
                <Route path="/menu" exact component={Manage} />
            </Switch>
        </Router>
    );
}
export default RouterConfig;

//  第2种方式
// const RouterConfig = [
//     {
//         path: '/',
//         component: IndexPage,
//         childRoutes: [
//             { path: '/index', component: Index },
//             {
//                 path: '/menu',
//                 component: Manage
//             }
//         ]
//     }
// ]

// export default RouterConfig;
// ReactDom.render(<Router routes={RouterConfig} />, document.body)
