import {useReactTable, getCoreRowModel, flexRender} from '@tanstack/react-table'
import styles from './Header.module.css'
import Stock from '../Stock/Stock.jsx';


// ERROR AT LINE 58 :-(

function Header(){


    
    return(

        //first Row Boxes with colors 
        <header>

            <br /><br />
            <h1>Sales Activity for this week: </h1>

            <div className={styles.box1}><p className={styles.text1}>To be Furfilled: <p className={styles.number}>98</p> Quantity</p></div>
            
            <div className={styles.move2}>
            <div className={styles.box2}><p className={styles.text1}>To be Invoiced: <p className={styles.number}>98</p> Quantity</p> </div>
            </div>

            <div className={styles.move2}>
            <div className={styles.box3}><p className={styles.text1}>Completed: <p className={styles.number}>98</p> Quantity</p> </div>
            </div>

            <div className={styles.move2}>
            <div className={styles.box4}><p className={styles.text1}>Assigned To me: <p className={styles.number}>98</p> Quantity</p> </div>
            </div>

            {/* Second Row Boxes  with Info */}  {/* Second Row Boxes  with Info */}  {/* Second Row Boxes  with Info */}  {/* Second Row Boxes  with Info */}
            {/* Second Row Boxes  with Info */}  {/* Second Row Boxes  with Info */}  {/* Second Row Boxes  with Info */}  {/* Second Row Boxes  with Info */}  {/* Second Row Boxes  with Info */}
<br />
            <div className={styles.box11}><div className={styles.smallbox11}></div> <p className={styles.text11}>Out of stock products <p className={styles.number1}>98.00</p> </p></div>
 <br />
            <div className={styles.move21}>
            <div className={styles.box21}><div className={styles.smallbox21}></div><p className={styles.text11}>All products <p className={styles.number1}>98.00</p> </p> </div>
            </div>
<br />
            <div className={styles.move21}>
            <div className={styles.box31}><div className={styles.smallbox31}></div><p className={styles.text11}>Archived products <p className={styles.number1}>98.00</p> </p> </div>
            </div>
<br />
            <div className={styles.move21}>
            <div className={styles.box41}><div className={styles.smallbox41}></div><p className={styles.text11}>Quantity On Hand <p className={styles.number1}>98.00</p> </p> </div>
            </div>

             {/* Second Row Boxes  with Info */}  {/* Second Row Boxes  with Info */}  {/* Second Row Boxes  with Info */}  {/* Second Row Boxes  with Info */}
            {/* Second Row Boxes  with Info */}  {/* Second Row Boxes  with Info */}  {/* Second Row Boxes  with Info */}  {/* Second Row Boxes  with Info */}  {/* Second Row Boxes  with Info */}

            {/*Latest sale orders-by sales channel*/}{/*Latest sale orders-by sales channel*/}{/*Latest sale orders-by sales channel*/}{/*Latest sale orders-by sales channel*/}{/*Latest sale orders-by sales channel*/}
            {/*Latest sale orders-by sales channel*/}{/*Latest sale orders-by sales channel*/}{/*Latest sale orders-by sales channel*/}{/*Latest sale orders-by sales channel*/}{/*Latest sale orders-by sales channel*/}

            <br />
            <div className={styles.box66}>   {/*WHENEVER I ADD THE <Stock/> LINE, THE WHOLE PAGE DISSAPEARS...WHY???*/}
            
            </div>

            {/*Latest sale orders-by sales channel*/}{/*Latest sale orders-by sales channel*/}{/*Latest sale orders-by sales channel*/}{/*Latest sale orders-by sales channel*/}{/*Latest sale orders-by sales channel*/}
            {/*Latest sale orders-by sales channel*/}{/*Latest sale orders-by sales channel*/}{/*Latest sale orders-by sales channel*/}{/*Latest sale orders-by sales channel*/}{/*Latest sale orders-by sales channel*/}



            {/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}
            {/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}
<br />


           
            <div className={styles.move21}>
            <div className={styles.box71}> <h3>Purchase order</h3> 
            <p className={styles.topic2}>Received Orders</p>
            <p className={styles.topic2}>Total cost (USD)</p>
            

            <div className={styles.number2}>
            <p className={styles.receivedOrders}>$25 00</p>
            <p className={styles.totalCost}>$25 00</p>
            </div>

            


            <h3>Incoming purchase orders</h3>

            {/* This is grouuped by the way*/}
            <p className={styles.topic3}> 🟧 - # P0005 </p>
            <p className={styles.topic33}> Ernest Garbon </p>

            <p className={styles.topic3}> 🟦 - # P0005 </p>
            <p className={styles.topic33}> Ernest Garbon </p>

            <p className={styles.topic3}> 🟪 - # P0005 </p>
            <p className={styles.topic33}> Ernest Garbon </p>

            <p className={styles.topic3}> 🟥 - # P0005 </p>
            <p className={styles.topic33}> Ernest Garbon </p>
            
            
            <div className={styles.number3}>
            <p className={styles.incomingAmount}>$25 00</p>
            <p className={styles.incomingAmount}>$25 00</p>
            
            
            <p className={styles.spaceAmount}>$25 00</p>
            <p className={styles.spaceAmount}>$25 00</p>
            </div>

           <p className={styles.topic22}>view all</p>
            </div>

           
            
            </div>
            

          
           {/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}{/*Purchase Orders*/}

<br /><br /><br /><br /><br />



            














            




            
            

        </header>

        
        


    );

}

export default Header