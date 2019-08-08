import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Car from './App';
import * as serviceWorker from './serviceWorker';
import styles from './mystyle.module.css';

class MyHeader extends React.Component {
	render() {
		return (
			<div>
				<h1 className={styles.bigblue}>Hello Style!</h1>
				<p>Add a little style!</p>
			</div>
		);
	}
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
