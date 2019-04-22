from __future__ import absolute_import
from __future__ import division, print_function, unicode_literals
import pysolr
from sumy.parsers.html import HtmlParser
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer as Summarizer
from sumy.nlp.stemmers import Stemmer
from sumy.utils import get_stop_words
import spacy

from spacy.symbols import nsubj, VERB
from spacy.symbols import nsubj, ADJ
from collections import OrderedDict

import mysql.connector

def removeTheBias(article_to_parse):
	rating = 0
	nlp = spacy.load('en_core_web_sm')
	#op = open(article_to_parse, 'r').read()
	article = nlp(article_to_parse)
	totalSentences = len(article.sents)

	r1 = range(10, 20)
	r2 = range(20, 30)
	r3 = range(30, 40)
	r4 = range(40, 50)
	r5 = range(50, 60)
	r6 = range(60, 70)
	r7 = range(70, 81)

	extraneous = []
	potentiallyBiased = []
	biased = []
	veryBiased = []
	potentiallyPolitical = []
	political = []
	veryPolitical = []
	wordValues = {}

	with open('flaggedwordslist.txt', 'r') as flaggedFindNum:
		for line in flaggedFindNum:
			word, number = line.split()
			wordValues[word] = number
			word = word.lower()
			number = float(number)
			number = number * 10
			if float(number) in r1:
				extraneous.append(word)
			if float(number) in r2:
				potentiallyBiased.append(word)
			if float(number) in r3:
				biased.append(word)
			if float(number) in r4:
				veryBiased.append(word)
			if float(number) in r5:
				potentiallyPolitical.append(word)
			if float(number) in r6:
				political.append(word)
			if float(number) in r7:
				veryPolitical.append(word)


	articleArray = []
	for line in article:
		cleanedLine = str(line).strip()
		articleArray.append(str(line))

	ex_matchesArray = []
	pb_matchesArray = []
	b_matchesArray = []
	vb_matchesArray = []
	potp_matchesArray = []
	p_matchesArray = []
	vp_matchesArray = []

	ex_counter = 0
	for item in extraneous:
		for l in articleArray:
			if item == l:
				if(l in wordValues):
					rating += wordValues[l]
				else:
					print("bad")
				ex_counter = ex_counter +1
				ex_matchesArray.append(item)

	pb_counter = 0
	for item in potentiallyBiased:
		for l in articleArray:
			if item == l:
				if(l in wordValues):
					rating += wordValues[l]
				else:
					print("bad")
				pb_counter = pb_counter +1
				pb_matchesArray.append(item)

	b_counter = 0
	for item in biased:
		for l in articleArray:
			if item == l:
				if(l in wordValues):
					rating += wordValues[l]
				else:
					print("bad")
				b_counter = b_counter +1
				b_matchesArray.append(item)

	vb_counter = 0
	for item in veryBiased:
		for l in articleArray:
			if item == l:
				if(l in wordValues):
					rating += wordValues[l]
				else:
					print("bad")
				vb_counter = vb_counter +1
				vb_matchesArray.append(item)

	potp_counter = 0
	for item in potentiallyPolitical:
		for l in articleArray:
			if item == l:
				if(l in wordValues):
					rating += wordValues[l]
				else:
					print("bad")
				potp_counter = potp_counter +1
				potp_matchesArray.append(item)

	p_counter = 0
	for item in political:
		for l in articleArray:
			if item == l:
				if(l in wordValues):
					rating += wordValues[l]
				else:
					print("bad")
				p_counter = p_counter +1
				p_matchesArray.append(item)

	vp_counter = 0
	for item in veryPolitical:
		for l in articleArray:
			if item == l:
				if(l in wordValues):
					rating += wordValues[l]
				else:
					print("bad")
				vp_counter = vp_counter +1
				vp_matchesArray.append(item)

	ex_matchesArray = list(OrderedDict.fromkeys(ex_matchesArray))
	pb_matchesArray = list(OrderedDict.fromkeys(pb_matchesArray))
	b_matchesArray = list(OrderedDict.fromkeys(b_matchesArray))
	vb_matchesArray = list(OrderedDict.fromkeys(vb_matchesArray))
	potp_matchesArray = list(OrderedDict.fromkeys(potp_matchesArray))
	p_matchesArray = list(OrderedDict.fromkeys(p_matchesArray))
	vp_matchesArray = list(OrderedDict.fromkeys(vp_matchesArray))

	ex_sentences = []
	pb_sentences =[]
	b_sentences = []
	vb_sentences = []
	potp_sentences = []
	p_sentences = []
	vp_sentences = []



	for e in ex_matchesArray:
		for sentence in article.sents:
			if e in str(sentence):
				str(e).strip()
				ex_sentences.append((str(sentence)))
				

	ex_sentences = list(OrderedDict.fromkeys(ex_sentences))



	for pb in pb_matchesArray:
		for sentence in article.sents:
			if pb in str(sentence):
				pb.strip()
				pb_sentences.append(str(sentence))
	pb_sentences = list(OrderedDict.fromkeys(pb_sentences))



	for b in b_matchesArray:
		for sentence in article.sents:
			if b in str(sentence):
				b.strip()
				b_sentences.append(str(sentence)) 
	b_sentences = list(OrderedDict.fromkeys(b_sentences))

	for vb in vb_matchesArray:
		for sentence in article.sents:
			if vb in str(sentence):
				vb.strip()
				vb_sentences.append(str(sentence))
	vb_sentences = list(OrderedDict.fromkeys(vb_sentences))

	for potp in potp_matchesArray:
		for sentence in article.sents:
			if potp in str(sentence):
				potp_sentences.append(str(sentence))
	potp_sentences = list(OrderedDict.fromkeys(potp_sentences))

	for p in p_matchesArray:
		for sentence in article.sents:
			if p in str(sentence):
				p_sentences.append(str(sentence))
	p_sentences = list(OrderedDict.fromkeys(p_sentences))

	for vp in vp_matchesArray:
		for sentence in article.sents:
			if vp in str(sentence):
				vp_sentences.append(str(sentence))
	vp_sentences = list(OrderedDict.fromkeys(vp_sentences))


	articleFile = open("trumplies.txt", "r").read()
	art = nlp(articleFile)

	artSentArray = []

	for s in art.sents:
		str(s).strip()
		artSentArray.append(str(s))

	artSentArray = list(OrderedDict.fromkeys(artSentArray))

	articleSentencesCopy = []
	conglomerate = []

	for st in artSentArray:
		articleSentencesCopy.append(st)

	# for ab in ex_sentences:
	#     conglomerate.append(ab)
	# for ab in pb_sentences:
	#     conglomerate.append(ab)
	for ab in b_sentences:
		conglomerate.append(ab)
	for ab in vb_sentences:
		conglomerate.append(ab)
	for ab in potp_sentences:
		conglomerate.append(ab)
	for ab in p_sentences:
		conglomerate.append(ab)
	for ab in vp_sentences:
		conglomerate.append(ab)

	for bias in conglomerate:
		for a in articleSentencesCopy:
			if str(bias) == str(a):
				articleSentencesCopy.remove(str(bias))

	cleanedString = ""
	cleanFile = open("cleaned.txt", 'w')
	for cleaned in articleSentencesCopy:
		cleanFile.write(cleaned + "\n")
		cleanedString+=(cleaned + "\n")

	return (cleanedString, rating / totalSentences)

