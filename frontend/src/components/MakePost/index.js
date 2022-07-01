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


  let errorsHolder = { name:'', description:'', price:'', address:'', city:'', state:'', url:'' };
  const [errors, setErrors] = useState(errorsHolder);


  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateUrl = (e) => setUrl(e.target.value);


  const handleSubmit = async (e) => {
  e.preventDefault();

    let error = false;
    errorsHolder = { ...errorsHolder };

    if (name.length < 3) {
      errorsHolder.name = "The chair's name must be at least 3 characters."
      error = true
    }
    if (name === '') {
      errorsHolder.name = "Tell us your chair's name please please please!"
      error = true
    }
    if (description === '') {
      errorsHolder.description = "Description is needed.";
      error = true;
    }
    else if (description.length < 4) {
      errorsHolder.description = "Description must be at least 7 characters."
      error = true
    }
    else if (description.length > 50) {
      errorsHolder.description = "Descriptions must be under 50 characters."
      error = true
    }
    else if (isNaN(price)) {
      errorsHolder.price = "Price must be a number"
      error = true
    }
    else if (price === "") {
      errorsHolder.price = "You must have a price."
      error = true
    }
    else if (address.length < 4 || address.length > 40) {
      errorsHolder.address = "Address must be 4 - 40 characters."
      error = true
    }
    else if (city.length < 4 || city.length > 40) {
      errorsHolder.city = "City must be 4 - 40 characters."
      error = true
    }
    else if (state.length < 4 || state.length > 15) {
      errorsHolder.state = "State must be 4 - 7 characters."
      error = true
    }
    else if (!url.includes(".jpg") && !url.includes(".png") && !url.includes(".JPG") && !url.includes(".PNG") ) {
      errorsHolder.url = "URL must be jpg or png"
      error = true
    }
    else if (url.length < 4) {
      errorsHolder.url = "URL must be at least 4 characters."
      error = true
    }
    setErrors(errorsHolder);

    if(!error){
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

    dispatch(addChairs(chairList));
    history.push('/chairs')
  };
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push('/chairs')
  }

  return (
    <>
      <h1>Share the joy of your favorite chair.</h1>


      <form className='post-form' onSubmit={handleSubmit}>
    <p className="errorformat">
        {errors.name && <div>{errors.name}</div> }
        {errors.description && <div >{errors.description} </div>}
        {errors.price && <div >{errors.price} </div>}
        {errors.address && <div >{errors.address} </div>}
        {errors.city && <div >{errors.city} </div>}
        {errors.state && <div >{errors.state} </div>}
        {errors.url && <div>{errors.url} </div>}</p>

        <input type="text" className='inputs' placeholder="Name" value={name} onChange={updateName} />
        <textarea type="text" className='textareas' placeholder="Tell Us About Your Chair." value={description} onChange={updateDescription} />
        <input type="text" className='inputs' placeholder="Price/night" value={price} onChange={updatePrice} />
        <input type="text" className='inputs' placeholder="Address" value={address} onChange={updateAddress}/>
        <input type="text" className='inputs' placeholder="City" value={city} onChange={updateCity}/>
        <input type="text" className='inputs' placeholder="State" value={state} onChange={updateState}/>
        <input type="text" className='inputslast' placeholder="Image URL" value={url} onChange={updateUrl} />
        <button type="submit" className='button' >Submit</button>
        <button type="button" className='button' onClick={handleCancelClick}> Cancel</button>
      </form>
    </>)
}


export default MakePost;
