// frontend/src/components/LoginFormPage/index.js
import { addChairs } from '../../store/chairs'
import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink , useHistory } from "react-router-dom";
import './Post.css'

function MakePost() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [userId] = useState(user.id);

  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);



  useEffect(() => {
    dispatch(addChairs());
  }, [dispatch]);



  const handleSubmit = async (e) => {


    const chairList = {
      name,
      description,
      price,
      address,
      city,
      state,
      userId
    }
    e.preventDefault();
    dispatch(addChairs(chairList));
    history.push('/chairs')
  };

  return (
    <>
      <h1>List Your Chairs !</h1>
      <form className='post-form' onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={updateName} required/>
        <input type="text" placeholder="Tell Us About Your Chair" value={description} onChange={updateDescription} required/>
        <input type="text" placeholder="Price" value={price} onChange={updatePrice} required/>
        <input type="text" placeholder="Address" value={address} onChange={updateAddress} required/>
        <input type="text" placeholder="City" value={city} onChange={updateCity} required/>
        <input type="text" placeholder="State" value={state} onChange={updateState} required/>
        <button type="submit" className='button'>Submit</button>
      </form>
    </>)
}


export default MakePost;
