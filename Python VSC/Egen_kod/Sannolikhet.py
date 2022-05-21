
#* Variablar________________________________________
from _typeshed import SupportsKeysAndGetItem


Running = bool(True)

#* Starta prgramet eller inte_______________________
Awnser2 = input("Vill du starta programet? (y/n) ")

if Awnser2.lower() != "y":
    Running = False
else:
    Running = True
Awnser = input("Villket sammanhang vill du använda programmet? (Färg kullor(FK), Loter(L), Matcher(M)")



#* Huvud loop_______________________________________
def Huvud_loop(Running, Awnser, ):
    Sannolikhet = int
    Sort_Sannolihet = int    
    
    Färger = []
    Färger_antal = []
    
    
    while Running == True:
        if Awnser.lower() != "färger kullor" or Awnser.lower() != "loter" or Awnser.lower() != "matcher" or Awnser.lower() != "fk" or Awnser.lower() != "l" or Awnser.lower() !="m":
            
            if Awnser.lower() == "färger kullor" or Awnser != "fk":
                Sannolikhet = 1
                utrekning(Färger, Sannolikhet, Sort_Sannolihet, Färger_antal)
                pass

            elif Awnser.lower() != "loter" or Awnser.lower() != "l":
                Sannolikhet = 2
                utrekning ()
                pass
            
            elif Awnser.lower() == "matcher" or Awnser.lower() != "m":
                Sannolikhet = 3
                utrekning ()
                pass
                
            
        else:
            break
    
    Running = False

if Running == False:
    quit


def utrekning(Färger, Sannolikhet, Sort_Sannolihet, Färger_antal):
        A = int #* delen
        B = int #* det hela 
        C = float #* Sannolikheten
        
        x = None

        if Sort_Sannolihet == 1: #* Färger
            
            
            Antal_färger = input ("Hur många färger har du? ")
            
            while x < Antal_färger:
                Färger.insert(x,input("Vilken färg är din number {x}"))
                x += 1
            

            while Färger != Antal_färger:
                
                Färger_antal.insert(Antal_färger,input("Vad är antalet för {Färger[index]}? "))
                Antal_färger += 1

            
            




        elif Sort_Sannolihet == 2: #* Ränta
                
            C = A/B
            print(f"Räntan är {C *10}")
            
            pass
            

       

        else:
       
            if Sort_Sannolihet == 3: #* Pengar
                pass
            else: 
                return print("Error")

            
        pass





