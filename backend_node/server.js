//Reference : Building a Restful CRUD API with Node.js, Express and MongoDB : www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial

//import libraries
const express = require('express');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
var cors = require('cors')

// create express app
const app = express();

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(expressSanitizer());

app.use(function (req, res, next) {
    allreqsanitize(req);
    next()
})

function allreqsanitize(request) {
    var main = request.body
    const keys = Object.keys(main)


    for (let i = 0; i < keys.length; i++) {
        request.body[keys[i]] = request.sanitize(Object.values(main)[i])
    }
}

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');


// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection to database successful");
}).catch(err => {
    console.log('Connection to database failed. Exiting', err);
    process.exit();
});
mongoose.set('useCreateIndex', true);

require('./routes/open.routes.js')(app);
require('./routes/secure.routes.js')(app);
require('./routes/admin.routes.js')(app);
require('./routes/user.routes.js')(app);

app.listen(dbConfig.port, () => console.log('listening at 4000'));
