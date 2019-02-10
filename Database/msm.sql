
drop table if exists articles;

create table articles (
    ID int primary key auto_increment not null,
    web_address varchar(1000) not null,
    publisher varchar(1000) not null,
    fetch_date date not null,
    body text not null,
    title varchar(1000) not null,
    score double null
);
drop table if exists summary;

create table summary (
	ID int primary key auto_increment not null,
    title varchar(1000) not null,
    summary text not null,
    score double null
    );
drop table if exists artsum;

create table artsum(
ID_article int not null,
ID_summary int not null,
score double null
);