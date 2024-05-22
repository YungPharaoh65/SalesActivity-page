import Header from "./Header/Header.jsx"
import Stock from './Stock/Stock.jsx'
import React, { useState, useEffect } from 'react';


function App() {
    const [totalCost, setTotalCost] = useState(0);

    

    return (
        <div className="App">
            <Header totalCost={totalCost} />
            <Stock setTotalCost={setTotalCost} />
        </div>
    );
}

export default App;
