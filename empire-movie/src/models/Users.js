import { Schema,model,models } from "mongoose";


const userSchema= new Schema ({
    fullName:{
        type:String,
        required:true,
        minLength:5
    },
    userName:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        minLength:10
    },
    age:{
        type:Number,
        required:true,
        min:8
    },
    password:{
        type:String,
        required:true,
    },
})

const User = models.User || model("User",userSchema)

export default User