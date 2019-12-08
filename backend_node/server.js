//import libraries
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

// create express app
const app = express();

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

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

app.listen(4000, () => console.log('listening at 4000'));
