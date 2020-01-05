const express = require('express');

const app = express();

app.get('/api/test', (req, res) => {
    const test = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Henrik', lastName: 'Smith'},
        {id: 3, firstName: 'Moana', lastName: 'Doe'}
    ];

    res.json(test)
})

const port = 5000;

app.listen(port, () => console.log(`Server started port ${port}`));