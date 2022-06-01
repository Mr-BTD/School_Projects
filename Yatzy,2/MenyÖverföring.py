from Menyer import *

speletÄrIRörelse = True
vilkenMenyÄrIGång = 1
Meny = 1

#* Meny överföring

while speletÄrIRörelse == True:
    
    if vilkenMenyÄrIGång == 1:
        
        Meny = 1
        vilkenMenyÄrIGång = startMeny(vilkenMenyÄrIGång)
        
    
    elif vilkenMenyÄrIGång == 2:
        
        Meny = 2
        vilkenMenyÄrIGång = insällingarMeny(vilkenMenyÄrIGång)
        
    elif vilkenMenyÄrIGång == 3:
        
        Meny = 3
        vilkenMenyÄrIGång = yatzy(vilkenMenyÄrIGång)
        
    elif vilkenMenyÄrIGång == 4:
        
        särkerhetsFråga = str(input("Vill du värkligen avsluta spelet? "))
        if  särkerhetsFråga == "ja":    
            if Meny == 1:
            
                print("\n\nDu har avslutat prgramet!")
                speletÄrIRörelse = False
            
            elif Meny == 2:
            
                print("\n\n Du överförs nu till Meny 1!!")
                vilkenMenyÄrIGång = Meny = 1
            
            elif Meny == 3:
                
                print("\n\n Du överförs nu till Meny 1!!")
                vilkenMenyÄrIGång = Meny = 1
        else:
            continue
            
