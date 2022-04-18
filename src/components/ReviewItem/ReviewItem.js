import {faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product , handleRemoveProduct}) => {
  const { name, price,img, shipping, quantity } = product;
  return (
    <div className='review-item'>
      <div className='review-info'>
        <img src={img} alt="" />
        <div className='review-details'>
          <h2 title={name} className='review-heading'>{name.length > 20 ? name.slice(0,20) + "..." : name }</h2>
          <p>
            Price: <span>${price}</span>
          </p>
          <p>
            Shipping Charge: <span>${shipping}</span>
          </p>
          <p>Quantity: <span>{quantity}</span></p>
        </div>
      </div>
      <div className='review-container'>
       <button onClick={() => handleRemoveProduct(product)}  className='delete-btn'> <FontAwesomeIcon className='delete-icon' icon={faTrashCan}>
        </FontAwesomeIcon></button>
      </div>
    </div>
  );
};

export default ReviewItem;
