var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObj = {
            burgers: data
        };
        res.render("index", hbsObj);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create([req.body.name], function(result){
        res.json({ id: result.insertID });
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    burger.update(req.body, condition, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    burger.delete(condition, function(result){
        if(result.affectedRows == 0){ 
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
