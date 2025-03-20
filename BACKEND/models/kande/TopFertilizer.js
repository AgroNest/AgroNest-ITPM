const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const fertilizerSchema=new Schema({
  fertilizername:{
    type:String,  
    required:true, 
  },

  noofsales:{
    type:Number, 
    required:true, 
  }


});

module.exports = mongoose.model(
    "FertilizerAnalysis", 
    fertilizerSchema 
)