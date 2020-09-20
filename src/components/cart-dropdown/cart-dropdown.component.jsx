import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';

const CartDropDown = ({ currCart }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                currCart.map(eachItem => <CartItem key={eachItem.id} item={eachItem} />)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    currCart: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropDown);