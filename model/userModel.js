import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    title : {
        type : String, 
        required : true,
    }, description : { 
        type : String, 
        required : true,
    },
    status : { 
        type : String ,
        required  :true
    }
})
/* Example:- 

{
    "title":"running",
    "description":"fun,travelling",
    "status":"completed"
}

*/
export default mongoose.model("task",userSchema)