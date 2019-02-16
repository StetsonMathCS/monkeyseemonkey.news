import spacy

# Simple mockup program intended to provide a foundation for rating sentences
# according to a sentiment value.
nlp = spacy.load('en_core_web_sm')
doc = nlp(u"""There are 500 bottles in that container. You are ugly. My name is
        Jeff.""")

class Sentence:
    sentencenum = 1
    sentiment = 0

sentenceList = [] # List of Sentence objects
iterator = 1 # Iterator for determining sentence number

x = Sentence()
sentenceList.append(x)

for token in doc: # If end of sentence, add new sentence to list
    if (token.text == '.') or (token.text == '?') or (token.text == '!'):
        if (token.rights != None):
            iterator += 1
            x = Sentence()
            x.sentencenum = iterator
            sentenceList.append(x)
            pass
    # Use Spacey's detailed part-of-speech tag to determine if word is an
    # adjective.
    elif token.tag_ == "JJ":
        x.sentiment += 1
    elif ((token.tag_ == "JJR") or (token.tag_ == "JJS") or (token.tag_ == "RBR")
    or (token.tag_ == "RBS")): # Bonus for comparative or superlative attributes
        x.sentiment += 2

print("Total number of sentences: " + str(iterator))
for sentence in sentenceList:
    print("Sentence " + str(sentence.sentencenum) + " sentiment rating: " +
            str(sentence.sentiment))

### Things to do:
  # Personally rank adjectives and adverbs according to emotional valence
  # Include more Sentence attributes, such as first word of sentence
  # Prevent creation of extra Sentence at end of list
