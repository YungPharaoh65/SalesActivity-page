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
            
      <h1>Sales Activity For: </h1>
      <div className={styles.box1}>
        <p className={styles.text1}>
          UnFurfilled Orders:{" "}
          <p className={styles.number}>{unfulfilledCount}</p> Quantity/s
        </p>
      </div>
      <div className={styles.moveyellow}>
        <div className={styles.move2}>
          <div className={styles.box2}>
            <p className={styles.text1}>
              To be Invoiced: <p className={styles.number}>{fulfilledCount}</p>{" "}
              Quantity/s
            </p>{" "}
          </div>
        </div>
      </div>
      <div className={styles.move2}>
        <div className={styles.box3}>
          <p className={styles.text1}>
            Fulfilled Orders: <p className={styles.number}>{fulfilledCount}</p>{" "}
            Quantity/s
          </p>{" "}
        </div>
      </div>
      <div className={styles.move2}>
        <div className={styles.box4}>
          <p className={styles.text1}>
            Assigned To me: <p className={styles.number}>{totalOrders}</p>{" "}
            Quantity/s
          </p>{" "}
        </div>
      </div>
      {/* Second Row Boxes  with Info */} {/* Second Row Boxes  with Info */}{" "}
      {/* Second Row Boxes  with Info */} {/* Second Row Boxes  with Info */}
      {/* Second Row Boxes  with Info */} {/* Second Row Boxes  with Info */}{" "}
      {/* Second Row Boxes  with Info */} {/* Second Row Boxes  with Info */}{" "}
      {/* Second Row Boxes  with Info */}
      <br />
      <div className={styles.box11}>
        <div className={styles.smallbox11}></div>{" "}
        <p className={styles.text11}>
          Out of stock products <p className={styles.number1}>N/A</p>{" "}
        </p>
      </div>
      <br />
      <div className={styles.move21}>
        <div className={styles.box21}>
          <div className={styles.smallbox21}></div>
          <p className={styles.text11}>
            All products <p className={styles.number1}>N/A</p>{" "}
          </p>{" "}
        </div>
      </div>
      <br />
      <div className={styles.move21}>
        <div className={styles.box31}>
          <div className={styles.smallbox31}></div>
          <p className={styles.text11}>
            Archived products <p className={styles.number1}>N/A</p>{" "}
          </p>{" "}
        </div>
      </div>
      <br />
      <div className={styles.move21}>
        <div className={styles.box41}>
          <div className={styles.smallbox41}></div>
          <p className={styles.text11}>
            Quantity On Hand <p className={styles.number1}>{totalOrders}</p>{" "}
          </p>{" "}
        </div>
      </div>
      {/* Second Row Boxes  with Info */} {/* Second Row Boxes  with Info */}{" "}
      {/* Second Row Boxes  with Info */} {/* Second Row Boxes  with Info */}
      {/* Second Row Boxes  with Info */} {/* Second Row Boxes  with Info */}{" "}
      {/* Second Row Boxes  with Info */} {/* Second Row Boxes  with Info */}{" "}
      {/* Second Row Boxes  with Info */}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Latest sale orders-by sales channel*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
      {/*Purchase Orders*/}
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
