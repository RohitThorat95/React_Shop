import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';


import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';

const CartDropDown = ({ currCart, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                currCart.length ?
                    currCart.map(eachItem => <CartItem key={eachItem.id} item={eachItem} />) :
                    <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }
            }>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currCart: selectCartItems
});

// const mapStateToProps = state => ({
//     currCart: selectCartItems(state)
// });

export default withRouter(connect(mapStateToProps)(CartDropDown));