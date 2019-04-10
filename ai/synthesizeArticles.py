import spacy
import mysql.connector
from ai import removebias

nlp = spacy.load('en_core_web_sm')
with open('flaggedwordslist.txt') as f:
    flaggedwords = f.readlines()

cnx = mysql.connector.connect(user='monkey', password = 'epJiphQuitmeoneykbet',
                              host = 'localhost', database ='monkey')

cursor = cnx.cursor()

# Store body column in articles variable
query = ("SELECT body FROM articles")
cursor.execute(query)
articles = cursor.fetchall()

## Summarize articles using bias removal program
# for article in articles:
#     article = removeBias(article)
##

## Iterate through article, removing sentences if they contain a flagged word
## Delete later, once bias removal function becomes available
for article in articles:
    doc = nlp(article)
    sents = list(article.sents)
    for sent in sents:
        for token in sent:
            for word in flaggedwords:
                if token == word:
                    article.replace(sent, '')
                    pass
                pass
            pass

## Rudimentary database insertion- will likely be deleted / modified
add_summary = ("INSERT INTO articles "
              "(summary)"
              "VALUES (%s)")

for article in articles:
    cursor.execute(add_summary, article)

cnx.commit()

cursor.close()
cnx.close()
