import React from 'react'
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { delItem } from '../../redux/actions/index'


const Cart = () => {
    const state = useSelector((state) => state.addItems)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return(
            <div className='bg-light px-4 my-5 rounded-3' key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(cartItem)} className='btn-close float-end' aria-label='Close'></button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={cartItem.img} alt="" height='200px' width='180px' />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className='fw-bold'>${cartItem.price}</p>
                        </div>
                    </div>
                </div>
                <Link to='/checkout' className='btn btn-outline-primary mb-5 w-25 mx-auto'>Proceed to checkout</Link>
            </div>
        )
    }

    const emptyCart = () => {
        return(
            <div className='bg-light px-4 my-5 rounded-3 py-5'>
                <div className='container py-4'>
                    <div className='row'>
                        <h3>Your cart is empty</h3>
                    </div>
                </div>
            </div>
        )
    }
  return (
    <div>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
    </div>
  )
}

export default Cart