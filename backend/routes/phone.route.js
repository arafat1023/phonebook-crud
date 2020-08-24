let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

// Student Model
let phoneSchema = require('../models/Phonebook');

// CREATE phonebook
router.route('/create-phonebook').post((req, res, next) => {
    phoneSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        }

        else {
            console.log(data)
            res.json(data)
        }
    })
});

// READ phonebook
router.route('/').get((req, res) => {
    phoneSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get Single phonebook
router.route('/edit-phonebook/:id').get((req, res) => {
    phoneSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// router.route("/find").get(function(req, res) {
//     console.log("movisx",req.query.mobileNo)
//     phoneSchema.find(
//         { "mobileNo": req.query.mobileNo},
//         function(err, result) {
//             if (err) {
//                 res.send(err);
//             } else {
//                 res.json(result);
//             }
//         }
//     );
// });

router.get('/find/', (req, res) => {
    console.log(req.params.mobileNo)
    phoneSchema.find({
        mobileNo: req.params.mobileNo
    })
        .then(result => res.json(result));
});






router.route('/update-phonebook/:id').put((req, res, next) => {
    phoneSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('phonebook updated successfully !')
        }
    })
})

// Delete phonebook
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