import React from 'react';
import Score from './score.jsx';
// import styles from './App.css';
import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="App_header">
                    <h1>Hello World</h1>
                </div>
                <Score />
            </React.Fragment>
        );
    }
}