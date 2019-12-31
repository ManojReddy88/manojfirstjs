const mongoose = require('mongoose');
var employeeSchema=new mongoose.Schema({
    ids:{
        type: Number,
        
    },
    fullname:{
        type: String
    },
    email:{
        type: String
    },
    mobile:{
        type: String
    },
    city:{
        type:String
    }
});

mongoose.model('Employee',employeeSchema);
