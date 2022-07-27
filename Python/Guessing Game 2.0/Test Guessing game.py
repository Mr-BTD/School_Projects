
import random
from time import sleep
import os as operativSystem


def ClearTerminal():

    Comand = 'clear'

    if operativSystem.name in ('nt', 'dos'):
        Comand = 'cls'
    operativSystem.system(Comand)


diff = input("what kind of diffeculty do you want? ")


def Game(diff):  # Där Spelet utspelas
    run = True
    Feedback = "None at the moment"
    score = 0
    lastGuess = []
    match diff:
        case "easy":
            range = 100
            life = 10
        case "medium":
            range = 500
            life = 5
        case "hard":
            range = 1000
            life = 1

    while run:
        computerGuess = random.randint(1, range)
        print(f"\n\n{computerGuess}")

        while life > 0:
            ClearTerminal()
            print("""
____________________________________________________
        1. Guess          |           2. Quit
- - - - - - - - - - - - - - - - - - - - - - - - - - 
    
    Last Guess:
    
    """)
        # * Printar ut användarens gamla svar
            for i, v in enumerate(lastGuess):
                print(f"Guess {i}: {v}")

            print(f"""
- - - - - - - - - - - - - - - - - - - - - - - - - - 

        Feedback: {Feedback}
        
        Lifes: {life} 

‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
                  """)
            # * Kollar om användarens gissning är ett number
            try:
                UserGuess = input("What is your guessing number? ")
                if UserGuess.isnumeric():
                    UserGuess = int(UserGuess)
                    lastGuess.append(UserGuess)
            except ValueError:
                print("\n\nPlase say a number insted of a letter")

            if UserGuess > computerGuess:
                life -= 1
                Feedback = "You got it too high"

            elif UserGuess < computerGuess:
                life -= 1
                Feedback = "You got it too Low"

            elif UserGuess == computerGuess:
                ClearTerminal()
                print("\n\nYou won")
                lastGuess.clear()
                score += 1
                computerGuess = random.randint(1, range)
                sleep(5)
    # * If argumenet som kollar om användarens vill köra igen
        if life <= 0:
            ClearTerminal()

            print(f"Your score: {score}")
            PlayAgain = input("\n\nDo you want to play again? ")
            match PlayAgain:
                case "yes":
                    Game(diff)
                case "no":
                    run = False
                    break


Game(diff)
