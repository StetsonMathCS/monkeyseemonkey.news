import mysql.connector
import datetime

cnx = mysql.connector.connect(user='monkey', password='epJiphQuitmeoneykbet',
                              host='localhost',
                              database='monkey')

cursor = cnx.cursor()

query = ("SELECT * FROM articles ")
cursor.execute(query)
myresult = cursor.fetchall()

for x in myresult:
  print(x)


query = ("SELECT * FROM summary ")
cursor.execute(query)
myresult = cursor.fetchall()

for x in myresult:
  print(x)


query = ("SELECT *  FROM artsum ")
cursor.execute(query)
myresult = cursor.fetchall()

for x in myresult:
  print(x)


cursor.close()
cnx.close()


