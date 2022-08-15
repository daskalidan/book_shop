import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, cartSelector, cartTotalPriceSelector, removeFromCart } from './main_shopSlice'


const Cart = () => {
  const myCart = useSelector(cartSelector)
  const dispatch = useDispatch();
  const myTotalPrice = useSelector(cartTotalPriceSelector)


  return (
      <div className='cart'>
        <h2>My cart</h2>
        {myCart.length === 0 ?
          (<p>cart is empty</p>) :
          (
            <div>
              <div className='titles'>
                <h3>book</h3>
                <h3>price</h3>
                <h3>quantity</h3>
                <h3>total price</h3>
              </div>
              <div className='cart-items'>
                {myCart.map(item => (
                  <div className='cart-item' key={item.id}>
                    <div className='cart-book'>
                      <img alt='book img' />
                      <div>
                        <h3>{item.name}</h3>
                        <p>{item.author}</p>
                        {/* <button onClick={()=> dispatch(removeFromCart(item))}>remove</button> */}
                      </div>
                    </div>
                    <div className='cart-book-price'>${item.price}</div>
                    <div className='cart-book-quantity'>
                      <button onClick={()=> dispatch(removeFromCart(item))}>-</button>
                      {item.quantity}
                      <button onClick={()=> dispatch(addToCart(item))}>+</button>
                    </div>
                    <div className='cart-book-total-price'>${item.price * item.quantity}</div>
                  </div>))}

                <div className='cart-summary'>
                  <button>clear cart</button>
                  <div className='cart-checkout'><span>total price</span><span>${myTotalPrice}</span>
                    <button>checkout</button>
                  </div>
                </div>
              </div>
            </div>
          )
        }
    </div>
  )
}

export default Cart