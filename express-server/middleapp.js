const express = require('express');
const session = require('express-session');
const cors = require('cors');
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

let sessionSetting = session({
    secret: "Have$A!@Nice_day", // 하드코딩 X
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 60000 // 밀리세컨드
    }
});

app.use(sessionSetting);

app.post('/login', (req, res) => {
    const { id, pwd } = req.body;
    if (!req.session.isLogin) {
        req.session.user = id;
        req.session.isLogin = true;
    }
    req.session.save((err) => {
        if (err) throw err;
        res.redirect("/");
    });
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect("/");
})

const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.json(req.session);
});