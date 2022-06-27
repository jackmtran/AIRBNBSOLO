const express = require('express');
const router = express.Router();
// const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/', csrfProtection, asyncHandler (async(req, res) => {
	res.render('review', { csrfToken: req.csrfToken()});
}));


router.post( '/:id(\\d+)', asyncHandler(async (req, res) => {
    const chairId = parseInt(req.params.id, 10);
    const { reviewLine, userId } = await req.body
    console.log(req.body)
    const addReview = db.Review.build({
        userId: userId,
        chairId: chairId,
        title: title,
        reviewLine: reviewLine
    });

    await addReview.save();
 })
);

router.put('/:id(\\d+)', chairValid, asyncHandler(async (req, res, next) => {
    const reviewId = parseInt(req.params.id, 10);
    const review = await db.Review.findByPk(reviewId);

    if (review) {
      await review.update({
              title: req.body.title,
              reviewLine: req.body.reviewLine,
          });

          res.send({message: 'Success!', chair})
    } else {
      next(chairNotFoundError);
    }
  }))

router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const reviewId = parseInt(req.params.id, 10);
    const review = await db.Review.findByPk(reviewId);
        await review.destroy();
}))

module.exports = router;
