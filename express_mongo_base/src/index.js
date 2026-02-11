const express = require("express");

const app = express();

// routes
app.get("/health", (req, res) => {
    res.send("OK");
});

app.listen(3000, () => {
    console.log("Server running on PORT 3000");
})