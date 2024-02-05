require('dotenv').config({ path: './db/dbSetting.env' });
const express = require('express');
const app = express();
const mysql = require('./db.js');

// application/json
app.use(express.json());
// applicaion/x-www-form-urlencoded -> 같이 추가해주는 것을 권장
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log('Server Start, http://localhost:3000');
});

app.get('/users', async (req, res) => {
    let list = await mysql.executeQuery('userList');
    res.json(list);
});

app.get('/users/:id', async (req, res) => {
    let userId = req.params.id;
    let info = (await mysql.executeQuery('userInfo', userId))[0]; // 배열을 객체로
    res.json(info);
})


app.post('/users', async (req, res) => {
    let data = req.body.param; // 객체
    let result = await mysql.executeQuery('userInsert', data);
    res.json(result);
});

app.put('/users/:id', async (req, res) => {
    // let result = await updateAll(req);
    let result = await updateInfo(req);
    res.json(result);
});

app.delete('/users/:id', async(req, res)=>{
    let userId = req.params.id;
    let result = await mysql.executeQuery('userDelete',userId);
    res.json(result);
})

async function updateAll(request) {
    let data = [selectedInfo(request.body.param), request.params.user_id]; // SET절, id컬럼
    let result = await mysql.executeQuery('userUpdateAll', data);
    return result;
}

function selectedInfo(obj) {
    let delData = ["user_id", "user_no"];
    let newObj = {};
    let isTargeted = null;
    for (let field in obj) {
        isTargeted = false;
        for (let target of delData) {
            if (field == target) {
                isTargeted = true;
                break;
            }
        }
        if (!isTargeted) {
            newObj[field] = obj[field];
        }
    }
    return newObj;
};

async function updateInfo(request) {
    let data = [...getInfo(request.body.param), request.params.id];
    let result = await mysql.executeQuery('userUpdateInfo', data);
    return result;
}

function getInfo(obj) {
    let getData = ["user_name", "user_gender", "user_age"];
    let newAry = [];
    for (let target of getData) {
        for (let field in obj) {
            if (field == target) {
                newAry.push(obj[field]);
                break;
            }
        }
    }
    return newAry;
}