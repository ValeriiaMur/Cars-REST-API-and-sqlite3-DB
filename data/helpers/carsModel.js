const db = require("../dbConfig");
const e = require("express");

module.exports ={
    get,
    insert
};

function get(id){
    let query = db("cars");

    if(id){
        return query
            .where("id", id)
            .first()
            .then(car => {
                if(car){
                    return car;
                } else {
                    return null;
                }
            })
    } else {
        return query
            .then(cars => {
                return cars
            })
    }
}

function insert(data){
    return db("cars")
        .insert(data, 'id')
        .then(([id]) => {
            get(id);
        })
}
