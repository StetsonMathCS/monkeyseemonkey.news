import spacy
import mysql.connector
# import biasRemoval

summaries = []

cnx = mysql.connector.connect(user='monkey', password = 'epJiphQuitmeoneykbet',
                              host = 'localhost', database ='monkey')

cursor = cnx.cursor()

query = ("SELECT body FROM articles")
cursor.execute(query)
textbodies = cursor.fetchall()

for body in textbodies:
    temp = body
    synthesis = removeTheBias(temp)
    summaries.append[synthesis]

# Below database insertion will likely be removed upon completion of Nick's
# program
add_summary = ("INSERT INTO summary "
              "(summary)"
              "VALUES (%s)")

for body in summaries:
    cursor.execute(add_summary, body)
