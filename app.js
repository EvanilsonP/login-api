const express = require('express');
const app = express();
const routes = require('./routes/authRoutes');
const PORT = 3000;
const db = require('./database/db');
db.database();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => { res.send('Welcome to this page.')});
app.use(routes);

app.listen(PORT, () => { console.log('Up and running')});