// Stock.jsx
import React, { useEffect, useState } from "react";
import MOCK_DATA from "../MOCK_DATA.json";
import "./Stock.css";

function Stock({ setTotalCost, setUnfulfilledCount, setFulfilledCount, setTotalOrders }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [customerSearchQuery, setCustomerSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(() => {

    // Retrieve filtered data from local storage, or use MOCK_DATA if it doesn't exist
    const storedData = localStorage.getItem("filteredData");
    return storedData ? JSON.parse(storedData) : [...MOCK_DATA];
    
  });

  useEffect(() => {
    const total = filteredData.reduce((acc, order) => {
      const amount = parseFloat(order.Total.replace(/[^0-9.-]+/g, "")) || 0;
      return acc + amount;
    }, 0);
    setTotalCost(total);
  }, [filteredData, setTotalCost]);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = MOCK_DATA.filter((order) => {
      const fulfillmentState = order["Fulfillment state"] ? "fulfilled" : "unfulfilled";
      return (
        lowerCaseQuery === "" || fulfillmentState.toLowerCase() === lowerCaseQuery
      );
    });
    setFilteredData(filtered);
    localStorage.setItem("filteredData", JSON.stringify(filtered)); // Store filtered data in local storage
  }, [searchQuery]);

  useEffect(() => {
    const lowerCaseCustomerQuery = customerSearchQuery.toLowerCase();
    const filtered = MOCK_DATA.filter((order) => {
      const customerName = order.Customer.toLowerCase();
      return (
        lowerCaseCustomerQuery === "" || customerName.includes(lowerCaseCustomerQuery)
      );
    });
    setFilteredData(filtered);
    localStorage.setItem("filteredData", JSON.stringify(filtered)); // Store filtered data in local storage
  }, [customerSearchQuery]);

  useEffect(() => {
    const unfulfilledOrders = filteredData.filter((order) => !order["Fulfillment state"]);
    const fulfilledOrders = filteredData.filter((order) => order["Fulfillment state"]);

    const uniqueUnfulfilledCustomers = [...new Set(unfulfilledOrders.map((order) => order.Customer))];
    const uniqueFulfilledCustomers = [...new Set(fulfilledOrders.map((order) => order.Customer))];

    setUnfulfilledCount(uniqueUnfulfilledCustomers.length);
    setFulfilledCount(uniqueFulfilledCustomers.length);
    setTotalOrders(filteredData.length);
  }, [filteredData, setUnfulfilledCount, setFulfilledCount, setTotalOrders]);

  const deleteCustomer = (orderId) => {
    const updatedData = filteredData.filter(order => order.Order_id !== orderId);
    setFilteredData(updatedData);
    localStorage.setItem("filteredData", JSON.stringify(updatedData)); // Update filtered data in local storage
  };

  return (
    <div className="box66">
      <div className="stock-table">
        <div className="moveinput">
          <input
            type="text"
            className="fulfillment_state"
            placeholder="Search by fulfillment state...🔎 fulfilled OR unfulfilled"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Search by customer...🔎 (type the name on 'customer')"
            value={customerSearchQuery}
            onChange={(e) => setCustomerSearchQuery(e.target.value)}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th className="orderID">Order ID</th>
              <th>Customer</th>
              <th className="fulfillmentstat">Fulfillment State</th>
              <th className="paymentstat">Payment Status</th>
              <th >Total</th>
              <th className="total"></th> {/* Add Action column for delete button */}
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((order) => (
                <tr key={order.Order_id}>
                  <td>{order.Order_id}</td>
                  <td>{order.Customer}</td>
                  <td>
                    <p className={order["Fulfillment state"] ? "fulfil" : "unfulfil"}>
                      {order["Fulfillment state"] ? "fulfilled" : "unfulfilled"}
                    </p>
                  </td>
                  <td className={order["Payment Status"] === "paid fully" ? "complete" : "incomplete"}>
                    {order["Payment Status"]}
                  </td>
                  <td>{order.Total}</td>
                  <td>
                    <button className="deleteBtn" onClick={() => deleteCustomer(order.Order_id)}>x</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  source does not exist
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Stock;
