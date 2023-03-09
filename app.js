const express = require('express');
const app = express();
const routes = require('./routes/authRoutes');
const PORT = 3000;
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/auth');
const db = require('./database/db');
db.database();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

app.get('*', checkUser);
app.get('/', requireAuth, (req, res) => { res.render('home')});
app.use(routes);

app.listen(PORT, () => { console.log('Up and running')});