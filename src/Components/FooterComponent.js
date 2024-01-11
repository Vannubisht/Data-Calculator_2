import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social icons from a library
import EmailForm from './EmailForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className='footerdata'>
      <EmailForm />
      <div className="footer-content">
        <div className="brand-info">
          <div className='brand '><h2>TREDZ</h2></div>
          <div className="col-lg-3 mb-5">

            <div className="last last-recent-entries">
              <div className="last-title">
                <h6 className="mb-4 ms-5 text-uppercase">Quick Links</h6>
              </div >
              <div className='info '>
                <div>
                  <li className='pb-3'><a href="#">Product</a></li>
                  <li className='pb-3'><a href="#">About Us</a></li>
                  <li className='pb-3'><a href="#">Career</a> </li>
                </div>

                <div>
                  <li className='pb-3'><a href="#">Resouce</a></li>
                  <li className='pb-3'><a href="#">Pricing</a></li>
                  <li className='pb-3'><a href="#">Technology</a> </li>
                </div>
              </div>
            </div>
          </div>
          <div className="social-icons">
            <h6 className="mb-4 ms-5 text-uppercase">Social Media</h6>
            <div className='icon'>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>
        <div className="footer-bar">
          <div className="container">
            <div className="row text-center text-secondary">
              <div className="col-md-4">
                <div className="copyright pb-2">
                  <p>© 2024 TREDZ, All Rights Reserved.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul className='footer-info d-flex  gap-3'>
          <li><a href="">Inverstor's Attention</a></li>
          <li><a href="">Discloser</a></li>
          <li><a href="">Privacy Police</a></li>
          <li><a href="">Terms & Conditions</a></li>
          <li><a href="">Investor Charter</a></li>
          <li><a href="">Policies & Procedures</a></li>
          <li><a href="">Downlodes</a></li>
          <li><a href="">Smart ODR</a></li>
        </ul>
      </div> 
    </footer>
  );
};

export default Footer;
