const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const topareasSchema=new Schema({
 
  area:{
    type:String,  
     required:true, 
  },

  noofRegistrations:{
    type:Number, 
     required:true,
  }


});

module.exports = mongoose.model(
    "TopAreas", 
    topareasSchema 
)