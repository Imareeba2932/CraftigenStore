const mongoose = require('mongoose');

const url = "mongodb+srv://shakeelareeba02:shakeelareeba@cluster0.wu8dtsx.mongodb.net/handicraft_webapp?retryWrites=true&w=majority&appName=AtlasApp";

// asynchronous function - return a promise
mongoose.connect(url)
    .then((result) => {
        console.log('connected to database');
    }).catch((err) => {
        console.log(err);
    });

//console.log('do other stuff')

module.exports = mongoose;
