import React from 'react';

const TableComponent = ({ data }) => {
    return (
        <table className='data-table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Net</th>
                    <th>Profit</th>
                   
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.id}</td>
                        <td>{row.net}</td>
                        <td>{row.profit}</td>
                      
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableComponent;
