import React, { useContext, useState } from 'react';
import { FirstName } from "./App";

const ComponentA = () => {
    const [data, setData] = useContext(FirstName);
    const [name, setName] = useState('');

    const data3 = JSON.parse(localStorage.getItem('data'));

    const submit = e => {
        if (name.length >= 1) {
            setData([...data, { brandname: name }]);
        }
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>count: {data.length}</h1>
            <h2>Items</h2>
            {data3.map(data =>
                <h3>{data.brandname}</h3>
            )}
            <input type='text' placeholder='add item' onChange={(e) => setName(e.target.value)} />
            <button style={{ margin: '10px 0' }} onClick={submit}>Submit</button>
        </div>
    );
}

export default ComponentA;