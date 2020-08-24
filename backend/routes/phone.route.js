let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

// Student Model
let phoneSchema = require('../models/Phonebook');

// CREATE Student
router.route('/create-phonebook').post((req, res, next) => {
    phoneSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

// READ Students
router.route('/').get((req, res) => {
    phoneSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get Single Student
router.route('/edit-phonebook/:id').get((req, res) => {
    phoneSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update Student
router.route('/update-phonebook/:id').put((req, res, next) => {
    phoneSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Student updated successfully !')
        }
    })
})

// Delete Student
router.route('/delete-phonebook/:id').delete((req, res, next) => {
    phoneSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;