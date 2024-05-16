//this is the MOD DISPLAYED THAT SHOWS
//this is the MOD DISPLAYED THAT SHOWS//this is the MOD DISPLAYED THAT SHOWS currently

import React from 'react';
import MOCK_DATA from '../MOCK_DATA.json'; // Import mock data file
import './Stock.css';

function Stock(totalCost) { // Receive totalCost as a prop

    
    return (
        <div className="stock-table">
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th className='fulfillmentstat'>Fulfillment State</th>
                        <th className='paymentstat'>Payment Status</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody  >
                    {MOCK_DATA.map(order => (
                        <tr key={order.Order_id}>
                            <td>{order.Order_id}</td>
                            <td>{order.Customer}</td>
                            <td>
                                <p className={order['Fulfillment state'] ? 'fulfil' : 'unfulfil'}>
                                    {order['Fulfillment state'] ? 'fulfilled' : 'unfulfilled'}
                                </p>
                            </td>
                            <td className={order['Payment Status'] === 'paid fully' ? 'complete' : 'incomplete'}>
                                {order['Payment Status']}
                            </td>
                            <td>{order.Total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Stock;



