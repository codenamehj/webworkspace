const express = require('express');
const app = express();

// application/x-www-form-urlencoded
const defaultParser = express.urlencoded({ extended: false });

// application/json
const jsonParser = express.json();

// app.use(defaultParser);
app.use(jsonParser);

// /search?keyword=${value}
app.get('/search', defaultParser, (req, res) => {
    let data = req.query.keyword;
    res.send(data + ', 검색결과');
})

// /info => method:post, body:name=${value}
app.post('/info', defaultParser, (req, res) => {
    let data = req.body.name;
    res.send('Welcome, ' + data);
})

// /message => method:post, body:{"param":{"title":"...","content":"..."}}
app.post('/message', (req, res) => {
    let data = req.body.param;
    res.send(data.title + ', ' + data.content);
})

app.listen(5000, () => {
    console.log('Server Start');
})