const express = require('express')
const app = express();
const mustacheExpress = require('mustache-express');
const path = require('path')
const bodyParser = require('body-parser');



app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.post('/incre', (req, res) => {
    var n1 = parseInt(req.body.x);

    var result = n1 + 1;

    res.send('value:' + result);
})


app.use(bodyParser.urlencoded({ extended: false }));


app.use('/css', express.static(path.join(__dirname, 'css')))



app.get('/', (req, res) => {
    res.render('home');
})






app.listen(4500, () => {
    console.log('server is running...');
})