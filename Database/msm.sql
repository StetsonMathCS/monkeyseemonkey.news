
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


insert into articles (ID,web_address,publisher,fetch_date,body,title)
values (1,

"https://www.foxnews.com/entertainment/brad-pitt-attended-ex-wife-jennifer-anistons-50th-birthday-bash",
"Jaclyn Hendricks",
'2019-02-10',
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

--hassan inserted

insert into articles (ID,web_address,publisher,fetch_date,body,title)
	values (2,
	
	"https://www.foxnews.com/politics/elizabeth-warren-says-trump-may-not-even-be-a-free-person-in-2020",
	"Gerren Keith Gaynor",
	'2019-02-11',
	"
	Senator Elizabeth Warren targeted President Donald Trump during a campaign speech in Iowa on Sunday when she considered a run against the sitting president and suggested that he "may not even be a free person" in 2020.
	
	Warren, who officially announced her bid for the Democratic presidential nomination on Saturday, made the remark at the Veterans Memorial Building in Cedar Rapids in front of a crowd of several hundred. The Massachusetts senator argued that Democrats should resist the urge to respond to "a racist tweet, a hateful tweet, something really dark and ugly" when choosing whether or not to spar with Trump.
	
	ELIZABETH WARREN ANNOUNCES 2020 PRESIDENTIAL BID: 5 THINGS TO KNOW ABOUT THE MASSACHUSETTS SEANTOR
	
	“Are we going to let him use those to divide us?” Warren said, according to a report from The New York Times.
	
	“By the time we get to 2020, Donald Trump may not even be president,” she continued. “In fact, he may not even be a free person.” When asked to clarify her statements, Warren pointed to the multiple open investigations into the president, which includes the Russia probe by Special Counsel Robert Mueller and two additional investigations led by federal prosecutors in New York and Democrats who won back the majority in the House of Representatives this past November.
	
	TRUMP POKES FUN AT KLOBUCHAR'S CLIMATE-CHANGE STANCE AS SHE ANNOUNCES CANDIDACY IN SNOW
	
	"As we go forward in this campaign, is it going to be chasing every tweet and nasty statement from Donald Trump, or are we going to talk about what's broken in our country and what are our plans to fix it?" Warren told the Des Moines Register. "I want to talk about what's going wrong and how we set it right."
	
	Warren's comments come after President Trump took a jab at her on Twitter shortly after she announced her presidential campaign.
	
	CLICK HERE TO GET THE FOX NEWS APP
	
	"Today Elizabeth Warren, sometimes referred to by me as Pocahontas, joined the race for President," he tweeted. "Will she run as our first Native American presidential candidate, or has she decided that after 32 years, this is not playing so well anymore? See you on the campaign TRAIL, Liz!"
	",
	"Warren says Trump 'may not even be a free person' in 2020 ");
	
	select * from articles;

-- test

select web_address, fetch_date, summary.title from articles join artsum on ID_article = articles.ID join summary on ID_summary = summary.ID;
