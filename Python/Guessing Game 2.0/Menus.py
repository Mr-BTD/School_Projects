# * I detta Filen så ligger alla olika funktioner som används.
# * De går i den ordningen som de går i programet efter.
# * Spelt kommer också vara på Engelska så att alla kan spela det.

# * De kommar att vara färg kodat så att allt som är för spelt och för annat är enkelt att see:

# *   :   Generella komentarer
# &   :   Förklaringar
# TODO:   Allt som tillhör spelet har denna färg
# ~   :   Bebioltek Som är importerade:
# ?   :   Framtida frågor
# ^   :   Variablar
# !   :   Funktioner

# * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

# ~ Bibiolotek

import os as operativSystem
import random as Slump
import emoji as EM
from time import sleep


# * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

# ^ Golabla Variablar

Difficulty = "Easy"
GameRunning = True

# * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

# * Ränssa skärmen

# & I en terminal så kan man med bibolitetket OS rässa det:
# & Förklaring av kod:

# & 1:   Sätter en variabel med namn Comand till clear
# & 2:   Sedan så kollar vi om Operativ Systemet som programmet körs på är en widnows (nt) eller dos
# & 2.1: Så ändrar vi comandot till cls | Detta gör vi pga att på en mac eller en linux så är comandot
# &      för att rännsa en terminal clear, men för en windows/dos operativ system så komandot cls
# & 3:   Sedan så kör vi komandot i terminalen


def ClearTerminal():

    Comand = 'clear'

    if operativSystem.name in ('nt', 'dos'):
        Comand = 'cls'
    operativSystem.system(Comand)

# *  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
#                                                               Options
# *  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


def Options(Difficulty):  # * Detta är den första menyn av Option
    ClearTerminal()
    print("""
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                     Game Option                      
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=         
        1. Difficulty                    |          TYPE: 1
        2. Quit                          |          TYPE: 2
_________________________________________________________________________________
          \n""")
    UserOptionChoice = input("What of these options do you want to do, TYPE: ")

    UserOptionChoice = MenuLogic(UserOptionChoice)

    match UserOptionChoice:
        case 1:
            return OptionForDifficulty(Difficulty)

        case 2:
            return Difficulty

# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
#                                                       Difficulty
# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

# & Detta är den menyn som ändrar svårhetsgraden på spelet.


def OptionForDifficulty(Difficulty):
    ClearTerminal()
    print(f"""
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                     Difficulty                      
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=         
        Current diffficulty: {Difficulty}
_________________________________________________________________________________        
        1. Easy                          |          TYPE: 1
        2. Medium                        |          TYPE: 2
        3. Hard                          |          TYPE: 3
        4. Quit                          |          TYPE: 4
_________________________________________________________________________________
          \n""")
    UserDiffiycultyOptionChoice = input(
        "What of these options do you want to do, TYPE: ")

    UserDiffiycultyOptionChoice = MenuLogic(UserDiffiycultyOptionChoice)

    match UserDiffiycultyOptionChoice:
        case 1:
            Difficulty = "Easy"
            return Difficulty, Options(Difficulty)

        case 2:
            Difficulty = "Medium"
            return Difficulty, Options(Difficulty)

        case 3:
            Difficulty = "Hard"
            return Difficulty, Options(Difficulty)

        case 4:
            return Options(Difficulty)


# * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
# *                                                           Game
# * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


def GameOption(Difficulty):  # * Första menyn för Spelet
    ClearTerminal()
    LastGuess = None
    Feedback = None

    match Difficulty:

        case "Easy":
            Range = 100
            life = 10

        case "Medium":
            Range = 500
            life = 5

        case "Hard":
            Range = 1000
            life = 2

    print(f'''
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                      The Game                   
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=          

        I am Thinking about a number between 1-{Range}. 
        You have {life} and you lose 1 after 10 or more wrong guesses
         
_________________________________________________________________________________
              ''')

    GamePlayMenu1 = input("Are You ready to play?? (YES or NO)  ").lower()

    match GamePlayMenu1:

        case "yes":
            GameplayIsOn = True
            ComputerGuess = Slump.randint(1, Range)
            Game(GameplayIsOn, ComputerGuess, Range, life, Feedback, LastGuess)
        case "no":
            return


