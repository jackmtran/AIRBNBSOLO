// frontend/src/components/LoginFormPage/index.js
import { editChairs , deleteChairs } from '../../store/chairs'
import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from "react-router-dom";
import './EditPost.css'

function EditPost() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const {id} = useParams();
  const chair = useSelector(state => state.chairs);
  const singleChair = chair[id];

  const [name, setName] = useState(singleChair.name);
  const [description, setDescription] = useState(singleChair.description);
  const [price, setPrice] = useState(singleChair.price);
  const [address, setAddress] = useState(singleChair.address);
  const [city, setCity] = useState(singleChair.city);
  const [state, setState] = useState(singleChair.state);
  const [userId] = useState(user.id);

  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);


  const handleSubmit = async (e) => {

    const chairList = {
      name,
      description,
      price,
      address,
      city,
      state,
      userId,
      id
    }
    e.preventDefault();
    dispatch(editChairs(chairList, id));
    history.push('/chairs')
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push('/chairs')
  }

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteChairs(chair, id))
    history.push('/chairs')
  };

  return (
    <>
      <h1>List Your Chairs !</h1>
      <form className='post-form' onSubmit={handleSubmit}>
      <input type="text" className='inputs' placeholder="Name" value={name} onChange={updateName} required />
        <input type="text" className='inputs' placeholder="Tell Us About Your Chair" value={description} onChange={updateDescription} required />
        <input type="text" className='inputs' placeholder="Price" value={price} onChange={updatePrice} required />
        <input type="text" className='inputs' placeholder="Address" value={address} onChange={updateAddress} required />
        <input type="text" className='inputs' placeholder="City" value={city} onChange={updateCity} required />
        <input type="text" className='inputslast' placeholder="State" value={state} onChange={updateState} required />
        <button type="submit" className='button'> Submit</button>
        <button type="button" className='button' onClick={handleCancelClick}> Cancel</button>
        <button type="button" className='button' onClick={handleDelete}> Delete</button>
      </form>
    </>)
}


export default EditPost;
