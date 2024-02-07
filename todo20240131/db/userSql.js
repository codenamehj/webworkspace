let userList =
    `SELECT	user_no
            , user_id
            , user_pwd
            , user_name
            , user_gender
            , user_age
            , join_date
    FROM t_users;`;

let userInfo =
    `SELECT user_no
            , user_id
            , user_pwd
            , user_name
            , user_gender
            , user_age
            , join_date
    FROM t_users
    WHERE user_id = ?`;

let userInsert =
    `INSERT INTO t_users
    SET ?`; // 객체, 필드명==컬럼명

let userUpdateAll =
    `UPDATE t_users
    SET ?
    WHERE user_id = ?`; // 배열[객체, 단일값]

let userUpdateInfo =
    `UPDATE t_users
    SET user_name = ?, user_gender = ?, user_age = ?, join_date = ?
    WHERE user_id = ?`; // 배열[단일값, 단일값, 단일값, 단일값]

let userDelete = 
    `DELETE FROM t_users
    WHERE user_id = ?`;

module.exports = { // 변수명 == 필드명, 변수가 가지고 있는 값이 필드의 값
    userList,
    userInfo,
    userInsert,
    userUpdateAll,
    userUpdateInfo,
    userDelete
}