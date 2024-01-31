const express = require('express');
const app = express();
const mysql = require('./db.js');
// application/json
app.use(express.json());
// applicaion/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log('Server Start, http://localhost:3000');
});

app.get('/users', async (req, res) => {
    let list = await mysql.executeQuery('userList');
    res.json(list);
});

app.get('/users/:user_no', async (req, res) => {
    let userNo = req.params.user_no;
    let info = (await mysql.executeQuery('userInfo', userNo))[0]; // 배열을 객체로
    res.json(info);
})


// 여기부터는 다시 확인
app.post('/users', async (req, res) => {
    let data = req.body.param; // 객체
    let result = await mysql.executeQuery('userInsert', data);
    res.json(result);
});

app.put('/users/:user_no', async (req, res) => {
    // let result = await updateAll(req);
    let result = await updateInfo(req);
    res.json(result);
});

async function updateAll(request) {
    let data = [selectedInfo(request.body.param), request.params.user_no]; // SET절, id컬럼
    let result = await mysql.executeQuery('userUpdateAll', data);
    return result;
}

function selectedInfo(obj) {
    let delData = ["user_no", "user_gender", "join_date"];
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
    let data = [...getInfo(request.body.param), request.params.user_no];
    let result = await mysql.executeQuery('userUpdateInfo', data);
    return result;
}

function getInfo(obj) {
    let getData = ["user_id", "user_pwd", "user_name", "user_age"];
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