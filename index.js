const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("welcome to localhost");
});

app.get('/user', (req, res) => {
    res.send("welcome to user");
});

app.get('/user/q', function (req, res) {
    res.status(200).json({ 'userid': req.query.userid });
});

app.get('/user/:userId', (req, res) => {
    res.send(req.params);
});

app.get('/company/:compName/emp/:empId', (req, res) => {
    res.send(req.params);
})



app.listen(3001, () => {
    console.log("listening to port 3001");
});