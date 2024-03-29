use dev;

DESC customers;

SELECT	id
		, name
		, email
		, phone
		, address
FROM customers;

/*
1. SQL문 -> js
2. MySQL 실행요청 -> js
3. app.js -> js
*/

DROP TABLE t_users;

CREATE TABLE `t_users` (
    `user_no` INT AUTO_INCREMENT,
    `user_id` VARCHAR(100) NOT NULL UNIQUE,
    `user_pwd` VARCHAR(100) NOT NULL,
    `user_name` VARCHAR(100) NOT NULL,
    `user_gender` CHAR(1) CHECK (user_gender IN ('M' , 'F')),
    `user_age` INT,
    `join_date` DATE,
    PRIMARY KEY (`user_no`)
);

SELECT 
    user_no,
    user_id,
    user_pwd,
    user_name,
    user_gender,
    user_age,
    join_date
FROM
    t_users;

DESC t_users;

INSERT INTO t_users
			(
				user_no
				, user_id
				, user_pwd
				, user_name
				, user_gender
				, user_age
				, join_date
			)
			VALUES
            (
				1
                , 'user1'
                , '1111'
                , 'Hong'
                , 'M'
                , 20
                , '2024-01-31'
            );
		
        COMMIT;
        
        -- axios 설치