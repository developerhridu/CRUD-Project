const ProductsModel = require('../models/ProductsModel')
const json2csv = require('json2csv').parse;
const fs = require('fs');
// const path = require('path');

// C = Create
exports.CreateProduct = (req, res) =>{
    let reqBody = req.body;
    ProductsModel.create(reqBody, (err, data) =>{
        if(err){
            res.status(400).json({status: 'Fail', data: err})
        }
        else{
            res.status(200).json({status: 'OK', data: data})
        }
    })
}

// R = Read
exports.ReadProduct = (req, res) =>{
    ProductsModel.find( (err, data) =>{
        if(err){
            res.status(400).json({status: 'Fail', data: err})
        }
        else{
            res.status(200).json({status: 'OK', data: data})
        }
    })
}

// R=Read By ID
exports.ReadProductByID=(req,res)=>{
    let id= req.params.id;
    let Query={_id:id};
    ProductsModel.find(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

// U=Update

exports.UpdateProduct=(req,res)=>{
    let id= req.params.id;
    let Query={_id:id};
    let reqBody=req.body;
    ProductsModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

// D=Delete
exports.DeleteProduct=(req,res)=>{
    let id= req.params.id;
    let Query={_id:id};
    ProductsModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

