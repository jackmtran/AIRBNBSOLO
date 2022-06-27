const express = require('express');
const router = express.Router();
const db = require('../../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');

const chairNotFoundError = (id) => {
  const err = Error(`Chair with id ${id} not found.`);
  err.title = 'That chair does not exist';
  err.status = 404;
  return err;
}

const chairValid = [
	check('review')
		.exists({ checkFalsy: true })
		.withMessage('Please fill in your review.'),
];

router.get('/', csrfProtection, async(req, res) => {
	const chairs = await db.Chair.findAll()
	res.render('chairs', { chairs });
});

router.post( '/', csrfProtection, chairValid, asyncHandler(async (req, res) => {
		const { name, price, address, city, state, userId } = req.body;

        const chairPost = db.Chair.build({
            name,
            price,
            address,
            city,
            state,
            userId
		});

	})
);

router.put('/:id(\\d+)', chairValid, asyncHandler(async (req, res, next) => {
  const chairId = parseInt(req.params.id, 10);
  const chair = await db.Chair.findByPk(chairId);

  if (chair) {
    await chair.update({
            name: req.body.name,
            chair: req.body.chair,
        });

        res.send({message: 'Success!', chair})
  } else {
    next(chairNotFoundError);
  }
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
	const chairId = parseInt(req.params.id, 10);
	const chairs = await db.Chair.findByPk(chairId);
			await chairs.destroy();
			res.redirect('/chairs')
}))

module.exports = router;
