import React from 'react';
import Score from './score.jsx';
// import styles from './App.css';
import './App.css';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTypes } from '../../server/requests.js';

class App extends React.Component {
    componentDidMount() {
        getTypes();
    }

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

const mapStateToProps = (state) => ({
    TYPES: state.TYPES
})

const mapDispatchToProps = (dispatch) => {
    // return {
    //     getData: () => dispatch(getData())
    // }
    return bindActionCreators({
        getTypes
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)