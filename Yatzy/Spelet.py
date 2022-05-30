import random as rand
from typing import ParamSpec

def spel():
    tärningar = 5
    spelareDict = antalSpelerMänEllerDator()
    spelÄrIgång = True
    världeLista = []
    while spelÄrIgång == True:
        kastaOm = SparaEllerInte(tärningar)
        världeLista = OmKasting(kastaOm,världeLista)
        pass




def SparaEllerInte (tärningar):
    
    vilkaVillDuSpara = input("Vilka vill du spara? (ex:1,2,3) ")
    
    kastaOm = vilkaVillDuSpara.split
    
    return kastaOm
    
def Kasta (tärningar,världeLista):
    
    for i in range(tärningar):
    
        världeLista.append(rand.randint(1,6))
    
    return världeLista

def OmKasting (kastaOm,världeLista):
    
    for i in range(len(kastaOm)):
    
        världeLista.insert(kastaOm[0],rand.randint(1,6))
        
    return världeLista

    
    

def antalSpelerMänEllerDator():
    while True:
        spelareDict = {1:"Människa"}

        #Man besämmer hur många splare man är 

        try:
            antalSpelare = input(                    
                                "\n Hur många spelare spelar (splare 1 är alltid en människa)? (2-10) "
                                )
            
            if int(antalSpelare) > 1 and int(antalSpelare) < 11:
                antalSpelare = int(antalSpelare)
            else:
                continue
            
        except TypeError:
            continue
        
        except ValueError:
            continue
        
        # Säger vilka spelare som är en datorer och vilka som är människor
        
        for spelareIdx in range(antalSpelare-1):
            
            while True:
                svar = input(
                            f"\n\nÄr spelare {spelareIdx+2} en männiksa eller Dator? (m/människa/1, d/dator/2) "
                            )
                if svar.lower() == "m" or svar.lower() == "männiksa" or svar == "1" or svar.lower() == "d" or svar.lower() == "dator" or svar == "2":
                    spelareDict.update({f"Spelare {spelareIdx+2}":f"{svar}"}) 
                    break 
                    # Spelare:
                        # Dator = d/dator/2
                        # Männiksa = m/människa/1 
                        # Alla dessa sparas som strängar
                else:
                    continue
                
        return spelareDict
        
    
    
        
    
    
    
    
    
    
          
    
                
                