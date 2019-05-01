import mysql.connector

'''
USE THIS WITH EXTREME CAUTION

THIS WILL REMOVE ALL SUMMARIES
AND SCORES FROM EVERY ARTICLE
IN THE DATABASE
'''


cnx = mysql.connector.connect(user='monkey', password='epJiphQuitmeoneykbet',
                              host='localhost',
                              database='monkey')

cursor = cnx.cursor()

query = ("UDPATE articles SET summary = NULL")
cursor.execute(query)
cnx.commit()

query = ("UDPATE articles SET score = NULL")
cursor.execute(query)
cnx.commit()

'''
Use this to delete specific entries in the database


query = ("UDPATE articles SET summary = NULL where id = " + str(id))
cursor.execute(query)
cnx.commit()

query = ("UDPATE articles SET score = NULL where id = " + str(id)")
cursor.execute(query)
cnx.commit()
'''