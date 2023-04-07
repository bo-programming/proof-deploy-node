const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;
//
app.set('view engine', 'hbs');

hbs.registerPartials( __dirname + '/views/partials');

app.use( express.static( 'public' ) );


app.get('/', function (req, res) {
  res.render('home', {
    name : 'Bo Simp',
    title : 'Course of Node'
  })
})

app.get('/elements', ( req, res ) => res.render('elements') );

app.get('/generic', ( req, res ) => res.render('generic') );

// app.get('/elements', function (req, res) {
//     res.sendFile( __dirname + '/public/elements.html' );
// });

// app.get('/generic', function (req, res) {
//     res.sendFile( __dirname + '/public/generic.html' );
// });

app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html');
 });

app.listen( port, () => {
     console.log( `Server running in port ${ port }.`  );
} )
