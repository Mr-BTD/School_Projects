import random as rand

def Spel():
    spelareDict = {} 
    spelareDict = antalSpelerMänniskorEllerDatorer(spelareDict) #* Ett diriktiv om vilka splare som är en dator eller människa 
    tärningar = 5 #* Det är antalet tärningar som är med i spelet
    spelÄrIgång = True #* Detta är variabeln som säger om spelet är igång eller inte 
    världeLista = [] #* en lisa på alla världen på tärningarna 
    
    
    while spelÄrIgång == True:
        
        print(
            "\n\n______________________________________\n"
            "\n 1. Kasta tärningar"
            "\n 2. Poäng tavla "
            ""
            "_____________________________________\n\n"
        )
        
        världeLista = Kasta(tärningar,världeLista)

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

    
    

def antalSpelerMänniskorEllerDatorer(spelareDict):
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
        
    
    
        
    
    
    
    
    
    
          
    
                
                