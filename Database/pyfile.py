{
import mysql.connector
import python file

mydb = mysql.connector.connect(
  host="localhost",
  user="Monkey",
  passwd="epJiphQuitmeoneykbe",
  database="Monkey")


query = ("SELECT * FROM summary ")
cursor.execute(query)
myresult = cursor.fetchall()

for x in myresult:
  print(x)

requests.post('http://monkeyseemonkey.news/solr/monkey/update/collection/dataimport?command=full-import')


}


>>> r = requests.get('http://monkeyseemonkey.news/solr/monkey/update, auth=('user', 'pass'))
>>> r.status_code
200
>>> r.headers['content-type']
'application/json; charset=utf8'
>>> r.encoding
'utf-8'
>>> r.text
u'{"type":"User"...'
>>> r.json()
{u'private_gists': 419, u'total_private_repos': 77, ...}

  {
        "summaryid":"10",
        "summary":["the real news in."],
        "title":["the truth"],
        "url":"http://monkeyseemonkey.news",
        "score":9.0,
        "publisher":"monkeyseemonkey",
        
      {
