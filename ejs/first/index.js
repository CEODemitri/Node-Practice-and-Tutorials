import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.render("index.ejs", {dayType: "a strong day", advice: "show out",});
});

app.listen(port, () => {
    console.log(`Server Running on port ${port} my guy.`);
});