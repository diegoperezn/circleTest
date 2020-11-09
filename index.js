const express = require('express');
const app = express();

app.set('port', process.env.PORT || 4211);

app.use(express.json());

app.get('*', (req, res) => {
    console.log(req.body);
    res.status(200).send("Done!");
});

app.post('*', (req, res) => {
    console.log(req.body);
    res.status(200).send("Done!");
});

app.listen(app.get('port'), () => {
    console.log("server init on", app.get('port'));
});