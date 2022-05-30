from Spelet import *

def startMeny(vilkenMenyÄrIGång):
    
    print(
          "\n___________________________________________"
          "\n1. Starta Spel       (1/Starta spelet)"
          "\n2. Insällingar       (2/Insällingar)"
          "\n3. Avsluta programet (3/Avsluta programmet)"
          "\n____________________________________________"        
         )
    
    vadVillDuGöra1 = input("\nVad vill du göra? ")
    
    if vadVillDuGöra1 == "1" or vadVillDuGöra1.lower() == "starta spelet":
        
        vilkenMenyÄrIGång = 3
    
    elif vadVillDuGöra1 == "2" or vadVillDuGöra1.lower() == "inställingar":
        
        vilkenMenyÄrIGång = 2
    
    elif vadVillDuGöra1 == "3" or vadVillDuGöra1.lower() == "avsluta programmet":
      
        vilkenMenyÄrIGång = 4
    else:
        vilkenMenyÄrIGång = 1
    
    return vilkenMenyÄrIGång
    


def insällingarMeny(vilkenMenyÄrIGång):
    
    pass
    
def yatzy(vilkenMenyÄrIGång):
    
    
    
    pass