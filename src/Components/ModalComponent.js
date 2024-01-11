
import React from 'react';
import Modal from 'react-modal';
import TableComponent from './TableComponent';

const ModalComponent = ({ isOpen, onRequestClose, tableContent }) => {
    const tableData = [
        { id: 1, net: 100, profit: 20 },
        { id: 2, net: 150, profit: 30 },
        { id: 3, net: 200, profit: 40 },
        { id: 4, net: 250, profit: 50 },
        { id: 5, net: 300, profit: 60 },
      
    ];
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Data"
            className="overlay-default"
        >
            <h2>Data</h2>
            <button className='close-button' onClick={onRequestClose} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                X
            </button>
            <TableComponent  data={tableData} />
        </Modal>
    );
};

export default ModalComponent;
