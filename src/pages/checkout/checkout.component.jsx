import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ currCartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        { currCartItems.map(eachItem => (
            <CheckoutItem key={eachItem.id} cartItem={eachItem} />
        ))}
        <div className='total'>
            TOTAL: ${total}
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStatetoProps = createStructuredSelector({
    currCartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStatetoProps)(CheckoutPage);