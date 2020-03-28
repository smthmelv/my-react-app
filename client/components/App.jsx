import React from 'react';
import Score from './score.jsx';
// import styles from './App.css';
import './App.css';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTypes } from '../../server/requests.js';

// Here is the App component created using the
// more modern/functional "hooks" api rather
// than the class based structure using the class
// methods like "render()" and "componentDidMount()"
export const App = (props) => {
  const [data, setData] = React.useState();
  
  // useEffect is a react hook that triggers any time the data
  // inside the dependency array changes (the second parameter of this function)
  // with an empty array passed (like we're doing) it just means this gets called once
  // on the initial component render, then never again.
  React.useEffect(() => {
    // do some api call then call setData()
    // something like the below example but it's
    // just pseudocode so idk if it works as is or not
    // axios.get(...).then(data => setData(data));
  },[]);

  // <></> is a new(ish) shorthand for <React.Fragment></React.Fragment>
  return (
   <>
     <div className="App_header">
       <h1>Hello World</h1>
     </div>
     <Score />
   </>
 );
};

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
    return bindActionCreators({
        getTypes
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
