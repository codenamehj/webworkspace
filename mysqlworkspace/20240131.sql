USE sakila;
SELECT * FROM sys_config;

USE sys;
SELECT * FROM sys_config;

/*
	문자형 		- CHAR(1~255 byte) / VARCHAR(1~16383 byte) / TEXT
    
	숫자			- 정수 INT(4 byte) / BIGINT
					- 실수 FLOAT / DOUBLE(권장) 
                    
	날짜			- DATE(날짜만) : YYYY-MM-DD
(YY/MM/DD)	- TIME(시간만) : HH:MM:SS
					- DATETIME(날짜시간 모두)
*/
/*
	ORACLE				MySQL
    NVL						IFNULL(컬럼, 대체값)
    LIKE						LIKE
    '%'||'문자'||'%'	CONCAT(CONCAT('%', '문자'), '%')
								CAST(대상 AS 타입)
								DATE_FORMAT(값, 출력포맷) %Y%m%d(대문자 소문자에 따라 자리수가 바뀜)
*/

-- CREATE DATABASE dev;

USE dev;

CREATE TABLE `customers` (
	`id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45)  NOT NULL,
    `email` VARCHAR(45)  NOT NULL,
    `phone` VARCHAR(45)  NOT NULL,
    `address` VARCHAR(100) NULL,
     PRIMARY KEY(`id`)
);

-- 이제부터는 이렇게 아래쪽으로 나열해야 함.
SELECT 	id
		, name 
                , email
                , phone
                , address
FROM customers;

DESC customers;

INSERT INTO customers
			(
				id
				, name
				, email
				, phone
				, address
			)
			VALUES
			(
				1
				, 'John Doe'
				, 'john@mail.com'
				, '010-0000-0000'
				, ''
			);
            
COMMIT;

-- 사용자 계정 생성
CREATE USER 'dev01'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY '1234';
GRANT ALL PRIVILEGES ON dev.* to 'dev01'@'%' WITH GRANT OPTION;
flush privileges;
 
