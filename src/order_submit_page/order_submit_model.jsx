import React, {Component} from 'react';
import './order_submit_model.css'
import OrderSubmitForm from './order_submit_form'
class OrderSubmitModel extends Component {
    
    render() {
        return (
            <div className='order-submit-model'>
                <div className='title-row'>
                    <div className='left'>确认收货地址</div>
                    <div className='right'><a>管理收货地址</a></div>
                </div>
                <div className='form-row'>
                    <OrderSubmitForm/>
                </div>
            </div>
        );
    }
};

export default OrderSubmitModel;