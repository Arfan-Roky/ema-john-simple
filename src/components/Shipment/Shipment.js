import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
  const [user] = useAuthState(auth);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  // const navigate = useNavigate();

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };


  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneNumberBlur = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleError = (event) => {
    setError(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = {name, email, address, phoneNumber}
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Your Shipping Information</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input onBlur={handleNameBlur} type="text" name="name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              onBlur={handlePhoneNumberBlur}
              type="text"
              name="phone-number"
              required
            />
          </div>
          <p style={{ color: 'red', margin: '.5rem 0' }}>{error}</p>
          <input className="form-submit" type="submit" value="Add Shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
