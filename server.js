const express = require('express');
const path = require('path');

const app = express();

console.log(__dirname);

// Will send the index.html file as response
app.get('/', (clientRequestObject, serverResponseObject) => {
  serverResponseObject.sendFile(path.join(__dirname, 'index.html'));
});

// Hello from the about route
app.get('/about', (clientRequestObject, serverResponseObject) => {
  serverResponseObject.sendFile(path.join(__dirname, 'style.css'));
});

app.get('/about/test/something/another', (clientRequestObject, serverResponseObject) => {
  serverResponseObject.send('crazy route');
});

app.get('/api/data', (clientRequestObject, serverResponseObject) => {
  serverResponseObject.send({
    message: 'Wow, we made an API',
    date: new Date()
  })
});

app.get('*', (clientRequestObject, serverResponseObject) => {
  serverResponseObject.sendFile(path.join(__dirname, 'notfound.html'));
});

app.listen(3333, () => console.log('Server started on port 3333.'));