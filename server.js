var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(__dirname + '/sample-app/dist/sample-app'));
app.set("views", path.join(__dirname, "./views"));

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Gradebook");

var StudentSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, 'First name is required.'],
            minlength: [3, 'First name must be at least 3 characters.'],
            trim: true
        },
        lastname: {
            type: String,
            required: [true, 'Last name is required.'],
            minlength: [3, 'Last name must be at least 3 characters.'],
            trim: true
        },
        studentnum: {
            type: Number,
            // required: true,
        },
    });

var GradeSchema = new mongoose.Schema(
    {
        class: {
            type: String,
            required: [true, 'Class is required.'],
        },
        grade: {
            type: String,
            // required: true
        },
        percent: {
            type: Number,
            // required: true
        },
        assignment: {
            type: String,
            required: [true, 'Assignment is required.'],
        },
        datecompleted: {
            type: Date,
            required: [true, 'Please enter when this assignment was completed.']
        },
        // url:{
        //     type: String,
        //     default: '',
        // validate: {
        //     validator: function (value) {
        //         return /(https?:\/\/.*\.(?:png|jpg))/i.test(value);
        //     },
        //     message: "Enter a valid image URL."
        // },

        // },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
        
        // timestamps: { type: true},
    });

mongoose.model("Grade", GradeSchema);
var Grade = mongoose.model("Grade");

mongoose.model("Student", StudentSchema);
var Student = mongoose.model("Student");

mongoose.Promise = global.Promise;

app.get('/grades', function (request, response) {
    Grade.find({}, function (error, data) {
        if (error) {
            console.log(error);
            response.json(error);
        } else {
            console.log(data + "at the else of grades");
            response.json(data)
        }
    });
});

app.get('/grades/:id', function (request, response) {
    console.log(request.params.id);
    Grade.findOne({
        _id: request.params.id
    },
        function (error, grade) {
            if (error) {
                console.log(error);
                response.json(error);
            } else {
                console.log(grade);
                response.json({ grade: grade })
            };
        });
});

app.post('/grades', function (request, response) {
    console.log("AT POST DATA OF grades : " + request.body);
    var grade = new Grade({
        assignment: request.body.assignment,
        class: request.body.class,
        datecompleted: request.body.datecompleted
        // url: request.body.url
    });
    grade.save(function (error, data) {
        if (error) {
            console.log(error);
            response.json(error);
        } else {
            console.log(data);
            response.json(data)
        };
    });
});

app.put('/grades/:id', function (request, response) {
    Grade.findByIdAndUpdate({ _id: request.params.id }, { $set: { assignment: request.body.assignment, class: request.body.class, datecompleted: request.body.datecompleted } }, { new: true, runValidators: true }, function (error, grade) {
        if (error) {
            response.json(error)
        } else {
            response.json({ message: "Success", data: grade })
        }
    })
});

app.delete('/grades/:id', function (request, response) {
    console.log(request.params.id);
    Grade.remove({
        _id: request.params.id
    }, function (error) {
        if (error) {
            console.log(error);
            response.json({
                message: "Error at REMOVE by ID Route",
                error: error
            });
        } else {
            console.log("REMOVED grade by ID.");
            response.json({
                message: "REMOVED grade by ID.",
            });
        };
    });
});

app.listen(8000, function () {
    console.log("LISTENING on Port 8000!");
});

// this route will be triggered if any of the routes above did not match
app.all("*", (request, response, next) => {
    response.sendFile(path.resolve("./sample-app/dist/sample-app/index.html"))
});









// const express = require('express');
// const app = express();
// const path = require("path");

// app.set('views', path.join(__dirname,'./views'));
// app.set('view engine','ejs');

// const session = require("express-session");

// app.use(session({
//     secret: 'thisismysecretkey!!',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 99999 }
// }));

// var logged_in_users = [];
// var board_messages = [];

// app.get('/', function(request,response) {
//     context = {
//         'board_messages':board_messages,
//         'logged_in_users':logged_in_users
//     }
//     response.render('index',context);
// });

// const server = app.listen(8000);
// console.log("Listening on Port 8000!")

// const io = require('socket.io')(server);

// io.on('connection', function (socket) {
//     console.log(socket.id)

//     socket.on('get_user', function(data) {
//         logged_in_users.push(data);
//         io.emit('new_user_to_list',data)
//     })

//     socket.on('new_message',function(data) {
//         message = {
//             'message':data.values,
//             'author':data.name
//         }
//         board_messages.push(message);
//         io.emit('add_new_message',message);
//     });

// });
