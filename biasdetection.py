import spacy

from spacy.symbols import nsubj, VERB
from spacy.symbols import nsubj, ADJ

nlp = spacy.load('en_core_web_sm')

text = open('fox2.txt', 'r').read() 
article = nlp(text)

flaggedWordsArray = []
with open('flaggedwordslist.txt', 'r') as flaggedFile:
    for word in flaggedFile:
        cleanedWord = word.strip()
        flaggedWordsArray.append(cleanedWord)

articleArray = []

for line in article:
    cleanedLine = str(line).strip()
    articleArray.append(str(line))

matchesArray = []
for item in flaggedWordsArray:
    for l in articleArray:
        if item == l:
            matchesArray.append(item)

'''This prints out biased statement '''
for match in matchesArray:
    for s in article.sents:
        if match in str(s):
            print("***POTENTIALLY BIASED WORD: " + match + "****" + '\n' + "SENTENCE LOCATION: " + str(s) + "\n")
           
        

