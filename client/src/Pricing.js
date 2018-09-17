import React from 'react';
import Navbar from './Navbar';

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <div id='priceDiv'>
                <h1><u>Pricing</u></h1>
                <h3>For the bride:</h3>
                <p>$70 Trial</p>
                <p>$75 Engagement hair</p>
                <i>For bridal/wedding day hair, please wait for your specific hair quote</i>
                <h3>For the bridal party:</h3>
                <p>$70 for bridesmaids</p>
                <p>$40 fro flower girls (or girls 12 and younger)</p>
                <p>$60 for mothers of the bride</p>
                <h3>Travel fees:</h3>
                <p>$40 + $0.50 for every minute traveled</p>
                <i>I am ONLY able to travel on wedding days, occasional exceptions are made, let me know if you have any questions. I'm located in Lehi (near the Traverse Mountain Outlets)</i>
            </div>
        </div>
    );
};

export default Pricing;