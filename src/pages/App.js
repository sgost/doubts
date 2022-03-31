import React, { createContext, useState } from 'react';
import Hoc from "./Hoc"

const App = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Welcome</h1>
        </div>
    );
}

export default App(Hoc); //wrapping the component HOC