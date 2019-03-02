import mysql.connector

cnx = mysql.connector.connect(user='monkey', password='epJiphQuitmeoneykbet',
                              host='localhost',
                              database='monkey')
cnx.close()



import datetime
import mysql.connector

cnx = mysql.connector.connect(user='monkey', database='epJiphQuitmeoneykbet')
cursor = cnx.cursor()

query = ("SELECT web_address, title, scoreFROM articles ")

query = ("SELECT title, summary FROM summary ")

query = ("SELECT id_article, id_summary FROM artsum ")

cursor.close()
cnx.close()


