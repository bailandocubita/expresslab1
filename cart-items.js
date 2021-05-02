const express = require("express");
const cartItems = express.Router();

cartItems.use(express.json());

items: [] = [
    { id: 1, product: "soap", price: "3.99", quantity: 5 },
    { id: 2, product: "shampoo", price: "4.95", quantity: 9},
    { id: 3, product: "body wash", price: "5.25", quantity: 2 }
];

cartItems.get("/cartItems", (req, res) => {
    res.json("Getting all items..");
});

cartItems.get("/cartItems/:id", (req, res) => {
    console.log(req.params.id);
    res.json("Getting an item by id");
});

cartItems.post("/cartItems", (req, res) => {

    console.log(req.body);

    res.json("Adding an item..");
});

cartItems.put("/cartItems", (req, res) => {
    res.json("Updating an item..");
});

cartItems.delete("/cartItems", (req, res) => {
    res.json("Deleting an item..");
});

module.exports = cartItems;