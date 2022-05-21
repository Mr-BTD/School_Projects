from Rules import *
from Game_Funktions import *
def Menu_M(Menu):
    print("\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n"
          "Play the game(Game)\n"
          "Settings(Settings)\n"
          "Quit(Quit)\n"
          "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n")    
    Opstion_MAIN = str(input("What Option do want to do? "))
    
    if Opstion_MAIN.lower() == "game":
        Menu = 2
        return Menu
            
    
    elif Opstion_MAIN.lower() == "settings":
        pass
    
    elif Opstion_MAIN.lower() == "quit":
         Manu = 0
         return Manu
    else:
        Menu = 1
        return Menu
    
def Menu_G(Menu):
    print("\n\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n"
          "Throw Again (Throw)\n"
          "Rules/Points(Rules)\n"
          "Give up (Give up)\n"
          "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n")   
    Opstion_GAME = str(input("What Option do want to do? "))
    
    Amount_of_dieces = 5
    Dice_value = [] #? the index of etch value is one or anothre die (dice 1 = index 0 and so forth)
    
    if Opstion_GAME.lower() == "throw":
        Gameplay_menu = 1
        return Gameplay_menu
    
    elif Opstion_GAME.lower() == "Rules":
        Menu_Rules(Dice_value)
        pass
    
    elif Opstion_GAME.lower() == "give up":
        
        Menu = 1  #? This does so that the menu change too the first one 
        return Menu
    
    
    return Menu


def Menu_Cast(Dice_value,Amount_of_dieces):
    print("\n\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n"
          "Keep or not(K or N)\n"
          "Throw diceses (Throw)\n"
          "Back(Back)\n"
          "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n")   
    Option_CAST = str(input("What Option do want to do? "))
    