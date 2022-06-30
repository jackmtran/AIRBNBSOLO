// frontend/src/components/LoginFormPage/index.js
import { addChairs } from '../../store/chairs'
import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from "react-router-dom";
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
  const [url, setUrl] = useState("");
  const [userId] = useState(user.id);

  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateUrl = (e) => setUrl(e.target.value);


  const handleSubmit = async (e) => {

    const chairList = {
      name,
      description,
      price,
      address,
      city,
      state,
      url,
      userId
    }
    e.preventDefault();
    dispatch(addChairs(chairList));
    history.push('/chairs')
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push('/chairs')
  }

  return (
    <>
      <h1>Share the joy of your favorite chair.</h1>
      <form className='post-form' onSubmit={handleSubmit}>
        <input type="text" className='inputs' placeholder="Name" value={name} onChange={updateName} required />
        <textarea type="text" className='textareas' placeholder="Tell Us About Your Chair." value={description} onChange={updateDescription} required />
        <input type="text" className='inputs' placeholder="Price/night" value={price} onChange={updatePrice} required />
        <input type="text" className='inputs' placeholder="Address" value={address} onChange={updateAddress} required />
        <input type="text" className='inputs' placeholder="City" value={city} onChange={updateCity} required />
        <input type="text" className='inputs' placeholder="State" value={state} onChange={updateState} required />
        <input type="text" className='inputslast' placeholder="Image URL" value={url} onChange={updateUrl} required />
        <button type="submit" className='button' >Submit</button>
        <button type="button" className='button' onClick={handleCancelClick}> Cancel</button>
      </form>
    </>)
}


export default MakePost;
