import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, price, ratings, seller} = props.product;

    const {handleAddToCart} = props;

 
    return (
        <div className='product'>
            <img className='product-img' src={img} alt="" />
            <div className="product-info">
                <h2 className='product-name'>{name}</h2>
                <p>Price: ${price}</p>
                <br />
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>

            <button onClick={()=> handleAddToCart(props.product)} className='product-btn'><p className='btn-text'>Add To Cart</p> 
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;