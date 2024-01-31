// customerSql.js

let customerList =
`SELECT id
        , name
        , email
        , phone
        , address
FROM customers`;

let customerInfo =
`SELECT id
        , name
        , email
        , phone
        , address
FROM customers
WHERE id = ?`;
// 1) 배열인지 아닌지 : 물음표 갯수(하나이면 배열이 아니지만 두개 이상이면 배열임)
// 2) 물음표 별로 객체 타입인지 아닌지 : 물음표가 어느 컬럼에 들어가는 값인지 구분 가능여부(가능하면 단일값, 가능하지 않으면 객체O)

let customerInsert =
`INSERT INTO customers
SET ?`; // 객체, 필드명==컬럼명

let customerUpdateAll =
`UPDATE customers
SET ?
WHERE id = ?`; // 배열[객체, 단일값]

let customerUpdateInfo =
`UPDATE customers
SET email = ?, phone = ?, address = ?
WHERE id = ?`; // 배열[단일값, 단일값, 단일값, 단일값]

module.exports = {
    customerList,
    customerInfo,
    customerInsert,
    customerUpdateAll,
    customerUpdateInfo
}

// nodemon app.js
// nodemon --watch db app.js