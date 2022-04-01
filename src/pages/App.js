import React from 'react';
import { connect } from 'react-redux';
import { IncAction, DecAction } from './actions';

const App = ({ local_variable, IncAction, DecAction }) => {

    return (
        <center>
            <h1>{local_variable}</h1>
            <button onClick={() => IncAction(100)}>Inc</button>
            <button onClick={DecAction}>Dec</button>
        </center>
    );
}
const mapStateToProps = state => ({
    local_variable: state
})
export default connect(mapStateToProps, { IncAction, DecAction })(App);