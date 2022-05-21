import random

#* Variablar
top_of_range = input("Type a number: ")
guesses = 0


if top_of_range.isdigit():
    top_of_range = int(top_of_range)

    if top_of_range <= 0:
        print("Please enter a number lager than 0 next time")
        quit()
else: 
    print("Please enter a number next time")
    quit()


random_number = random.randint(0,top_of_range)

#* huvud loop av spelet 
while True:
    guesses += 1
    user_guess = input("Make a guess: ") 
    if user_guess.isdigit():
        user_guess = int(user_guess)
    else: 
        print("Please enter a number next time")
        continue
    
    if user_guess == random_number:
        print("You got it right!")
        break 
    elif user_guess > random_number:
        print("You were above the number!")
    else: 
        print("You were below the nomber!")

#* Resultat
print ("You got it in ", guesses, "guesses")
