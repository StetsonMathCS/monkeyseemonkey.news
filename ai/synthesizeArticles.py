import mysql.connector
from ai import removebias

cnx = mysql.connector.connect(user='monkey', password = 'epJiphQuitmeoneykbet',
                              host = 'localhost', database ='monkey')

cursor = cnx.cursor()

# Store body column in articles variable
query = ("SELECT body FROM articles")
cursor.execute(query)
articles = cursor.fetchall()

## Summarize articles using bias removal program
for article in articles:
    removebias.removeTheBias(article)

add_summary = ("INSERT INTO articles "
              "(summary)"
              "VALUES (%s)")

for article in articles:
    cursor.execute(add_summary, article)

cnx.commit()

cursor.close()
cnx.close()
