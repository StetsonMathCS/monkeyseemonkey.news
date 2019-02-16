import spacy

from spacy.symbols import nsubj, VERB
from spacy.symbols import nsubj, ADJ

nlp = spacy.load('en_core_web_sm')

text = open('cnnnewssample_russia1.txt', 'r').read() 
doc = nlp(text)


'''
Retrieve all words tagged as adjectives for further filtering 
'''
adjs = set()
with open('unfilteredAdjectives.txt', 'w') as unfilteredAdjectiveFile:
    for possible_subject in doc:
        if possible_subject.pos_ == 'ADJ':
            adjs.add(possible_subject)
            unfilteredAdjectiveFile.write(str(possible_subject) + "\n")
            print(possible_subject, possible_subject.pos_)



