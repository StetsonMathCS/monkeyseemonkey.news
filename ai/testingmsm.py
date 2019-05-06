
from __future__ import absolute_import
from __future__ import division, print_function, unicode_literals
from sumy.parsers.html import HtmlParser
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer as Summarizer1
from sumy.summarizers.luhn import LuhnSummarizer as Summarizer2
from sumy.summarizers.edmundson import EdmundsonSummarizer as Summarizer3
from sumy.nlp.stemmers import Stemmer
from sumy.utils import get_stop_words
import spacy 
import unittest
import removebias
from spacy.symbols import nsubj, VERB
from spacy.symbols import nsubj, ADJ
from collections import OrderedDict

class MSMTesting(unittest.TestCase):

    '''
    Replace with different articles within removebias.py
    '''
    

    outputTestFile = open("bias_free_summary.txt",'r')
    biasedFile = open("flaggedwordslist.txt", 'r')
    biasedWords = biasedFile.read()
    contents = outputTestFile.read().replace('//', '')

    nlp = spacy.load('en_core_web_sm')
    myOutput = nlp(contents)


    def testWordFiltering(self):
        self.assertTrue(self.biasedWords not in self.contents)

    def testOutput1(self):
        self.assertFalse("//" in self.contents)

    def testSentenceNum(self):
        i = 0
        for s in self.myOutput.sents:
            i = i + 1
        self.assertTrue(i==5)

    def testBiasScore1(self):
        self.assertFalse(removebias.removeTheBias(cleaned[1]) > 8)

    def testBiasScore2(self):
        self.assertFalse(removebias.removeTheBias(cleaned[1]) == 0)
    
    def testBiasScore3(self):
        self.assertTrue(removebias.removeTheBias(cleaned[1]) % 8 ==0)
    
    def testDuplicates(self):
        i = 0
        j = 1
        duplicate = None
        for line in self.contents:
            if line not in lines_seen: 
                duplicate = False
                lines_seen.add(line)        
        self.assertFalse(duplicate)


    

if __name__ == '__main__':
    unittest.main()
