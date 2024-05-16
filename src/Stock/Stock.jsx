import React from 'react';
import './Stock.css';

function Stock() {
    return (

        
        <div className="stock-table">
            
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th className='fulfillmentstat'>Fulfillment State</th>
                        <th  className='paymentstat'>Payment Status</th>
                        <th>Total</th>
                    </tr>
                  
                </thead>

               

                <tbody>
                    <tr>
                        <td>12345</td>
                        <td>John Doe</td>
                        <td ><p className='fulfil'>fulfilled</p></td>
                        <td className='complete'>Fully Paid</td>
                        <td>$100.00</td>
                    </tr>
                    <tr>
                        <td>67890</td>
                        <td>Jane Smith</td>
                        <td><p className='unfulfil'>Unfulfilled</p></td>
                        <td className='incomplete'>Incomplete</td>
                        <td>$50.00</td>
                    </tr>
                    <tr>
                        <td>54321</td>
                        <td>Michael Johnson</td>
                        <td ><p className='unfulfil'>Unfulfilled</p></td>
                        <td className='halfway'>Halfway</td>
                        <td>$75.00</td>
                    </tr>
                    <tr>
                        <td>67890</td>
                        <td>Jane Smith</td>
                        <td><p className='unfulfil'>Unfulfilled</p></td>
                        <td className='incomplete'>Incomplete</td>
                        <td>$50.00</td>
                    </tr>
                    <tr>
                        <td>67890</td>
                        <td>Jane Smith</td>
                        <td><p className='unfulfil'>Unfulfilled</p></td>
                        <td className='incomplete'>Incomplete</td>
                        <td>$50.00</td>
                    </tr>
                    <tr>
                        <td>12345</td>
                        <td>John Doe</td>
                        <td ><p className='fulfil'>fulfilled</p></td>
                        <td className='complete'>Fully Paid</td>
                        <td>$100.00</td>
                    </tr>
                    <tr>
                        <td>54321</td>
                        <td>Michael Johnson</td>
                        <td ><p className='unfulfil'>Unfulfilled</p></td>
                        <td className='halfway'>Halfway</td>
                        <td>$75.00</td>
                    </tr>
                    <tr>
                        <td>67890</td>
                        <td>Jane Smith</td>
                        <td><p className='unfulfil'>Unfulfilled</p></td>
                        <td className='incomplete'>Incomplete</td>
                        <td>$50.00</td>
                    </tr>
                    <tr>
                        <td>12345</td>
                        <td>John Doe</td>
                        <td ><p className='fulfil'>fulfilled</p></td>
                        <td className='complete'>Fully Paid</td>
                        <td>$100.00</td>
                    </tr>
                    

                    

                    
                    {/* Add more rows as needed */}
                </tbody>
            </table>

            
        </div>
    );
}

export default Stock;