def getSummary(cleanedString):
	LANGUAGE = "english"
	SENTENCES_COUNT = 5
	summarizedString = ""
	parser = PlaintextParser.from_file("cleaned.txt", Tokenizer(LANGUAGE))
	stemmer = Stemmer(LANGUAGE)

	summarizer = Summarizer(stemmer)
	summarizer.stop_words = get_stop_words(LANGUAGE)

	for sentence in summarizer(parser.document, SENTENCES_COUNT):
		# biasFreeSummary.write(str(sentence) + "\n" +"\n")
		# print(sentence)
		summarizedString+=(str(sentence))
	print(summarizedString)
	return summarizedString


#biasFreeSummary = open("bias_free_summary.txt","w")
if __name__ == "__main__":
	# cleanedString = removeTheBias(open("similarityTesting.txt").read())
	# getSummary(cleanedString)
	#solr = pysolr.Solr('http://localhost:8983/solr/', timeout=10)
	cnx = mysql.connector.connect(user='monkey', password='epJiphQuitmeoneykbet',
                              host='localhost',
                              database='monkey')

	cursor = cnx.cursor()

	query = (" SELECT id , body FROM articles WHERE summary = null ")
	cursor.execute(query)
	myresult = cursor.fetchall()

	for row in myresult:
		cleaned = removeTheBias(row[1])
		summary = getSummary(cleaned[0])
		query = ("UPDATE articles SET summary = '" + summary + "' WHERE id = " + row[0])
		cursor.execute(query)
		print(cursor.fetchall())
		query = ("UPDATE articles SET score = '" + cleaned[1] + "' WHERE id = " + row[0])
		cursor.execute(query)
		print(cursor.fetchall())
		#Adding the summary to solr after save it in the database
		#query = (" SELECT * FROM articles WHERE id = " + row[0] )
		#cursor.execute(query)
		#result = cursor.fetchall()
		#Note that the add method has commit=True by default, so this is immediately committed
		#solr.add([  
		#	{
		#		"summaryid":result[0],
		#		"summary":[result[8]],
		#		"title":[result[5]],
		#		"url":result[1],
		#		"score":result[7],
		#		"publisher":result[2],
		#		"date":result[3],
		#	}
		#])