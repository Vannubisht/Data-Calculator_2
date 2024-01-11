import React, { useEffect, useState } from 'react';
import ProgressBar from '../Components/Progress';
import DoughnutChart from '../Components/DoughnutChart';
import RadioButtons from '../Components/RadioButton';
import TableComponent from '../Components/TableComponent';
import ModalComponent from '../Components/ModalComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';





const calculateValues = (buyPrice, sellPrice, quantity, taxRate) => {
    const grossValue = sellPrice * quantity;
    const TotalProfit = grossValue - (buyPrice * quantity);
    const totalTax = TotalProfit * (taxRate / 100);
    const netProfit = TotalProfit - totalTax;

    return {
        grossValue,
        TotalProfit,
        totalTax,
        netProfit,
    };
};



const Product = () => {
    const SliderMarks = {
        markbuy: { 1: '1L', 2: '2L', 3: '3L', 4: '4L', 5: '5L', 6: '6L', },
        marksell: { 5: '5%', 10: '10%', 15: '15%', 20: '20%', 25: '25%\u00A0\u00A0' },
        markquantity: { 10: '10', 20: '20', 30: '30', 40: "40", 50: "50", 60: '60', },
    };


    const [buyPrice, setBuyPrice] = useState(100000);
    const [sellPrice, setSellPrice] = useState(300000);
    const [quantity, setQuantity] = useState(10);
    const [chartData, setChartData] = useState(null);
    const [selectedExchange, setSelectedExchange] = useState('NSE');
    const [showModal, setShowModal] = useState(false);

    const taxRate = 10; // Fixed tax rate

    const values = calculateValues(buyPrice, sellPrice, quantity, taxRate);


    useEffect(() => {
        setChartData([values.netProfit, values.totalTax]);
    }, [values.netProfit, values.totalTax, buyPrice, sellPrice, quantity]);


    const handleExchangeChange = (exchange) => {
        setSelectedExchange(exchange);
    };


    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (

        <div className='container'>
            <div className='row Data'>
                {/* ProgressBar section */}
                <div className='col-md-8 bar'>
                    <div className='table-button'>
                        <button className="custom-button" onClick={handleButtonClick}>View Detail</button>
                        <ModalComponent
                            isOpen={showModal}
                            onRequestClose={handleCloseModal}
                            contentLabel="Data"
                        >
                            {/* Pass the table data to the TableComponent */}
                            <TableComponent />
                            {/* ModalComponent */}
                        </ModalComponent>
                    </div>

                    {/* ...DoughnutChart section */}
                    <div className='pb-5'>
                        <h6>Buy Price</h6>
                        <ProgressBar label="" value={buyPrice} onChange={setBuyPrice} minValue={100000} maxValue={600000} inputWidth={"500px"} marks={SliderMarks.markbuy} />
                    </div>

                    <div className='pb-5'>
                        <h6>Sell Price</h6>
                        <ProgressBar label="" value={sellPrice} onChange={setSellPrice} minValue={300000} maxValue={1800000} inputWidth={"500px"} marks={SliderMarks.marksell} />
                    </div>

                    <div className='pb-5'>
                        <h6>Quantity</h6>
                        <ProgressBar label="  " value={quantity} onChange={setQuantity} minValue={10} maxValue={50} inputWidth={"500px"} marks={SliderMarks.markquantity} />
                    </div>
                </div>

                <div className=' col-md-4  col-sm-3 Data-2'>
                    {chartData && (
                        <div>
                            {/* Radiobutton  section NSF BSF */}
                            <div className='top-data'>
                                <RadioButtons selectedExchange={selectedExchange} onChange={handleExchangeChange} />
                            </div>

                            {/* DoughnutChart section */}
                            <DoughnutChart doughnet={values.netProfit} doughnet2={values.totalTax} />

                        </div>

                    )}

                    {/* color show component */}
                    <div className='color-data'>
                        <div className='blue-box'></div>
                        <div>Net P&L</div>

                        <div className='yellow-box'></div>
                        <div>Total tax & charge</div>
                    </div>


                    {/* end-data section */}
                    <div className='bar-2 '>
                        <p>Gross Value <br />{values.grossValue}</p>
                        <p>Total Tax <br />{values.totalTax.toFixed(2)}</p>
                        <p>Net Profit <br />{values.netProfit.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;