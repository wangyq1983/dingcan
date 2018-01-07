import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';
import './index.css';

import App from './App';
import Paidui from './page/Client/Paidui';
import Diancai from './page/Client/Diancai';
import Jiacai from './page/Client/Jiacai';
import Order from './page/Client/Order';
import *as Config from './const/Config'
import registerServiceWorker from './registerServiceWorker';
import Detail from './page/Client/Detail';
import Demo from './test/Demo';
import Client from './page/Client'

ReactDOM.render((
    <Router>
        <div>
            <Route exact path='/' component={Diancai}/>
            <Route path='/paidui' component={Paidui}/>
            <Route path='/diancai' component={Diancai}/>
            <Route path='/jiacai' component={Jiacai}/>
            <Route path='/order' component={Order}/>
            <Route path='/detail' component={Detail}/>
        </div>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
