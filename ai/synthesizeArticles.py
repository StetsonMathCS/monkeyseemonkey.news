### TO DO ###
# Apply Hannah's removeTheBias() function; return updated list of strings

import spacy
import mysql.connector

summaries = []

cnx = mysql.connector.connect(user='monkey', password = 'epJiphQuitmeoneykbet',
                              host = 'localhost', database ='monkey')

cursor = cnx.cursor()

query = ("SELECT body FROM articles")
cursor.execute(query)
textbodies = cursor.fetchall()

for body in textbodies:
    temp = body
    summary = removeTheBias(temp)
    summaries.append[summary]


