import spacy
import mysql.connector
import similarity
import synthesizeArticles
import removebias as rb
import similarity

cnx = mysql.connector.connect(user='monkey', password='epJiphQuitmeoneykbet',
                              host='localhost',
                              database='monkey')

cursor = cnx.cursor()

query = (""" SELECT id , title , body FROM articles 
    WHERE fetch_date >= curdate() - INTERVAL DAYOFWEEK(curdate())+6 DAY
    AND fetch_date < curdate() - INTERVAL DAYOFWEEK(curdate())-1 DAY """)
cursor.execute(query)
myresult = cursor.fetchall()

for row in myresult:
	summary = rb.removeTheBias(row[2])
	query = ("UPDATE articles SET summary = '" + summary[0] + "' WHERE id = " + row[0])
	cursor.execute(query)
	print(cursor.fetchall())
	query = ("UPDATE articles SET score = '" + summary[1] + "' WHERE id = " + row[0])
	cursor.execute(query)
	print(cursor.fetchall())