const http = require('http');

http.createServer( ( req, res ) =>{

    res.writeHead( 200, { 'Content-Type' : 'application/json' } );
    const person = {
        id : 1,
        name : 'Eber'
    };

    res.write( JSON.stringify( person ) );
    res.end();

} ).listen( 8080 );

console.log( 'Server running in port 8080' );