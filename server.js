const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/simple");

const userSchema = {
    _id: String,
    name: String,
    company: String,
    acceptedTerms: Boolean
};

const User = mongoose.model("User", userSchema, "users");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/users", function (req, res) {
    const user = {
        _id: req.body.id,
        name: req.body.name,
        company: req.body.company,
        acceptedTerms: req.body.acceptedTerms
    };
    User.create(user, function (err, user) {
        if (err) {
            console.error(err);
        }
    })
});

app.get('/users', function (req, res) {
    User.find().exec(function (err, doc) {
        if (err) {
            console.error(err);
        }
        res.send(doc);
    })
});

app.get("/users/:id", function (req, res) {
    User.findById(req.params.id, function (err, doc) {
        if (err) {
            console.error(err);
        }
        res.send(doc);
    })
});

app.listen(8080);
