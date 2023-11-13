// create web server with express
const express = require('express');
const app = express();
// create a port
const port = 3000;
// create a path
const path = require('path');
// create a router
const router = express.Router();
// create a body parser
const bodyParser = require('body-parser');
// create a mongoose
const mongoose = require('mongoose');
// connect to database
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });

// create a schema
const Schema = mongoose.Schema;
// create a comment schema
const commentSchema = new Schema({
    name: String,
    comment: String
});
// create a model
const Comment = mongoose.model('Comment', commentSchema);

// use body parser
app.use(bodyParser.urlencoded({ extended: false }));
// use public folder
app.use(express.static('public'));
// use view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// get request
router.get('/', (req, res) => {
    res.render('index');
});
