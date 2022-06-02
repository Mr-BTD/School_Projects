import random as Slump


def HuvudMeny(vilkenMeny,meny):
    meny = "HuvudMeny"
    print(
        "\n__________________________________"
        "\n 1.Spela splet    (Spela splet/1)"
        "\n 2. Avsluta       (Avsluta  /2)"
        "\n___________________________________"
    )
    
    valAvMeny = str(input("Vad vill du göra? "))
    
    if valAvMeny == "1" or valAvMeny.lower() == "game":
        vilkenMeny = 2
        meny = "spelet"
        return vilkenMeny, meny
    
    elif valAvMeny == "2" or valAvMeny.lower() == "avsluta":
        vilkenMeny = 3
        meny = "huvudmeny"
        return vilkenMeny, meny         
    
#* Detta är Spel menyn 
def Game(vilkenMeny,meny):
    options = ['Påse','Sax','Sten']
    livCounter =  3
    scoreDator = 0
    scoreaAnvädaren = 0
    spelarensVal = ""
    turns = 0
    while livCounter > 0 and vilkenMeny == 2:
        dator = options[Slump.randint(0,2)]
        print(
                "\n\n_____________________________"
                f"\nLiv: {livCounter} "           
                "\n\n_____________________________"
                "\n1. Påse         (Påse/    1) "           
                "\n2. Sax          (Sax /    2) "
                "\n3. Sten         (Sten/    3) "
                "\n4. Avsluta      (Avsluta/ 4) "
                "\n_____________________________\n\n"
            )
        val = str(input("Vad vill du göra? "))
        
        if val == "1" or val.lower() == "påse":
            spelarensVal = "Påse"  
        
        elif val == "2" or val.lower() == "sax":
            spelarensVal = "Sax"  
        
        elif val == "3" or val.lower() == "sten":
            spelarensVal = "Sten"
        
        elif val == "4" or val.lower() == "Avlsuta":
            vilkenMeny = 3
            meny = "Spelet"
            print(dator)
            break        
        else:
            continue
        
        if dator.lower() == "sax":
            if spelarensVal.lower() == "sten":
                scoreaAnvädaren += 1
                print(f"Du Vann och fick ett poäng! Då du tog {spelarensVal} och datorn tog {dator}"
                      f"\n Dinna poäng är: {scoreaAnvädaren}"
                      )
                turns += 1
            
            elif spelarensVal.lower() == "påse":
                scoreDator += 1
                print(
                    f"\n\nDu förlorade och förlorade ett liv, du har {livCounter-1} kvar! Då du tog {spelarensVal} och datorn tog {dator}\nDinna poäng är {scoreaAnvädaren}\n\n"
                    )
                livCounter -= 1
                turns += 1
            
        elif dator.lower() == "sten":
            if spelarensVal.lower() == "påse":
                scoreaAnvädaren += 1
                print(
                    f"\nDu Vann och fick ett poäng! Då du tog {spelarensVal} och datorn tog {dator}\n\n"
                    f"\n Dinna poäng är: {scoreaAnvädaren}\n\n"
                      )
                turns += 1
            
            elif spelarensVal.lower() == "sax":
                scoreDator += 1
                print(
                     f"\n\nDu förlorade och förlorade ett liv, du har {livCounter-1} kvar! Då du tog {spelarensVal} och datorn tog {dator}\nDinna poäng är {scoreaAnvädaren}\n\n"
                     )
                livCounter -= 1
                turns += 1
                           
        elif dator.lower() == "påse":
            if spelarensVal.lower() == "sax":
                scoreaAnvädaren += 1
                print(f"\n\nDu Vann och fick ett poäng! Då du tog {spelarensVal} och datorn tog {dator}"
                      f"\nDinna poäng är: {scoreaAnvädaren}\n\n"
                      )  
                turns += 1
            
            elif spelarensVal.lower() == "sten":
                scoreDator += 1
                print(f"\n\nDu förlorade och förlorade ett liv, du har {livCounter-1} kvar! Då du tog {spelarensVal} och datorn tog {dator}\nDinna poäng är {scoreaAnvädaren}\n\n"
                      )
                livCounter -= 1
                turns += 1
        
        elif dator == spelarensVal:
            print(f"\nDet blev lika då du tog {spelarensVal} och datorn tog {dator}\n\n")
            turns += 1
            
    if livCounter <= 0:
        print(f"Du överlevde {turns} och du fick {scoreaAnvädaren} vinster! Och datorn fick {scoreDator} poäng")
        vilkenMeny = 1
        meny = "huvudmeny"
        return vilkenMeny, meny 
    
    return vilkenMeny, meny 
    

#* Detta är den funktionen som gör det möljigt att gå bakot emellan menyerna och att avsluta 

def Quit(vilkenMeny,meny,kodeIsOn):
    säkerhetsFråga = str(input("\nVill du värlkigen? (Ja/Nej) ")) # SäkerhetsFråga är till för att säkra att avändaren vill
    if säkerhetsFråga.lower() == "ja":
        if meny.lower() == "huvudmeny":
            vilkenMeny = 1  
            meny = "hvudmeny"
            kodeIsOn = False
            return vilkenMeny, meny, kodeIsOn
            
        
        elif meny.lower() == "spelet":
            vilkenMeny = 1  
            meny = "hvudmeny"
            kodeIsOn = True
            return vilkenMeny, meny,kodeIsOn
    else:
        if meny.lower() == "huvudmeny":
            vilkenMeny = 1
            meny = "huvudmney"                  
            kodeIsOn = True  
            return vilkenMeny,meny,kodeIsOn

        elif meny.lower() == "spelet":
            vilkenMeny = 2
            meny = "spelet"
            kodeIsOn = True
            return vilkenMeny, meny,kodeIsOn
            
            
            