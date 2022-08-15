import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartCalc, cartItemsCountSelector, cartSelector } from '../main_shop/main_shopSlice'


const Header = () => {
    const myCartCount = useSelector(cartItemsCountSelector)
    const myCart = useSelector(cartSelector)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartCalc())
  }, [myCart, dispatch])

    return (
        <div className='header'>

            <div>
                <Link to="/shop">
                    <img alt='icon' src="/icons8-literature-ios-filled-96.png" />
                </Link>
                <span>
                <h1>My Book Shop</h1>
                <p>implementing react-redux with django</p>
            </span>
            </div>

            <div className='cart-counter'>
               
                <Link to="/cart">
                    <img src='/icons8-shopping-cart-48.png' alt='cart' />
                </Link>
                
                <span>{myCartCount}</span>
               
            </div>
        </div>
    )
}

export default Header