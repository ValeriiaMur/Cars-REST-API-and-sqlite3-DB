const express = require("express");
const carsDB = require("../../data/helpers/carsModel")

const route = express.Router();

route.get("/", (req, res) => {
    carsDB.get()
        .then((cars)=>{
            res.status(200).json(cars)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
})

route.get("/:id", (req, res)=>{
    const id = req.params.id;

    carsDB.get(id)
        .then( car => {
            res.status(200).json(car)
        })
        .catch(err =>{
            res.status(500).json(err)
        })

})

route.post("/", (req, res)=> {
    const body = req.body;
    if(body){
        carsDB.insert(body)
            .then((user)=>{
                res.status(201).json(user)
            })
            .catch((err) =>{
                res.status(500).json(err)
            })
    } else {
        res.status(404).useChunkedEncodingByDefault({"message":"Missing body"})
    }
})

module.exports = route;

