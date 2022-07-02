// frontend/src/components/LoginFormPage/index.js
import { editChairs , deleteChairs } from '../../store/chairs'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
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
  const [url, setUrl] = useState(singleChair.url);

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
      errorsHolder.url = "URL must end with .jpg or .png"
      error = true
    }
    else if (url.length < 4) {
      errorsHolder.url = "URL must be at least 4 characters."
      error = true
    }
    setErrors(errorsHolder);

if(!errors){
    const chairList = {
      name,
      description,
      price,
      address,
      city,
      state,
      url,
      userId,
      id
    }
    e.preventDefault();
    dispatch(editChairs(chairList, id));
    history.push('/chairs')
  };
}

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
      <h1>Woops. It's time to make a fix.</h1>
      <form className='post-form' onSubmit={handleSubmit}>

      {errors.name && <li className="errorformat">{errors.name} </li>}
        {errors.description && <li className="errorformat">{errors.description} </li>}
        {errors.price && <li className="errorformat">{errors.price} </li>}
        {errors.address && <li className="errorformat">{errors.address} </li>}
        {errors.city && <li className="errorformat">{errors.city} </li>}
        {errors.state && <li className="errorformat">{errors.state} </li>}
        {errors.url && <li className="errorformat">{errors.url} </li>}

      <input type="text" className='inputs' placeholder="Name" value={name} onChange={updateName}  />
        <textarea type="text" className='textareas' placeholder="Tell Us About Your Chair" value={description} onChange={updateDescription} />
        <input type="text" className='inputs' placeholder="Price" value={price} onChange={updatePrice}/>
        <input type="text" className='inputs' placeholder="Address" value={address} onChange={updateAddress}  />
        <input type="text" className='inputs' placeholder="City" value={city} onChange={updateCity}/>
        <input type="text" className='inputs' placeholder="State" value={state} onChange={updateState} />
        <input type="text" className='inputslast' placeholder="Image URL" value={url} onChange={updateUrl} />
        <button type="submit" className='button'> Submit</button>
        <button type="button" className='button' onClick={handleCancelClick}> Cancel</button>
        <button type="button" className='button' onClick={handleDelete}> Delete</button>
      </form>
    </>)
}


export default EditPost;
