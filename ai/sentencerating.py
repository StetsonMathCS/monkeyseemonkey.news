import spacy

#########################################
### Sentence sentiment rating program ###
#########################################

nlp = spacy.load('en_core_web_sm')
text = open('fox2.txt', 'r').read()
doc = nlp(text)

sents = list(doc.sents)
ratings = []

for sent in sents:
    rating = 0
    for token in sent:
        if token.tag_ == "JJ":
            rating += 1
        elif ((token.tag_ == "JJR") or (token.tag_ == "JJS") or (token.tag_ == "RBR")
        or (token.tag_ == "RBS")): # Bonus for comparative or superlative attributes
            rating += 2
            pass
        pass
    ratings.append(rating)
    pass

# Print sentence text
i = 1
for sent in sents: 
    print("----------------")
    print("Sentence "+ str(i) +": " + sent.text)
    i += 1

print("Total number of sentences: " + str(len(sents)))
print()

# Print sentence ratings
i = 0
for sent in sents:
    print("Sentence " + str(i+1) + " sentiment rating: " + str(ratings[i]))
    i += 1
