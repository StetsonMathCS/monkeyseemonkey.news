import mysql.connector

cnx = mysql.connector.connect(user='monkey', password='epJiphQuitmeoneykbet',
                              host='localhost',
                              database='monkey')
cnx.close()



import datetime
import mysql.connector

cnx = mysql.connector.connect(user='monkey', database='monkey')
cursor = cnx.cursor()

query = ("SELECT * FROM articles ")

query = ("SELECT * FROM summary ")

query = ("SELECT *  FROM artsum ")

cursor.close()
cnx.close()


