import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import AppHeader from './Components/Header';
import Product from './pages/Product';
import About from './pages/About';
import Footer from './Components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import YourComponent from './Components/SampleComponent';

const App = () => {


    return (

        <div>
            {/* top head  nav bar*/}
            <BrowserRouter>
                
                    <AppHeader />
                    <Routes>
                        <Route index element={<Product/>}/>
                        <Route path='/product' element={<Product />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
                    {/* <YourComponent /> */}
                    <Footer />
                {/* end part */}
            </BrowserRouter>
        </div>

    );
};

export default App;