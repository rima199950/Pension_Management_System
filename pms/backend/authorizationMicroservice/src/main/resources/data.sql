DROP TABLE IF EXISTS userdata;

CREATE TABLE userdata (
  id        INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username	VARCHAR(120) NOT NULL,
  password	VARCHAR(30) NOT NULL 
);
INSERT INTO userdata (username, password) VALUES 
	('asim', 'asim'),
	('aditya', 'aditya'),
	('harshit', 'harshit'),
	('rima', 'rima'),
	('vanya','vanya');
