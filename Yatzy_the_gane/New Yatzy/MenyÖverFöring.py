from Menyer import *
 
Meny = 1
Spel_meny = 0
ProgramIgång = True


while ProgramIgång == True:
    
    if Meny == 1:
        
        Meny = Huvud_Meny(Meny)
        
        
    elif Meny == 2:
        
        Meny = Inställningar_Meny(Meny)
    
    
    elif Meny == 3:
        
        if Spel_meny == 0:
            Meny = Spel_Meny(Meny)
        
        elif Spel_meny == 2:
            Meny = Kasta(Meny)            
        
    
    elif Meny == 4:
        
        Meny = Quit_Meny(Meny)
    