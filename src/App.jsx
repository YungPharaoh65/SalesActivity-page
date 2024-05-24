import Header from "./Header/Header.jsx";
import Stock from './Stock/Stock.jsx';
import React, { useState } from 'react';

function App() {
    const [totalCost, setTotalCost] = useState(0);
    const [unfulfilledCount, setUnfulfilledCount] = useState(0);
    const [fulfilledCount, setFulfilledCount] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);

    return (
        <div className="App">
            <Header 
                totalCost={totalCost} 
                unfulfilledCount={unfulfilledCount} 
                fulfilledCount={fulfilledCount} 
                totalOrders={totalOrders} 
            />
            <Stock 
                setTotalCost={setTotalCost} 
                setUnfulfilledCount={setUnfulfilledCount} 
                setFulfilledCount={setFulfilledCount} 
                setTotalOrders={setTotalOrders} 
            />
        </div>
    );
}

export default App;
