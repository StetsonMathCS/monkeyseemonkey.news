
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




insert into articles (id,web_address,publisher,fetch_date,body,title)
values (1,

"https://www.foxnews.com/entertainment/brad-pitt-attended-ex-wife-jennifer-anistons-50th-birthday-bash",
"Foxnews",
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



insert into articles (id,web_address,publisher,fetch_date,body,title)
values (2,

"https://www.foxnews.com/us/florida-man-arrested-for-allegedly-throwing-cookie-at-girlfriend",
"Foxnews",
'2019-02-25 19:00:00',
"
A Florida man was arrested for domestic battery after he reportedly threw a cookie at his girlfriend.

Wade Smith, 41, of Zephyrhills, was taken into custody on Sunday after deputies with the Pasco County Sheriff's Office were called to the home he shares with his girlfriend, WFLA reported.

SAN ANTONIO MAN ALLEGEDLY PISTOL-WHIPPED EX FOR REVEALING HIS CRIMINAL PAST TO NEW GIRLFRIEND

Smith's girlfriend reportedly told investigators that he threw a hard piece of cookie and hit her in the forehead, which deputies noted was red when they responded to the scene.

The 41-year-old, according to the news station, confessed to authorities that he threw the cookie at her.

CLICK HERE TO GET THE FOX NEWS APP

Online records from the sheriff's office indicate Smith was booked at the Pasco County Jail in Land O' Lakes on $500 bond.
",

"Florida man arrested for allegedly throwing cookie at girlfriend");



insert into articles (id,web_address,publisher,fetch_date,body,title)
values (3,

"https://www.foxnews.com/auto/circus-performers-crash-during-globe-of-death-motorcycle-stunt",
"Foxnews",
'2019-02-25 15:00:00',
"
They don’t call it the “globe of death” because it’s safe.
Three circus performers riding motorcycles around the inside of a spherical cage were lucky to escape major injury when they crashed during a performance in Liverpool, England, on Sunday.
Video shot by spectator Vicky Ferry captured the moment when two of the bikes tangled as a third was performing a loop and smashed into them, sending its rider for a spill from the top of the 23-foot-tall cage.
STREET RACING FARM TRACTOR IMPOUNDED BY POLICE
Everyone in the crowd was dumbstruck, people were screaming and lots of kids started crying,” Ferry told SWNS.
Staff from the Gandeys Circus and a paramedic in the crowd rushed to the aid of the daredevils and the rest of the show was immediately cancelled.
It was later reported that the riders were using replacement motorcycles because their custom bikes had recently been stolen, and that one of the riders had her ankle broken in the accident.
",

"Circus performers crash during 'globe of death' motorcycle stunt");

select * from articles;

select id, web_address from articles;





ALTER TABLE articles ADD INDEX (title);
ALTER TABLE articles ADD INDEX (publisher);

SHOW INDEXES FROM articles;

