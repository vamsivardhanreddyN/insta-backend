const express = require("express");
const cors = require('cors')
const User = require("./schema");
const app = express();
const bodyParser = require('body-parser');
app.use(cors())
// app.use(bodyParser({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// app.use(express.json({ limit: '10mb' }));

const port = process.env.PORT || 5000;
const fileupload = require("express-fileupload")
const cloudinary = require("cloudinary").v2;
app.use(fileupload({
    useTempFiles: true
}))

cloudinary.config({
    cloud_name: "dhiov6vmx",
    api_key: "259167377774776", 
    api_secret: "OGGBLetgTEfhNnWYh74aE44TZkc",
    secure: true
}) 


app.post("/add", async (req, res) => {
    try {
        var file = req.files.image
        await cloudinary.uploader.upload(file.tempFilePath,(err, result) => {
            console.log(result)
            User.create({
                // image:result.url,
                name:req.body.name,
                location:req.body.location,
                description:req.body.description,
                image:result.url
            })
        })

        res.send("data uploaded sucessfully")
       
    }
    catch(err){
        console.log(err)
    }

})
app.get("/add", async (req, res) => {
    try {
        const profile = await User.find()
        res.json({
            profile
        })
        console.log(profile)
    }
    catch (e) {
        console.log(e)
    }
})

app.listen(port, () => {
        console.log(`server is running at port no ${port}`)
    })
