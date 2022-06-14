from calendar import c
import os as operativSystem
import random as slump
from time import sleep

codeIsOn = True
NuvarandeNivå = "Easy"
# *________________________________________________________________________________________


def ClearTerminal():
    Comand = 'clear'

    if operativSystem.name in ('nt', 'dos'):
        Comand = 'cls'

    operativSystem.system(Comand)

# *________________________________________________________________________________________


def GameMenu(NuvarandeNivå):
    ClearTerminal()
    GameMenuOnOrOff = True
    match NuvarandeNivå:
        case "Easy":
            Range = 100

        case "Medium":
            Range = 500

        case "Hard":
            Range = 1000
    while GameMenuOnOrOff == True:
        print(f""" 
            =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
            
            1. GUESS THE NUMBER   |          1 
                                    | 
            2. Back to Menu       |          2
            =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        """)

        AvändarensVal = input("What option do you want to? ")

        match AvändarensVal:
            case "1":
                GissaSpelet(Range)

            case "2":  # * Gå tillbacka en meny
                return

            case __:  # * Om användaren skriver något annat så  gör den ingeting
                continue
# *________________________________________________________________________________________


def GissaSpelet(Range):
    LowOrHigher = ""
    ClearTerminal()
    SpeletKörs = True
    LastGuess = []
    datornsNumber = slump.randint(1, Range)
    Guess = None

    while SpeletKörs:
        ClearTerminal()
        print(
            f""" 
        =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        1. GUESS              |          1    
        -------------------------------------------------
        
        Last Gues: {Guess}
        
        Last Guesses:
        """
        )
        for i in range(len(LastGuess)):
            print(f"Guess {i+1}: {LastGuess[i]}")

        print(f"""        

        Your guess was {LowOrHigher}
              
        -------------------------------------------------        
        2. Back to Menu       |          2
        =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        """
              )

        VadVillAnvändaren = input("What do u want to do? ")

        match VadVillAnvändaren:
            case "1":
                ClearTerminal()
                Guess = input(f"Input your guess: (between 1-{Range}")
                try:
                    if Guess > datornsNumber:
                        LowOrHigher = "Lower"

                    elif Guess < datornsNumber:
                        LowOrHigher = "Higher"
                except TypeError:
                    print("""
                          
                          The Guess must be a number not a string 
                          (a word or combonation with any lethers in any alfabets)
                          
                          """)
                    continue

                except ValueError:
                    continue


# *________________________________________________________________________________________


def Options(NuvarandeNivå):
    ClearTerminal()
    print(""" 
           =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                     Welcome To Guess That Number
           _________________________________________________
                                 |
           1. Game Difficulty    |          1
           2. Go back to menu    |          2
                                 |              
           =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
           """)

    AvändarensVal = input("\n\nWhat do you want to? ")

    match AvändarensVal:
        case "1":
            NuvarandeNivå = ChangeDifficulty(NuvarandeNivå)
            return NuvarandeNivå

        case "2":
            return
        case __:
            pass

# *________________________________________________________________________________________


def ChangeDifficulty(GammlaNuvarandeNivå):
    ClearTerminal()
    global NuvarandeNivå
    print(f""" 
           =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
           _________________________________________________
            Current Difficulty: {NuvarandeNivå}
           _________________________________________________ 
             
           1. Easy               |          1
           2. Medium             |          2
           3. Hard               |          3                                    
           4. Back to menu       |          4
           
           =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
           """)
    AvändarensVal = input("\n\nWhat do you want to do? ")

    match AvändarensVal:
        case "1":
            NuvarandeNivå = "Easy"
            return NuvarandeNivå

        case "2":
            NuvarandeNivå = "Medium"
            return NuvarandeNivå

        case "3":
            NuvarandeNivå = "Hard"
            return NuvarandeNivå

        case "4":
            return

        case __:
            NuvarandeNivå = GammlaNuvarandeNivå
            return NuvarandeNivå

# *________________________________________________________________________________________


while codeIsOn == True:
    ClearTerminal()
    print(""" 
           =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                     Welcome To Guess That Number
           _________________________________________________
                                 |
           1. Play The Game      |          1
           2. Options            |          2
           3. Quit The Game      |          3
                                 |              
           =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
           """)

    AvändarensVal = input("What option do you want to do? ")

    match AvändarensVal:
        case "1":
            GameMenu(NuvarandeNivå)

        case "2":
            Options(NuvarandeNivå)

        case "3":
            break

        case __:

            continue
# *________________________________________________________________________________________

'''

def GissaNumberet(LastGuess, Range, datornsNumber, playing):

    if Guess.isnumeric:

        if int(Guess) == datornsNumber:
            print(
                f"YOU WON YOU GUESSED THE RIHGT NUMBER, The number was {datornsNumber}")
            LastGuess = LastGuess.clear()
            playing = False
            Guess = None
            return Guess, LastGuess, playing
        else:
            LastGuess.append(int(Guess))
            Guess = str(Guess)
            playing = True
            if int(Guess) < datornsNumber:
                print("Your guess was too low")
            else:
                print("Your guess was too high")
            return Guess, LastGuess, playing
    else:
        print("ERROR! You did not type any number, try again and insert a number")



'''
