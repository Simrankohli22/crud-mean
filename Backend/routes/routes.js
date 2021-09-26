const express = require('express');
const router = express.Router();


const Employee = require('../models/employee.js');

//retriving data
router.get('/', (req, res) => {
    Employee.find(function (err, doc) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(doc);
        }
    });
});
// //creating data 
router.post('/', (req, res) => {
    let emp = new Employee({
        Name: req.body.Name,
        Position: req.body.Position,
        Phone : req.body.Phone,
        Email : req.body.Email,
        Salary: req.body.Salary
    });

    emp.save((err, doc) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json('Item has been added successfully');
        }
    });
});

// updating the data
router.put('/:id', (req, res) => {
    Employee.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            Name: req.body.Name,
            Position: req.body.Position,
            Phone : req.body.Phone,
            Email :req.body.Email,
            Salary :req.body.Salary
        }
    },
        function (err, result) {
            if (err) {
                res.json(err);
            }
            else {
                res.json('Contact has been updated');
            }
        });
});
// // //deleting the data
router.delete('/:id',(req,res)=>{
    Employee.remove({_id: req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json('Contact has been deleted');
        }
    });
});

module.exports = router;