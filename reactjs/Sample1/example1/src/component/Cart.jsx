import React from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {

    const state = useSelector((state) => state.handleCart);
    console.log(state);

    const handeButton = () => {

    }

    return (
        <div>
            {
                state.map((product) => {
                    return (
                        <div className="row">
                            <div className="col-md-4">
                                <img src={ product.image} alt={product.title} height="200px" width="180px" />
                            </div>
                            <div className="col-md-4">
                                <h3>{product.title}</h3>
                                <p className='lead fw-bold'>
                                    {product.qty} X {product.price} = $ {product.qty * product.price}
                                </p>
                                <button className='btn btn-outline-dark me-4' onClick={() => handeButton(product)}>
                                    <i className='fa fa-minus'></i>
                                </button>
                                <button className='btn btn-outline-dark ' onClick={() => handeButton(product)}>
                                    <i className='fa fa-plus'></i>
                                </button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
