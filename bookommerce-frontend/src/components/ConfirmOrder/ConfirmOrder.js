import React from 'react';
import orderConfirmImage from '../../images/undraw_Order_confirmed_re_g0if.svg'

const ConfirmOrder = () => {
    return (
        <div className="container w-75 align-items-center" style={{textAlign: 'center'}}>
            <img src={orderConfirmImage} className="w-50 m-5" alt="order confirmed"/>
            <h4>Your Order is confirmed</h4>
        </div>
    );
};

export default ConfirmOrder;