def Game(GameplayIsOn, ComputerGuess, Range, life, Feedback, LastGuess):
    Guess = None
    while GameplayIsOn == True or life > 0:
        ClearTerminal()
        LastGuess = Guess
        Guess = None

        print(f'''
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                      Game                   
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=          
               1. Guess the Number     |          TYPE: 1
                                       |
               Last guess: {LastGuess}          | High or lower: {Feedback}      
_________________________________________________________________________________
               2. Quit                 |          TYPE: 2
_________________________________________________________________________________
              ''')
        GamePlayMenu2 = input(
            "What of these options do you want to do, TYPE: ")

        GamePlayMenu2 = MenuLogic(GamePlayMenu2)

        match GamePlayMenu2:

            case 1:
                ClearTerminal()
                Guess = input(f"Guess your number between 1-{Range}")
                if Guess.isnumeric():
                    Guess = int(Guess)
                    if Guess > 0:
                        Guess = Guess
                    else:
                        Guess = None
                else:
                    continue
                if Feedback != ComputerGuess:
                    Feedback = CheckingIfLowerOrHigher(
                        Guess, ComputerGuess, Feedback)
                    continue
                else:
                    print('''
_______________________________________________________________________________    
                        
               YOU WON, THE AMOUNT OF TURNS IT TOOK YOU WORE {Turns}
                    AND THE RIGHT NUMBER WAS {ComputerGuess}                                         
_______________________________________________________________________________                          
                          ''')
                    break

            case 2:
                return

    ClearTerminal()
    GamePlayMenu3 = input('''
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                        Do you want to play again                      
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=          
        1. Yes                      |          TYPE: 1/Yes
        2. No                       |          TYPE: 2/No
_______________________________________________________________________________

What option do u want to do?: ''')

    if GamePlayMenu3.isalpha():
        if GamePlayMenu3.lower() == "yes":
            AwnserGamePlayMenu3 = 1
        elif GamePlayMenu3.lower() == "no":
            AwnserGamePlayMenu3 = 0

    elif GamePlayMenu3.isnumeric():
        if GamePlayMenu3 == "1":
            AwnserGamePlayMenu3 = 1
        elif GamePlayMenu3 == "2":
            AwnserGamePlayMenu3 = 0

    match AwnserGamePlayMenu3:

        case 1:
            return GameOption(Difficulty)

        case 0:
            return


def CheckingIfLowerOrHigher(Guess, Computer, Feedback):
    Guess = int(Guess)
    Computer = int(Computer)

    if Guess > Computer:
        print(f'''
      
{EM.emojize(":arrow_down:")}                                                                             {EM.emojize(":arrow_down:")} 
   You did not get it right but the real number is lower then your awnser: {Guess}   
{EM.emojize(":arrow_down:")}                                                                             {EM.emojize(":arrow_down:")} 

              ''')
        Feedback = EM.emojize(":arrow_down:")
        return Game(Feedback)

    elif Guess < Computer:
        print(f'''
      
{EM.emojize(":arrow_up:")}                                                                             {EM.emojize(":arrow_up:")} 
   You did not get it right but the real number is higher then your awnser: {Guess}   
{EM.emojize(":arrow_up:")}                                                                             {EM.emojize(":arrow_up:")} 

              ''')
        Feedback = EM.emojize(":arrow_up:")
        return Feedback


# *_______________________________________________________________________________________________________________________
# *                                                     Menulogic
# *_______________________________________________________________________________________________________________________


def MenuLogic(Menu):
    try:
        Menu = str(Menu)

        if Menu.isalpha() == True:

            if Menu.lower() == "one":
                Menu = 1
                return Menu

            elif Menu.lower() == "two":
                Menu = 2
                return Menu

            elif Menu.lower() == "three":
                Menu = 3
                return Menu

            elif Menu.lower() == "four":
                Menu = 4
                return Menu

        elif Menu.isnumeric() == True:

            Menu = int(Menu)
            return Menu

    except ValueError:
        ClearTerminal()
        print(f'''
      
{EM.emojize(":warning:")}                                                                             {EM.emojize(":warning:")} 
   You did not wright the right type of number, please try again in 10 sec :D    
{EM.emojize(":warning:")}                                                                             {EM.emojize(":warning:")} 

              ''')
        sleep(15)

# & Koden åvan för kollar om användarens input är en siffra eller inte eller i rätt range
# & om det är ej en sifra eller 1-4 så kommer det bli ett error vid if satsen så
# & Körs det om igen och ger användaren en förklaring varför det ej fungerade
# & Om det går igenom så gör man om användarens input till en integer (ett tall som kan bara vara ett heltal)

# *_______________________________________________________________________________________________________________________
# ?                                                     Huvud Meny
# *_______________________________________________________________________________________________________________________


while GameRunning == True:
    ClearTerminal()
    print("""
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                      Welcome to the game GUESS THAT NUMBER                      
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=          
        1. Play the Game                 |          TYPE: 1
        2. Options                       |          TYPE: 2
        3. Quit                          |          TYPE: 3
_________________________________________________________________________________
          \n""")

    UserMainMenuChoice = input(
        "What of these options do you want to do, TYPE: ")

    UserMainMenuChoice = MenuLogic(UserMainMenuChoice)

    match UserMainMenuChoice:
        case 1:
            GameOption(Difficulty)
        case 2:
            Difficulty = Options(Difficulty)
        case 3:
            GameRunning = False
        case nul:
            print(f'''
      
{EM.emojize(":warning:")}                                                                             {EM.emojize(":warning:")} 
   You did not wright the right type of number, please try again in 10 sec :D    
{EM.emojize(":warning:")}                                                                             {EM.emojize(":warning:")} 

              ''')
            sleep(15)
ClearTerminal()
print("Thx for playing")
