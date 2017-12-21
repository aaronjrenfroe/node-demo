const express = require('express');
const fs = require('fs');
var app = express();


app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {

    var now = new Date().toString();
    var msg = now + ": " + req.method + " "+req.url;
    
    console.log(msg);
    fs.appendFile('server.log',msg + '\n', (err) => {
        if(err) {
            console.log('Unable to append to server.log.')
        }
    });
    next();
})

app.get('/', (req, res) => {
    //res.send("<h1>Hello Express!</h1>");
    res.send({
        name: 'Aaron',
        likes: ['Rockets', 'family']
    });
});


app.listen(3000, () => {
    console.log('server is up pon port 3000');
});





