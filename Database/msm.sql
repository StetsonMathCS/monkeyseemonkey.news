
drop table if exists articles;

create table articles (
    id int primary key auto_increment not null,
    web_address varchar(1000) not null,
    publisher varchar(1000) not null,
    fetch_date datetime not null,
    body longtext not null,
    title varchar(1000) not null,
	image_address varchar(1000)  null,
    score double null
);
drop table if exists summary;

create table summary (
	id int primary key auto_increment not null,
    title varchar(1000) not null,
    summary text not null
    );
drop table if exists artsum;

create table artsum(
id_article int not null,
id_summary int not null,
relevant double null
);


insert into articles (ID,web_address,publisher,fetch_date,body,title)
values (1,

"https://www.foxnews.com/entertainment/brad-pitt-attended-ex-wife-jennifer-anistons-50th-birthday-bash",
"Jaclyn Hendricks",
'2019-02-10 12:00:00',
"
Jennifer Aniston‘s 50th birthday party included a special guest.

On Saturday, the actress’ ex-husband, Brad Pitt, was photographed at the Sunset Tower Hotel in Los Angeles, where the celebration was held.

“Jen arrived alone but was excited to get inside,” a source told E! News. “Brad also arrived alone in a baseball cap. He ducked inside with his longtime security detail by his side.”

In addition to Pitt, 55, a slew of Aniston’s famous friends, including Kate Hudson, Jason Bateman and Reese Witherspoon, who appeared to take a tumble on the stairs, toasted the birthday girl, who turns the big 5-0 on Monday.

“Everyone was coming up to Jen and hugging her and screaming Happy Birthday. She had some family there and seemed very happy to be with so many good friends,” the insider noted.

Aniston and Pitt called it quits in 2005 after five years of marriage. The “Friends” star went on to marry Justin Theroux in 2015 before breaking up in 2018. Pitt ultimately wed his “Mr. and Mrs. Smith” co-star, Angelina Jolie, in 2014 before announcing their split two years later.

As for Aniston’ relationship with Pitt today, a source told People the actress was “very happy he showed up” on Saturday night.
",

"Brad Pitt attended ex-wife Jennifer Aniston's 50th birthday bash");


select * from articles;




select web_address, title, summary, score 
from articles 
join artsum on ID = ID_articlep
join summary on ID = ID_summary

