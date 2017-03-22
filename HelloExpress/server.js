var express = require("express");
var app = express();

// app.HTTP_VERB('URL', function (request, response){});

app.use(express.static(__dirname + "/views"));

// root route
app.get('/', function (req, res){
  res.render('index', {title: "Express project"});
});
// route to process new user form data:
app.post('/users', function (req, res){
  // code to add user to db goes here!
  // redirect the user back to the root route.
  // All we do is specify the URL we want to go to:
  res.redirect('/');
})

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get("/users", function (req, res){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render('users', {users: users_array});
})

app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)
    //code to add user to db goes here!
    // redirect the user back to the root route.
    res.redirect('/')
});

app.listen(8000, function() {
  console.log("I'm in port 8000");
  console.log("hello Angelo");
})
