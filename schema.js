const mongoose =require("mongoose");
mongoose.connect("mongodb+srv://root:Vamsi07@cluster0.fwak4fo.mongodb.net/test")
.then(() => {
         console.log("connection successful")
     }).catch((err) => {
           console.log("no connection")
        });
const userschema = new mongoose.Schema({
    // image: {type:String},
    name:  {type: String,require:true},
    location: {type:String,require:true},
    description: {type:String},
    image: {type:String}
})

const User = mongoose.model('User',userschema);
module.exports = User;
