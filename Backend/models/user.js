const mongoose=require("mongoose");

const UserSchema=mongoose.Schema({
    name:String,
    password:{type:String},
    email:{type:String,unique:true},
    subscribeToNews:Boolean,
    token:String
})


const UserModel=mongoose.model("user",UserSchema);


module.exports=UserModel;
