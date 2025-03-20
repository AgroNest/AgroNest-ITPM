const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const topsellingSchema=new Schema({
  dealername:{
    type:String,  
    required:true, 
  },

  noofsales:{
    type:Number, 
    required:true, 
  }


});

module.exports = mongoose.model(
    "TopSelling", 
    topsellingSchema 
)