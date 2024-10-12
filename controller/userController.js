import User from "../model/userModel.js"

// For posting data into database 

export const create = async(req, res)=>{
    try {
        console.log(req.body)       //whatever is posted becomes an object

        const userData = new User( req.body);  //fetches the exact query data from the existing model 
        console.log(userData)

        const {title} = userData; //fetching title from the object
        console.log(title)

        const userExist = await User.findOne({title})

        if (userExist){
            return res.status(400).json({message : "Task already exist."}) //400 code is for bad request
        }

        const savedUser = await userData.save(); //Saving if the user doesnt exist in the db collection
        res.status(200).json(savedUser) //200 code is Okay code

    } catch (error) {
        res.status(500).json({error : "Internal Server Error. "}) // incase if there is any error
    }
}

// For getting all users from database 
export const fetch = async (req, res)=>{
    try {
        const users = await User.find();        // array of all the users
        console.log(users)                  

        if(users.length === 0 ){
            return res.status(404).json({message : "Task not Found."})
        }

        res.status(200).json(users);        //if okay, show all the registered tasks.

    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}
// For updating data 
export const update = async (req, res)=>{
    try {
        //http:localhost:5001/api/task/delete/:id

        const id = req.params.id;                           //get id parameter through the url
        const userExist = await User.findOne({_id:id})      //query to find specific existing task which has the id 

        if (!userExist){
            return res.status(404).json({message : "Task not found."})
        }

        const updateUser = await User.findByIdAndUpdate(id, req.body, {new : true}); //updating

        res.status(201).json(updateUser);

    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}
// For deleting data from database 
export const deleteUser = async (req, res)=>{
    try {

        //http:localhost:5001/api/task/delete/:string

        console.log(req.params)                     //get the parameter object from the url
        const name = req.params.string;             //get the name parameter from the url

        const userExist = await User.findOne({title:name})      //find by the name query
        if(!userExist){
            return res.status(404).json({message : " Task Not Found. "})
        }
        
        await User.findByIdAndDelete(userExist._id);        //deleting specific matched id

        res.status(201).json({message : " Task deleted Successfully."})
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}