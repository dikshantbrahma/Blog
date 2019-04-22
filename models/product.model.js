const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let ProductSchema = new Schema({
    name:{type:String, required:true, max:100},
    content:{type:String, required:true, min:10},
    author:{type:String, required:true, max:20},
});

module.exports=mongoose.model('Product',ProductSchema);