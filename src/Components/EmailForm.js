import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmailForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic for handling the submitted email
        console.log('Submitted email:', email);
    };

    return (
        <div className="form-box">
            <h1>Get To Know <span className='mainfont'>TREDZ </span>Better.</h1>
            <form onSubmit={handleSubmit}>
                <div className='email-form'>
                    <input className='emaildata'
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit">Subscribe</button>
                </div>
            </form>
        </div>
    );
};

export default EmailForm;
