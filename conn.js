const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ns_user:reactjs20@reactjs20.yonzf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const dbobject = mongoose.connection
dbobject.on('connected', () => {console.log("Mongo DB connection success")})
dbobject.on('error', ()=> {console.log("Connection error and failed")})