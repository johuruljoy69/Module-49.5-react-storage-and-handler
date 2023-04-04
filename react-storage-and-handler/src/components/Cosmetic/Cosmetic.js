import React from 'react';
import { addToDb, removeFromDb } from '../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, balance, id, email} = props.cosmetic;
    const addToCart = ()=>{
        addToDb(id);
        // localStorage.setItem(id, 1);
    }

    const removeFromCart = id =>{
        removeFromDb(id);
    }
    // const addToCartWithParameter = () => addToCart(id)
    return (
        <div className='product' >
            <h2>Buy this:{name} </h2>
            <p>Only for: {balance} </p>
            <p>it has id:: {id} </p>
            <p>Email:: {email} </p>
            {/* <button onClick={addToCartWithParameter} >Add to Cart</button> */}
            {/* or */}
            <button onClick={() => addToCart(id)} >Add to Cart</button>
            <button onClick={() => removeFromCart(id)} >Remove</button>
        </div>
    );
};

export default Cosmetic;