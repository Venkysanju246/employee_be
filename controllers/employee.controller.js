const express = require("express")
const employeeModel = require("../model/employee.model")
const auth = require("../middeware/auth.middleware")

const empRoute = express.Router()


empRoute.post("/employees",auth,async (req, res)=>{
    try {
        const payload = req.body
        const newEmployeer = new employeeModel(payload)
        await newEmployeer.save()
        res.status(200).send({
            msg:"Employee saved successfully",
        })
    } catch (error) {
        res.status(404).send({
            msg:error.message,
        })
    } 
})

empRoute.get("/employees", auth, async (req, res)=>{
    const id = req.body.userID
    const data = await employeeModel.find({userID: id})
    res.status(200).send({
        msg:data
    })
})

empRoute.patch("/employees/:id",auth,async (req, res)=>{
const id  = req.params.id
const payload = req.body
const updatedData = await employeeModel.findByIdAndUpdate({_id:id}, payload)
res.status(200).send({
    msg:"Employee data updated successfully"
})

})

empRoute.delete("/employees/:id",auth,async (req, res)=>{
    try {
        const id  = req.params.id
        const updatedData = await employeeModel.findByIdAndDelete({_id:id})
        res.status(200).send({
            msg:"Employee data deleted successfully"
        })
    } catch (error) {
        res.status(400).send({
            msg:error.message
        })
    }
   
    
    })

module.exports = empRoute