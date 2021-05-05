const express = require("express");
const router = express.Router();

router.use(express.json());

const cartItems = [
    { id: 1, product: "soap", price: "3.99", quantity: 5 },
    { id: 2, product: "shampoo", price: "4.95", quantity: 9},
    { id: 3, product: "body wash", price: "5.25", quantity: 2 }
];

router.get("/", (req, res) => {
    res.json("a message");
});

router.get("/cart-items", (req, res) => {
    res.json(cartItems);
});

router.get("/cart-items/:id", (req, res) => {
    console.log(req.params.id);
    const found = cartItems.find(item => item.id === +req.params.id);
// can also use "if (!found)""
    if (found === undefined) {
        res.status(404).send('The cart item cound not be found');
    } else {
        res.json(found);
    }

    res.json(found);
});

router.post("/cart-items", (req, res) => {

    const quantity = parseInt(req.body.quantity);
    const price = parseInt(req.body.price);

    if (!quantity) {
        return res.status(404).send('Invalid quantity');
    }

    if (!price) {
        return res.status(404).send('Invalid price');
    }


    const newItem = {
        id: cartItems.length + 1,
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity
    };

    cartItems.push(newItem);

    res.status(201).json(newItem);
});

router.put("/cart-items/:id", (req, res) => {
    const found = cartItems.find(item => item.id === +req.params.id);
    
    if (found) {
        found.price = req.body.price;
        found.quantity = req.body.quantity;
        found.product = req.body.product;

        res.json(found);
    }

    else {
        res.status(404).send('The cart item cound not be found');
    }
});

router.delete("/cart-items/:id", (req, res) => {
    const found = cartItems.find(item => item.id === +req.params.id);

    if (found) {
        cartItems.splice(found, 1);

        res.status(204).send('The requested items have been deleted.');
    }
});

module.exports = router;