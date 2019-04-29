# If on Python 2.X
 
import argparse
import pysolr
import mysql.connector


parser = argparse.ArgumentParser(description='Delete article with summaryid on Solr and MySQL using command line.')
parser.add_argument('summaryid', metavar='SummaryID', type=int, nargs=1,
                           help='summaryid to delete')
args = parser.parse_args()

# Setup a Solr instance. The timeout is optional.
solr=pysolr.Solr('http://solr:LiWofKemchOjEir@monkeyseemonkey.news/solr/monkey',
timeout=10)

# Finally, you can delete either individual documents,
print(solr.delete(q='summaryid:'+str(args.summaryid[0])))
print(solr.commit())

cnx = mysql.connector.connect(user='monkey', password='epJiphQuitmeoneykbet',
                              host='localhost',
                              database='monkey')

cursor = cnx.cursor()
query = ("DELETE FROM articles WHERE id="+str(args.summaryid[0]))
cursor.execute(query)
cursor.close()
cnx.close()



