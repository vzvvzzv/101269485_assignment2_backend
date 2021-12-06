let express = require("express")
let mongoose = require("mongoose")
let EmployeeRoutes = require("./routes/EmployeeRoutes")

const DB_URL = 'mongodb+srv://dd:avokado@cluster0.9m2g7.mongodb.net/101269485_assignment2?retryWrites=true&w=majority'
var cors = require('cors')



let app = express()

app.use(cors()) // Use this after the variable declaration

app.use(express.json())

app.use('/', EmployeeRoutes)
//app.use('/employee', EmployeeRoutes)


mongoose.connect(DB_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get("/", (req, res) => {
    res.send("<h1>MongoDB assignment2</h1>")
})

// //Insert New Employee
// app.get("/add", async (req, res) => {

//     let e = {
//         first_name: "Czx",
//         last_name: "Bzz",
//         email: "czxczx@vv.ca"
//     }

//     //Create student model object
//     let new_employee = new EmployeeModel(s)

//     try{
//         await new_employee.save(s)
//         console.log("Employee Saved")
//         res.status(200).send("Employee Saved")
//     }catch(err){
//         console.log("ERROR: Employee Saved: " + err)
//         res.status(500).send(err)
//     }
// })

// //Read student data
// app.get("/students", async (req, res) => {
//     //const s = await StudentModel.find({})
//     //const s = await StudentModel.find({}, "first_name total")
//     //const s = await StudentModel.find({total : 100}, "first_name total")
//     //Sorting on Total
//     //const s = await StudentModel.find({}, "first_name total").sort({total: -1})
//     // total > 100
//     const s = await StudentModel.find({ total:{$gt:100} }, "first_name total").sort({total: -1})
//     try{
//         res.send(s)
//     }catch(err){
//         console.log("Error: "+ err)
//         res.status(500).send(err)
//     }
// })

app.listen(8089, () => {
    console.log("Server running at http://localhost:8089/")
})

