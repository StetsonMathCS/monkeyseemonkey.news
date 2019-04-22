# If on Python 2.X

from __future__ import print_function
import pysolr

# Setup a Solr instance. The timeout is optional.

solr = pysolr.Solr('http://solr:LiWofKemchOjEir@monkeyseemonkey.news/solr/monkey', timeout=10)

# Finally, you can delete either individual documents,

print(solr.delete(q='summaryid:7'))
print(solr.commit())
