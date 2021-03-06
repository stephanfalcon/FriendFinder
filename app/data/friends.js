const express = require("express")
// const sql = require("mysql")
const path = require("path")

const app = express()

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let people = []

// function score(){
    
//     for (let i = 0; i < people.length; i++) {
//         let score = 0 
//         const element = people[i];
//         for (let i = 0; i < element.answers.length; i++) {
//             score += parseInt(element.answers[i]);
//         }
//         console.log(`${element.name}'s score is ${score}`)
//     }
// }

app.listen(port, function(){
    console.log(`listening on port ${port}`)
})

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"../public/home.html"))
    
})

app.get("/survey.html",function(req,res){
    res.sendFile(path.join(__dirname,"../public/survey.html"))
})

app.get("/survey/data",function(req,res){
    res.json(people)
})

app.post("/survey.html",function(req,res){
    
    let newperson = req.body

    people.push(newperson)

    console.log(newperson)
    res.json(newperson)

})
    
