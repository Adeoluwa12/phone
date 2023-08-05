const express = require('express');
const ejs = require('ejs');


const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

//routes
app.use('/', require('./routes/index'));
app.use('/order', require('./routes/index'));

app.use('/about', require('./routes/index'));

app.use('/contact', require('./routes/index'));
app.use('/thank', require('./routes/index'));




app.listen(9000);
console.log('You are listening to port 9000');