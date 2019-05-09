import React, { Component } from 'react';
//路由的2种形式： hash(HashRouter) , H5的historyApi(BroswerRouter)是路由的容器，是组件，要包在路由的外面
import { HashRouter as Router,Route} from 'react-router-dom'

import Home from './containers/Home'
import Profile from './containers/Profile'
import User from './containers/User'

/* function Home() {
  return  <p>首页</p>
}
function Profile() {
  return  <p>个人中心</p>
}
function User() {
  return  <p>用户中心</p>
} */

function App() {
  return (
    <Router>
      <div>
        <Route path='/' exact={true}  component={Home}></Route>
        <Route path={'/profile'} component={Profile}></Route>
        <Route path={'/user'} component={User}></Route>
      </div>

    </Router>
  );
}

export default App;
