const express = require('express');
const cors = require('cors');
const app = express();
var http = require('http');
var fs = require('fs');

app.use(express.json());
app.use(cors());

/*const knex = require('knex')({
})
*/

//here is a fake article information for 
//JSON purposes for until we connect to database
let database = [
    article = [
        {
            name: "article name",
            date: "article date",
            id: "article id",
            story: {
                bullet1: "article bullet 1",
                bullet2: "article bullet 2",
                bullet3: "article bullet 3"
            }
        }
    ]
]

app.get('/', (req, res) => {
    res.json('it is working!');
})

app.post('/searchresults/:id', (req, res) => {
    for (let article of database) {
        if (req.body.name === article.name) {
            res.json(article);
        }
    }
    //respond all article names and attached dates
})

app.get('/article/:id', (req, res) => {
    const name = req.body.name;
    //return article with matching name
})

app.listen(4567, () => {
    console.log("app is running on port 4567");
})