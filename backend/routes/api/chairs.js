const express = require('express');
const router = express.Router();
const db = require('../../db/models');
const asyncHandler  = require('express-async-handler');
const { render } = require('../../app');
const chair = require('../../db/models/chair');

//READ
router.get('/', asyncHandler(async(req, res) => {

	const chairs = await db.Chair.findAll()

	return res.json(chairs)
}));


//CREATE
router.post('/create',  asyncHandler(async (req, res) => {
		const { name, description, price, address, city, state, userId } = req.body;

    const newChair = await db.Chair.create({
      name,
      description,
      price,
      address,
      city,
      state,
      userId})

    return res.json(newChair)
	}));


  //UPDATE
router.put('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const editChair = await db.Chair.findByPk(req.body.id);
	const { name, description, price, address, city, state, userId } = req.body;
  const editedChair = await editChair.update(req.body)

      return res.json(editedChair)
  }
))


//DELETING
router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
	const id = req.params.id;
	const chairs = await db.Chair.findByPk(id);
	  await chairs.destroy();
	return res.json({id: chairs.id})
}))

module.exports = router;
