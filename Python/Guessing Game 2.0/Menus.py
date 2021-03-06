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
def Game(Difficulty):
    pass

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
        sleep(10)

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
            Game(Difficulty)
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
