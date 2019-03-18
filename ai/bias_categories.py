r1 = range(10,20)
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


with open('flaggedwordslist.txt', 'r') as flaggedFindNum:
    for line in flaggedFindNum:
        word, number = line.split()
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


print ("LEVEL ONE: Not particularly biased, but extraneous descriptors: " + "\n" + str(extraneous))
print()
print ("LEVEL TWO: Potentially biased words: "  + "\n" + str(potentiallyBiased))
print()
print ("LEVEL THREE: Biased words: " + "\n" + str(biased))
print()
print ("LEVEL FOUR: Very biased words: "  + "\n" + str(veryBiased))
print()
print ("LEVEL FIVE: Very biased, Potentially politically charged: "  + "\n" + str(potentiallyPolitical))
print()
print ("LEVEL SIX: Very biased, politically charged words: "  + "\n" + str(political))
print()
print ("LEVEL SEVEN: Very biased, very politically charged words: "  + "\n" + str(veryPolitical))
