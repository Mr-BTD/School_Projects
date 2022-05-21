
#~ Bibioloteken
import matplotlib.pyplot as plt #& Grafräknaren

#^Variablar
Start_or_Stop = str(input ("Vill du starta programet?  (JA/NEJ)\n"))
första_numberlista = []

#? Funktioner

def utrekning(x):
    
    if x % 2 == 0: #& Dividerar med 2 om det är jämt 
        x = x/2
    elif x % 1 == 0: #& Gångrara med 3 och plus 1 om det är udda
        x = 3*x+1
    return x


# Program

while Start_or_Stop.lower() == "ja":
        
    x = int(input("Vad är ditt första tall?  \n"))
    
    if x != 0:
# Gör så att det går till lopen tills det tall som du har är i en lop        
        while x != 1:
            x = utrekning(x)
            print(int(x))
            print(int(str(x)[0]))
            första_numberlista.append(int(str(x)[0]))
            
        första_numberlista.sort()
        
# Grafern:        
        plt.hist(första_numberlista, bins=9)
        plt.show()
        
        z = input("\nVill du fortsätta programet (FP) eller vill du avsluta programet(AP) ")
    
        if z.upper() == "AP":
            Start_or_Stop = "nej"
        elif z.upper() == "FP":
            continue
        
# Om man har tryckt fel:

if Start_or_Stop.lower() == "nej":
    y = input("\nSkrev du fel? \n")
    if y.lower() != "ja":
        quit()
    else:
         Start_or_Stop = str(input ("Vill du starta om programet? (JA/Nej)\n"))
    


    
    
    