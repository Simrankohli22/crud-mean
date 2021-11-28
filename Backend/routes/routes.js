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

// get contact by id
router.get('/:id', (req, res) => {
    Employee.findById({_id: req.params.id},function (err, doc) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(doc);
        }
    });
});

//creating data 
router.post('/', (req, res) => {
    let emp = new Employee({
        Name: req.body.Name,
        Position: req.body.Position,
        Phone : req.body.Phone,
        Email : req.body.Email,
        Salary: req.body.Salary
    });
    // console.log("red data**********",req);
    emp.save((err, data) => {
        if (err) {
            res.json(err);
        }
        else {
            console.log("respnse***************",data)
            res.json({message:'Item has been added successfully',data:data});
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
    console.log("req.params.id",req.params.id)
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