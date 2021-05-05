const express = require("express");
const cart = require("./cart-items");

const app = express();

app.use('/', cart);

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
