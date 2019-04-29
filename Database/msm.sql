
drop table if exists articles;

create table articles (
    id int primary key auto_increment not null,
    web_address varchar(1000) not null,
    publisher varchar(1000) not null,
    fetch_date datetime not null,
    body longtext not null,
    title varchar(1000) not null,
	image_address varchar(1000)  null,
	score double null,
	summary longtext null
);





ALTER TABLE articles ADD INDEX (title);
ALTER TABLE articles ADD INDEX (publisher);

SHOW INDEXES FROM articles;

