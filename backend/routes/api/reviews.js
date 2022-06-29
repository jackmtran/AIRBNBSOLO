const express = require('express');
const router = express.Router();
const db = require('../../db/models');
const asyncHandler  = require('express-async-handler');


//GET
router.get('/', asyncHandler(async(req, res) => {

	const reviews = await db.Review.findAll()

	return res.json(reviews)
}));


//CREATE
router.post('/create',  asyncHandler(async (req, res) => {
  const { title, reviewLine, userId, chairId } = req.body;

  const newReview = await db.Review.create({
    title,
    reviewLine,
    userId,
    chairId
  })

  return res.json(newReview)
}));


// //UPDATE
//   router.put('/:id(\\d+)', asyncHandler(async (req, res, next) => {
//     const editReview = await db.Review.findByPk(req.body.id);
//     const { title, reviewLine, userId, chairId } = req.body;
//     const editedReview = await editReview.update(req.body)

//         return res.json(editedReview)
//     }
//   ))


  //DELETE
  router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const reviews = await db.Review.findByPk(id);
      await reviews.destroy();
    return res.json({id: reviews.id})
  }))

module.exports = router;
