const mongoose = require('mongoose');
const DataSchema = mongoose.Schema(
    {
        ProductName: {type: 'string'},
        ProductCode: {type: 'string'},
        Img: {type: 'string'},
        UnitPrice: {type: 'string'},
        Qty: {type: 'string'},
        TotalPrice: {type: 'string'},
        CreatedDate: {type: Date, default: Date.now()}
    },
    {versionKey: false}
);

const ProductModel = mongoose.model('products', DataSchema);
module.exports = ProductModel;