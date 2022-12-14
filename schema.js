const mongoose =require("mongoose");
mongoose.connect("mongodb+srv://sona:123654@cluster0.pzm5nfr.mongodb.net/?retryWrites=true&w=majority")
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