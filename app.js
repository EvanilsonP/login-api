const express = require('express');
const app = express();
const routes = require('./routes/authRoutes');
const PORT = 3000;

app.get('/', (req, res) => { res.send('Welcome to this page.')});
app.use(routes);

app.listen(PORT, () => { console.log('Up and running')});