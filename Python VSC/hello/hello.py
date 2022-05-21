print("Welcome to my computer quiz!")

playing = input("Do you want to play? ")
Score = 0

if playing.lower() != "yes":
    quit()
print ("Ok! Let's play :D")

answer = input("what does CPU stand for? ")
if answer.lower() == "central processing unit":
    print ("Correct!")
    Score += 1

else:
    print ("Incorrect!")

answer = input("What does GPU stand for? ")
if answer.lower() == "graphics processing unit":
    print ("Correct!")
    Score += 1

else:
    print ("Incorrect!")

answer = input("What does RAM stand for? ")
if answer.lower() == "random access unit":
    print ("Correct!")
    Score += 1

else:
    print ("Incorrect!")

answer = input("What does PSI stand for? ")
if answer.lower() == "power supply unit":
    print ("Correct!")
    Score += 1

else:
    print ("Incorrect!")

print ("You got " + str(Score) + " qestion correct!")
print ("You got " + str((Score/4)*100) + "%")