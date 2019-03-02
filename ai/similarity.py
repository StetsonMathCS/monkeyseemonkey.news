import spacy
import sys
import re

spacy.prefer_gpu()
nlp = spacy.load('en_core_web_md')

theFile = open("similarityTesting.txt",encoding="utf8")

bigString = theFile.read(9999999)
doc = nlp(bigString)
arr = []
for sent in doc.sents:
	arr.append(sent)

for a in range(0,len(arr)-1):
    for b in range(a+1,len(arr)):
        docA = arr[a]
        docB = arr[b]
        temp = docA.similarity(docB)
        if(len(docA) == len(docB)):
            temp *= 1
        elif(len(docA) < len(docB)):
            temp *= len(docA)/len(docB)
        else:
            temp *= len(docB)/len(docA)
        if(temp > 0.92):
            print("-----------------\n\n{}\n\n{}\n{}\n".format(arr[a],arr[b],temp))
