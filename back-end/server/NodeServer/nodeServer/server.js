const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
/*const knex = require('knex')({

})
*/

app.get('/', (req, res) => {
    res.json('it is working!');
})

app.post('/searchresults/:id', (req, res) => {
    const query = req.body.query;

    
    //respond with a list of article names
})

app.get('/article/:id', (req, res) => {
    const name = req.body.name;
   /* knex('articles')
        .select('*')
        .from('articles')
        .where({name: name})
        .then(res.json(article))
        */
})

app.listen(4567, () => {
    console.log("app is running on port 4567");
})