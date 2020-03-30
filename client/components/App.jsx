import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTypes } from '../requests.js';
import './App.css';
import Score from './score.jsx';
import Weather from './weather.jsx';

class App extends React.Component {
    componentDidMount() {
        const { getTypes } = this.props;

        getTypes();
    }

    render() {
        const { types } = this.props;

        return (
            <React.Fragment>
                <div className="App_header">
                    <h1>The Random Display App</h1>
                </div>
                <Weather />
                <Score types={this.props.types}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    types: state.types
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getTypes
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)