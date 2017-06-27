import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';
import Four04 from './components/Four04'

// let Test = () => <div>404?</div>

ReactDOM.render(

		<BrowserRouter>
			<div>
				<Switch>
					<Route path='/' exact component={App}></Route>
					<Route component={Four04}></Route>
				</Switch>
			</div>
		</BrowserRouter>

, 
document.getElementById('root'));
registerServiceWorker();
