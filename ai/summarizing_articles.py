from __future__ import absolute_import
from __future__ import division, print_function, unicode_literals

from sumy.parsers.html import HtmlParser
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer as Summarizer
from sumy.nlp.stemmers import Stemmer
from sumy.utils import get_stop_words

import os

os.system("python removebias.py")


LANGUAGE = "english"
SENTENCES_COUNT = 5

biasFreeSummary = open("bias_free_summary.txt","w")

if __name__ == "__main__":
    parser = PlaintextParser.from_file("cleaned.txt", Tokenizer(LANGUAGE))
    stemmer = Stemmer(LANGUAGE)

    summarizer = Summarizer(stemmer)
    summarizer.stop_words = get_stop_words(LANGUAGE)

    for sentence in summarizer(parser.document, SENTENCES_COUNT):
        biasFreeSummary.write(str(sentence) + "\n" +"\n")
        print(sentence)
