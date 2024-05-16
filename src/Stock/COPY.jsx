//This is the tanstack library that should show up on the page
//This is the tanstack library that should show up on the page
//This is the tanstack library that should show up on the page

import styles from './Stock.module.css';
import mData from '../MOCK_DATA.json';
import { useReactTable, flexRender, getCoreRowModel } from '@tanstack/react-table';
import { useMemo } from 'react';


function Stock() {
    // Define your data and columns
    const data = [useMemo(() => mData, [])];
    const columns =[ useMemo(
        () => [
            { header: 'Order ID', accessoryKey: 'Order_id' },
            { header: 'Customer', accessoryKey: 'Customer' },
            { header: 'Fulfillment State', accessoryKey: 'Fulfillment state', Cell: ({ value }) => value ? 'Fulfilled' : 'Unfulfilled' },
            { header: 'Payment Status', accessoryKey: 'Payment Status' },
            { header: 'Total', accessoryKey: 'Total' }
        ],
        []
        
    )];

    // Use the useReactTable hook to manage data and columns
    const table = [ useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })];

    return (
        <div className={styles.stock}>
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.Cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                {/* If you want a footer, you can add it here */}
            </table>
        </div>
    );
}

export default Stock;

