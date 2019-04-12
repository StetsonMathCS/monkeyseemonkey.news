import spacy
import mysql.connector

import removebias as rb

cnx = mysql.connector.connect(user='monkey', password='epJiphQuitmeoneykbet',
                              host='localhost',
                              database='monkey')

cursor = cnx.cursor()

query = (""" SELECT id , body FROM articles WHERE summary = null """)
cursor.execute(query)
myresult = cursor.fetchall()

for row in myresult:
	summary = rb.removeTheBias(row[1])
	query = ("UPDATE articles SET summary = '" + summary[0] + "' WHERE id = " + row[0])
	cursor.execute(query)
	print(cursor.fetchall())
	query = ("UPDATE articles SET score = '" + summary[1] + "' WHERE id = " + row[0])
	cursor.execute(query)
	print(cursor.fetchall())