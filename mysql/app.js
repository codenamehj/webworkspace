const express = require('express');
const app = express();
const mysql = require('./db.js');
// mysql.executeQuery();
// application/json
app.use(express.json());
// app.use(function (req, res, next) { });
// applicaion/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log('Server Start, http://localhost:3000');
});

app.get('/customers', async (req, res) => {
    // 1
    let list = await mysql.executeQuery('customerList');
    // 2
    res.json(list);
});

app.get('/customers/:id', async (req, res) => {
    let customerId = req.params.id;
    let info = (await mysql.executeQuery('customerInfo', customerId))[0]; // 배열을 객체로
    // let info = await mysql.executeQuery('customerInfo', customerId);
    // info = info[0]; // 배열을 객체로
    res.json(info);
})

app.post('/customers', async (req, res) => {
    let data = req.body.param; // 객체
    let result = await mysql.executeQuery('customerInsert', data);
    res.json(result);
});
/* db에 insert 되면 command 창에 표시되는 것
INSERT - AUTO_INCREMENT
OkPacket {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 2,
    serverStatus: 2,
    warningCount: 0,
    message: '',
    protocol41: true,
    changedRows: 0
}
*/

app.put('/customers/:id', async (req, res) => {
    // let result = await updateAll(req);
    let result = await updateInfo(req);
    res.json(result);
});

async function updateAll(request) {
    let data = [selectedInfo(request.body.param), request.params.id]; // SET절, id컬럼
    let result = await mysql.executeQuery('customerUpdateAll', data);
    return result;
}

function selectedInfo(obj) {
    let delData = ["id", "email"];
    let newObj = {};
    let isTargeted = null;
    for (let field in obj) {
        // field : id, name, email, phone, address
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
    let data = [...getInfo(request.body.param), request.params.id]; // email컬럼, phone컬럼, address컬럼, id컬럼
    let result = await mysql.executeQuery('customerUpdateInfo', data);
    return result;
}

function getInfo(obj) {
    let getData = ["email", "phone", "address"];
    let newAry = [];
    for (let target of getData) {
        for (let field in obj) {
            // field : id, name, email, phone, address
            if (field == target) {
                newAry.push(obj[field]);
                break;
            }
        }
    }
    return newAry; // ["han@mail.com", "010-1111-1111", null]
}
/* db에 update되면 command 창에 표시되는 것
OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '(Rows matched: 1  Changed: 1  Warnings: 0',
  protocol41: true,
  changedRows: 1
}
*/

