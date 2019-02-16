import spacy

# Simple mockup program intended to provide a foundation for rating sentences
# according to a sentiment value.
nlp = spacy.load('en_core_web_sm')
doc = nlp(u"When Mexico sends its people, they're not sending their best.")

sentiment = 0

for token in doc:
    print(token.text, token.lemma_, token.pos_, token.tag_, token.dep_,
          token.shape_, token.is_alpha, token.is_stop)

for token in doc:
    # Use Spacey's detailed part-of-speech tag to determine if word is an
    # adjective or adverb.
    if token.tag_ == "JJ": 
        sentiment += 1
        pass
    elif ((token.tag_ == "JJR") or (token.tag_ == "JJS") or (token.tag_ == "RBR")
    or (token.tag_ == "RBS")): # Bonus for comparative or superlative attributes
        sentiment += 2

print("Sentiment rating: " + str(sentiment))
