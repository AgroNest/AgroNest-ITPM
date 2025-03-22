const mongoose=require("mongoose");
const Schema=mongoose.Schema;

//test
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

//test2
