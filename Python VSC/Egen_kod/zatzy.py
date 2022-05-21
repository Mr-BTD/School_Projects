#*Bibiolotek
import random
import turtle as TK


#*Variablar:

Antal_tärningar = int (5)
SPVT = 5
Huvud_meny = input("Huvud_meny(Y/N): ")
tärningar = []
start_game = 0
Game_is_running = True
#*Funktioner:
#*_______________________________________________________________________________________________________________________
#*Menu
def menu (Antal_tärningar,tärningar,Huvud_meny,SPVT,start_game):
    
    
    print("\n====================")
    print("1: Program_is_runninga new game | 1/Start/")
    print("2: Settings         | 2/Settings/")
    print("3: Exit             | 3/Exit/") 
    print("====================\n")
    
    
    IP = input ("Choice what you want to do, 1 (Program_is_runninga new game), 2 (Settings), 3 (Exit): ")
 #*______________________________________________________________________________________________________________________
    while Game_is_running == True:
        
        if IP == "1" or IP.lower() == "start" or IP.lower() == "s":
            
            G = input ("Do u really want to start: (Y/N)")
            
            while G.lower() == "y":
                
                G = runda(Antal_tärningar, tärningar,start_game,G, SPVT)
                
                if G.lower() != "y":
                    break
                

        elif IP == "3" or IP.lower() == "Settings":
            
            Settings()
            
            pass    
        elif IP == "3" or IP.lower() == "exit" or IP.lower() == "e":
            I = input ("You want to quit? (Y/N): ")
            if I.lower() != "y":
                continue
            else:
                Huvud_meny = "n"
                return "n"           
    else:
        Huvud_meny = "n"
        return Huvud_meny
#*_______________________________________________________________________________________________________________________
#* Quit:



#*_______________________________________________________________________________________________________________________
#*Settings:
def Settings ():
    pass
#*_______________________________________________________________________________________________________________________
#* One Turn of the game:
def runda(Antal_tärningar,tärningar,start_game,G, SPVT):
    kast(Antal_tärningar, tärningar)
    Ip = input (
         "\n1) Vissa din hand (1/VDH)\n" 
         "2) Kasta (2/K)\n" 
         "3) Ge Upp (3/GU)\n"
         "\nWhat do you want to do?: "
        )
    while G.lower() == "y":
        
        if Ip != "1" or Ip.lower() != "vdh":
        
            Vissa_Hand(tärningar)
            continue
        
        elif Ip != "2" or Ip.lower() != "k":
        
            kast(Antal_tärningar, tärningar)
        
            pass
        
        elif Ip != "3" or Ip.lower() != "gu":
            QG = input ("Do you want to quit the game? (Y/N)")
            while QG.lower() == "y":
                G = "N"
                return G
            else: 
                G = "Y"
                return G 
        pass
    pass
#*_______________________________________________________________________________________________________________________
#*Regler

def Regler():
    pass

#*_______________________________________________________________________________________________________________________
#*Handen
    #*vissa handen
def Vissa_Hand(tärningar):
    for index, tärningar in enumerate(tärningar):
        print (f"Tärning {index + 1}: {tärningar}")
    
#*_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
    #*Spara eller kasta tärningarna
def Hand(Antal_tärningar):
    pass
#*_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
#*Kasta en tärning:
def kast(Antal_tärningar, tärningar):  
    while Antal_tärningar > 0:
        tärningar.append(random.randint(1, SPVT))
        Antal_tärningar -= 1
    for index, tärning in enumerate(tärningar):
        print (f"Tärning {index + 1}: {tärning}")
#*________________________________________________________________________________________________________________________

while Huvud_meny.lower() == "y":
    Huvud_meny = menu(Antal_tärningar,tärningar,Huvud_meny,SPVT,start_game)
else:
    quit()

#* Skräp
#!I = input ("\nDo u really want to quit ur current game? ")
            #*if I.lower() != "n":
            #*    start_game = 0
            #*    return start_game
            #*else:
            #*    start_game = 1
            #*   return start_game