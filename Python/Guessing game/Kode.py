import os as operativSystem
import random as slump
from time import sleep
codeIsOn = True
NuvarandeNivå = "Easy"


def ClearTerminal():
    Comand = 'clear'

    if operativSystem.name in ('nt', 'dos'):
        Comand = 'cls'

    operativSystem.system(Comand)


def GameMenu(NuvarandeNivå):
    ClearTerminal()

    match NuvarandeNivå:
        case "Easy":
            Range = 100

        case "Medium":
            Range = 500

        case "Hard":
            Range = 1000

    datornsNumber = slump.randint(1, Range)
    LastGuess = []
    Guess = None
    print(f""" 
           =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
           
           1. GUESS THE NUMBER   |          1 
                                 | 
           2. Back to Menu       |          2
            
           Your current guess is {Guess}
          
           Your last Guess's was:
           {LastGuess}
           
           =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
           """)

    AvändarensVal = input("What option do you want to? ")

    match AvändarensVal:
        case "1":
            # GissaNumberet(Guess,LastGuess)
            # for i in range(len(LastGuess)):
            #     print(
            #         """

            #           """
            #           )
            print("hej")
        case "2":  # * Gå tillbacka en meny
            return


def GissaNumberet():
    pass


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
