import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clint from './page/Clint'
import Add from './page/Add'
import Diancai from './page/Diancai'
import Paidui from './page/Paidui'
import Order from './page/Order'
import Header from './components/Header'
import TT from './TT'
import {
    HashRouter as Router,
    Route,
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render((
//     <Router>
//         <div>
//             <Route exact path='/' component={Diancai}></Route>
//             <Route path='/add' component={Add} />
//             <Route path='/diancai' component={Diancai} />
//             <Route path='/paidui' component={Paidui} />
//             <Route path='/order' component={Order} />
//         </div>
//     </Router>), document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(<TT/>,document.getElementById('root'))


