const express = require('express');
const app = express();

const port = 8000

app.use('/public', express.static('public'));


app.set('views', './views');
app.set('view engine', 'ejs');



app.get('/movies', (req, res) => {
    // res.send('Bientôt des films ici même');
    res.render('movies')
   
})



// app.get('/movies-details', (req, res) => {
//     // res.send('bientôt sur movies-details')
//     res.render('movies-details')
// })

const title = 'terminatore';
app.get('/movies/:id/:title', (req, res) => {
    const id = req.params.id;
    const title = req.params.title
    // res.send(`film numero ${id}`)
    res.render('movies-details' , {movieid: title, titles: title })

});


app.get('/',  (req, res) => {
    // res.send('hello Word');
    res.render('index');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


