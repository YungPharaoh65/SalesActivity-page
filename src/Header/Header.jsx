import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import FILE_DATA from '../FILE_DATA.json'; // Ensure this file is correctly imported

function Header({ totalCost, unfulfilledCount, fulfilledCount, totalOrders }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % FILE_DATA.length);
        }, 2000); // 2000 milliseconds = 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const getOrderDataForTab = (tabIndex) => {
        const dataIndex = (index + tabIndex) % FILE_DATA.length;
        return FILE_DATA[dataIndex];
    };

    return (
        <header>
            <br /><br />
            <h1>Sales Activity for this week:</h1>

            <div className={styles.box1}>
                <p className={styles.text1}>
                    UnFulfilled Orders:
                    <span className={styles.number}>{unfulfilledCount}</span>
                    Quantity/s
                </p>
            </div>

            <div className={styles.moveyellow}>
                <div className={styles.move2}>
                    <div className={styles.box2}>
                        <p className={styles.text1}>
                            To be Invoiced:
                            <span className={styles.number}>{fulfilledCount}</span>
                            Quantity/s
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.move2}>
                <div className={styles.box3}>
                    <p className={styles.text1}>
                        Fulfilled Orders:
                        <span className={styles.number}>{fulfilledCount}</span>
                        Quantity/s
                    </p>
                </div>
            </div>

            <div className={styles.move2}>
                <div className={styles.box4}>
                    <p className={styles.text1}>
                        Assigned To me:
                        <span className={styles.number}>{totalOrders}</span>
                        Quantity/s
                    </p>
                </div>
            </div>

            <br />
            <div className={styles.box11}>
                <div className={styles.smallbox11}></div>
                <p className={styles.text11}>
                    Out of stock products
                    <span className={styles.number1}>N/A</span>
                </p>
            </div>
            <br />
            <div className={styles.move21}>
                <div className={styles.box21}>
                    <div className={styles.smallbox21}></div>
                    <p className={styles.text11}>
                        All products
                        <span className={styles.number1}>N/A</span>
                    </p>
                </div>
            </div>
            <br />
            <div className={styles.move21}>
                <div className={styles.box31}>
                    <div className={styles.smallbox31}></div>
                    <p className={styles.text11}>
                        Archived products
                        <span className={styles.number1}>N/A</span>
                    </p>
                </div>
            </div>
            <br />
            <div className={styles.move21}>
                <div className={styles.box41}>
                    <div className={styles.smallbox41}></div>
                    <p className={styles.text11}>
                        Quantity On Hand
                        <span className={styles.number1}>{totalOrders}</span>
                    </p>
                </div>
            </div>

            <br />

            <div className={styles.move222}>
                <div className={styles.box71}>
                    <h3>Purchase order</h3>
                    <p className={styles.topic2}>Received Orders</p>
                    <p className={styles.topic2}>Total cost (USD)</p>

                    <div className={styles.number2}>
                        <p className={styles.receivedOrders}>{totalOrders} order/s</p>
                        <p className={styles.totalCost}>${totalCost.toFixed(2)}</p>
                    </div>

                    <div>
                        <h3>Incoming purchase orders</h3>
                        {[0, 1, 2, 3, 4].map((tabIndex) => {
                            const currentData = getOrderDataForTab(tabIndex);
                            return (
                                <React.Fragment key={tabIndex}>
                                    <p className={styles.topic3}>🟠 - # {currentData.order_id} - {currentData.first_name}</p>
                                    <p className={styles.topic33}>{currentData.area}</p>
                                </React.Fragment>
                            );
                        })}
                    </div>

                   
                </div>
            </div>

            <br /><br /><br /><br /><br />
        </header>
    );
}

export default Header;
