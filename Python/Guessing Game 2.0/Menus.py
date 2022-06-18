
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
GameRunning = "True"

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


# * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
# *                                       Spelet
# * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
#  ----------------------------------------------------------------------------------------------------------------------------
#                                                      Options
#  ----------------------------------------------------------------------------------------------------------------------------

# Meny bred: 81

def Options(Difficulty):  # * Detta är den första menyn av Option
    print("""
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                     Game Option                      
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=         
        1. Difficulty                    |          TYPE: 1
        2. Quit                          |          TYPE: 2
_________________________________________________________________________________
          \n""")
    UserOptionChoice = input("What of thies options do you want to do, TYPE: ")

# & Kollar om det som Användaren har medget är en av de saker som man har medget
    try:
        if UserOptionChoice.lower() == "one" or UserOptionChoice.lower() == "two":
            UserOptionChoice = int(UserOptionChoice)
        else:
            if type(UserOptionChoice) == int:
                if 1 <= int(UserOptionChoice) >= 4:
                    UserOptionChoice = int(
                        UserOptionChoice)

    except ValueError or TypeError:
        print(f'''

      
{EM.emojize(":warning:")}                                                                             {EM.emojize(":warning:")} 
   You did not wright the right type of number, please try again in 10 sec :D    
{EM.emojize(":warning:")}                                                                             {EM.emojize(":warning:")} 


              ''')
        sleep(15)

    match UserOptionChoice:
        case 1:
            Difficulty = OptionForDifficulty(Difficulty)


def OptionForDifficulty(Difficulty):

    print(f"""
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                                     Difficylty                      
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=         
        Current diffficulty: {Difficulty}
_________________________________________________________________________________        
        1. Easy                          |          TYPE: 1
        2. Easy                          |          TYPE: 1
        3. Easy                          |          TYPE: 1
        4. Quit                          |          TYPE: 2
_________________________________________________________________________________
          \n""")
    UserDiffiycultyOptionChoice = input(
        "What of thies options do you want to do, TYPE: ")
    try:
        if UserDiffiycultyOptionChoice.lower() == "one" or UserDiffiycultyOptionChoice.lower() == "two" or UserDiffiycultyOptionChoice.lower() == "three" or UserDiffiycultyOptionChoice.lower() == "four":
            UserDiffiycultyOptionChoice = int(UserDiffiycultyOptionChoice)
        else:
            if type(UserDiffiycultyOptionChoice) == int:
                if 1 <= int(UserDiffiycultyOptionChoice) >= 4:
                    UserDiffiycultyOptionChoice = int(
                        UserDiffiycultyOptionChoice)

    except ValueError or TypeError:
        print(f'''

      
{EM.emojize(":warning:")}                                                                             {EM.emojize(":warning:")} 
   You did not wright the right type of number, please try again in 10 sec :D    
{EM.emojize(":warning:")}                                                                             {EM.emojize(":warning:")} 


              ''')
        sleep(15)

    match UserDiffiycultyOptionChoice:
        case 1:
            Difficulty = "easy"
            return Difficulty
        case 2:
            Difficulty = "medium"
            return Difficulty
        case 3:
            Difficulty = "hard"
            return Difficulty
        case 4:
            return


#  ----------------------------------------------------------------------------------------------------------------------------
#                                                      Game
#  ----------------------------------------------------------------------------------------------------------------------------

def Game():  # * Första menyn för Spelet
    pass


#  ----------------------------------------------------------------------------------------------------------------------------
#                                                      Huvud Meny
#  ----------------------------------------------------------------------------------------------------------------------------


while GameRunning == "True":
    # ClearTerminal()
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
        "What of thies options do you want to do, TYPE: ")

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    try:
        if UserMainMenuChoice.lower() == "one" or UserMainMenuChoice.lower() == "two" or UserMainMenuChoice.lower() == "three":
            print("one")
            UserMainMenuChoice = int(UserMainMenuChoice)
        else:
            if int(UserMainMenuChoice) == int:
                print("hej")
                UserMainMenuChoice = int(
                    UserMainMenuChoice)
                # if 1 <= int(UserMainMenuChoice) >= 3:
    except ValueError or TypeError:
        print(f'''

      
{EM.emojize(":warning:")}                                                                             {EM.emojize(":warning:")} 
   You did not wright the right type of number, please try again in 10 sec :D    
{EM.emojize(":warning:")}                                                                             {EM.emojize(":warning:")} 


              ''')
        sleep(15)
        continue

# & Koden åvan för kollar om användarens input är en siffra eller inte eller i rätt range
# & om det är ej en sifra eller 1-3 så kommer det bli ett error vid if satsen så
# & Körs det om igen och ger användaren en förklaring varför det ej fungerade
# & Om det går igenom så gör man om användarens input till en integer (ett tall som kan bara vara ett heltal)
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    match UserMainMenuChoice:
        case 1:
            Game(Difficulty)
        case 2:
            print("Hej")
            Difficulty = Options(Difficulty)


#  ----------------------------------------------------------------------------------------------------------------------------
#                                                      Options
#  ----------------------------------------------------------------------------------------------------------------------------


def Options():
    pass


#  ----------------------------------------------------------------------------------------------------------------------------
#                                                      Game
#  ----------------------------------------------------------------------------------------------------------------------------

def Game():
    pass
