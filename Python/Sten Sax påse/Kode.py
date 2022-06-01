
from Menyer import *  

#~ Variablar
vilkenMeny = 1
kodeIsOn = True
meny = "huvudmeny"
              
#* Evighetloopen som kör programet
    
while kodeIsOn == True:
    if vilkenMeny == 1:
        vilkenMeny,meny = HuvudMeny(vilkenMeny,meny)
        
    elif vilkenMeny == 2:
        vilkenMeny,meny = Game(vilkenMeny,meny)
    
    elif vilkenMeny == 3:
        vilkenMeny,meny,kodeIsOn = Quit(vilkenMeny,meny,kodeIsOn)