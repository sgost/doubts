import React, { createContext, useState } from 'react';
import ComponentA from "./ComponentA"

const FirstName = createContext();

const App = () => {

    const [data, setData] = useState([
        {
            brandname: "Nokia"
        },
        {
            brandname: "realme"
        },
        {
            brandname: "mi"
        }
    ]);



    return (
        <FirstName.Provider value={[data, setData]}>
            <ComponentA />
        </FirstName.Provider>
    );
}

export default App;
export { FirstName };