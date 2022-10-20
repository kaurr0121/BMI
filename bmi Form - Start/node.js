const express = require("express");
const bodyParser= require("body-parser")


const app = express();
app.set('view engine', 'pug');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));


app.get('/',(req, res) =>{
    res.render('bmi')
});


app.post('/bmi', (req, res) => {
    let height = Number(req.body.height);
    let weight = Number(req.body.weight);
    let age= Number(req.body.age);
    let bmi = weight / ((height/100) *( height/100));
    console.log(bmi)
    res.render('bmi', { bmi: bmi.toFixed(1), weight:weight, height:height,age:age });
  });

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});