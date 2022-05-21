
#!
#*
#~
#?
#&
#TODO
#^

#*LIBERYS
import random as r


#*Varibels:

Huvud_meny = input("Do you want to start the program/game? (y/n): ")
Gameplay_on_or_of = bool
Game_Meny = "n"


#&▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
#*&Functions:
#&▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

#*▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
#*DICE
#*▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

#*Show dices:

def VISA_TÄRNINGARNA (dices_hand):
    
    #if dices_hand == None:
    #    dices_hand = KASTA_TÄRNING(dices_hand)
    #else:    
    #    for index,dice in enumerate(dices_hand):
    #        print(f"Dice {index+1} has the value of {dices_hand[dice]}")
    pass
            
#*Cast a Dice:

def KASTA_TÄRNING (dices_hand, dices):
    #print("hi")
    #while dices > 0:
    #    dices_hand.append(r.randint(1,5))
    #    dices -= 1
    #dices = int(5)
    #return dices_hand
    pass

   
#*Keep and not keep Dices:
def SPARA_ELLER_EJ (dices_hand):
    #dice_keep = [] #*Spara tärnings värde 
    #Keep_or_not = []
    #Keep_or_not.append(input("What dice/dices do you want to throw agian?(1.2.3.4.5)"))
    #print(Keep_or_not)
    pass

#*Settings:

def settings ():
   
   
    pass
    #*TODO Settings



def Quit (Huvud_meny,Game_Meny,Start_game):
    Q = input("Do you really want to quit this game? (y/n): ")
    
    if Q.lower() != "n":
        if Huvud_meny.lower() == "n":
        
            Game_Meny = "n"
            Start_game = "n"
            Huvud_meny = "y" 
            return Huvud_meny, Game_Meny, Start_game
        
        elif Start_game.lower() == "y":
            
            Game_Meny = "n"
            Huvud_meny = "y"
            Start_game = "n"
            return Huvud_meny, Game_Meny, Start_game
        
        elif Huvud_meny == "y":
            Huvud_meny, Game_Meny = "n", "n"   
            return Huvud_meny, Game_Meny
        
    
#&▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
#& Main function:
#&▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬



#*▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
#*Menu 1
#*▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
def main(Huvud_meny,Game_Meny,Start_game):
    
    Huvud_meny, Game_Meny, Start_game = "y", "n", "n"
    
    while Game_Meny.lower() != "y": #*& HUVUD MENYN
        
        print (
            "\n\nMenu 1:\n\n"
            "_______________________________________________    \n"
            "Start_the_game (S) \n"
            "Opptions for the game (O)\n"
            "Quit(Q)\n"
            "_______________________________________________\n"
        )
        
        
#*_________________________________________________________________________________________________________________
#* Alternativ 
        
        MO = input("What do u want to do? (S/O/Q): ")

        if MO.lower() == "s" or MO.lower() == "game_meny": #*& Gå till spelet
            
            Start_game = input("Do you want to start the game?(y/n): ")
            
            while Start_game.lower() == "y":
                Start_game = GameMenu(Game_Meny,Huvud_meny,Start_game)
            
            
        
        elif MO.lower() == "o" or MO.lower() == "opptions": #*& Gå till opptions i spelet
            
            settings()
            
            continue
        
        elif MO.lower() == "q" or MO.lower() == "quit": #*& Avsluta spelet
            
            Huvud_meny, Game_Meny, Start_game = Quit(Huvud_meny, Game_Meny,Start_game)  
            return Huvud_meny, Game_Meny, Start_game
        
        else:
            continue
        
        
#*▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
#*Menu 2
#*▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

def GameMenu (Game_Meny, Huvud_meny, Start_game): #*& SPEL MENYN
    
    dices_hand = [] #* DIN HAND SOM DU HAR MED VÄRLDENA PÅ DINA TÄRNINGAR ÄR
    
    dices = 5
    Game_Meny, Huvud_meny = "y", "n"
    
    
    
#*_________________________________________________________________________________________________________________ 
#*SPELET MENY OCH SPELET

    
    if Huvud_meny.lower() !="y": 
        
        print ("\n\nMenu 2:\n")
        
        print(
            "_____________________________\n"
            "Throw new dices (T/ND) \n"
            "Throw dices that u do not want to keep(K)\n"
            "Quit(Q)\n"
            "____________________________\n\n"
            )
        Svar1 = input("What opption do you want to do?(T/K/Q): ")
    
        dices_hand = KASTA_TÄRNING (dices_hand, dices) 
        VISA_TÄRNINGARNA(dices_hand)
#*Alltetiv
    
    if Svar1.lower() == "t" or Svar1.lower() == "nd" or Svar1.lower() == "throw new dices" or Svar1.lower() == "new dieces": #* KASTA NYA TÄRNINGAR
       
        KASTA_TÄRNING () 
        pass
    
    elif Svar1.lower() == "k" or Svar1.lower() == "throw dices that u do not want to keep": #* VÄLJ VILKA TÄRNINGAR DU KOMMER ATT SPARA TILL NÄSTA RUNDA 
       
        SPARA_ELLER_EJ(dices_hand)
        pass
    
    elif Svar1.lower() == "q" or Svar1.lower() == "quit": #* Quit 
       
        Huvud_meny, Game_Meny, Start_game_ = Quit(Huvud_meny,Game_Meny,Start_game)
        
        
        
        return Start_game
    

#*_________________________________________________________________________________________________________________ 

#//*Start loop:
Gameplay_on_or_of = True

while Gameplay_on_or_of == True:
    
    Huvud_meny,Game_Meny, Start_game = main(Huvud_meny,Game_Meny, Start_game)
    
    if Huvud_meny.lower() != "y" and Game_Meny != "y" and Start_game.lower() != "y":
        Gameplay_on_or_of = False
        
    
        
        
        
quit()
#! SKRÄP
#
#print("What dices do you wnat to kast again?(1-5")
#    REPLACE_DICE = int(input("1, 2, 3, 4, 5"))
#    
#    if REPLACE_DICE.lower() == 1:
#        
#       dices_hand.replace(dices_hand[REPLACE_DICE], str(REPLACE_DICE))
#
#
#
#
#
#
#
