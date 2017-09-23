var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function(req, res){
  res.send('Hello home page!');
});
app.get('/router',function(req,res){
  res.send('Hello Router, <img src="dog.jpg" style="width:100px;"/>');
})
app.get('/login',function(req,res){
    res.send('Login please...');
});

app.listen(3000,function(){
  console.log('Conneted 3000 port!');
});
