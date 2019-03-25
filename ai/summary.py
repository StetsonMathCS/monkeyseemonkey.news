import spacy
import mysql.connector
import similarity
import importlib

importlib.import_module("similarity")
importlib.import_module("removebias")

cnx = mysql.connector.connect(user='monkey', password='epJiphQuitmeoneykbet',
                              host='localhost',
                              database='monkey')

cursor = cnx.cursor()

query = (""" SELECT id , title , body FROM articles 
    WHERE fetch_date >= curdate() - INTERVAL DAYOFWEEK(curdate())+6 DAY
    AND fetch_date < curdate() - INTERVAL DAYOFWEEK(curdate())-1 DAY """)
cursor.execute(query)
myresult = cursor.fetchall()

titleSimilarityGroups = []
currentLoc = 0

for row1 in myresult:
	titleSimilarityGroups[currentLoc] = [row1]
	for row2 in myresult:
		tempDoub = similarity(row1[1] , row2[1])
		if (tempDoub > 0.92 & tempDoub < 1.0):
			if row2 not in titleSimilarityGroups[currentLoc]:
				titleSimilarityGroups[currentLoc].append(row2)
	if(len(titleSimilarityGroups[currentLoc]) > 1):
		currentLoc += 1

for group in titleSimilarityGroups:
	summary = summaryFunction(group)
	query = ("insert into summary (id , title , summary) values (" + summary[0] + ", \"" + summary[1] + "\", \"" + summary[2] + "\" );")
	cursor.execute(query)
	result = cursor.fetchall()
	for article in group:
		query = ("insert into artsum (id_article, id_summary, relevant) values("+ article[0] +", "+ summary[0] +", "+ 0.6 +")")
