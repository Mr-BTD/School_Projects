import math as m
import random as r

pos_x = []
pos_y = []
avntåndsLista = []
over1Eller0 = 0
antalXOchYVärlden = int(input("Hur många Punkter vill du skapa? "))

    
def AvståndsFormeln(pos_x, pos_y):
    for i in range(antalXOchYVärlden):
        avstånd = 0
        avstånd = m.sqrt((pos_x[i])**2 + (pos_y[i])**2)
        avntåndsLista.append(avstånd)
    return avntåndsLista


def ÄrAvsådndetÖver1(avntåndsLista,over1Eller0):
    # All de som är ej
    for i in range(antalXOchYVärlden):
        if avntåndsLista[i] <= 1:
            over1Eller0 += 1
    return over1Eller0 

def Pi(over1Eller0,antalXOchYVärlden):
    
    pi = (over1Eller0/antalXOchYVärlden) * 4
    return pi    


#* =-=-=-=-=-=-= Main loop =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 
#* 
for i in range(antalXOchYVärlden):
    pos_x.append(r.random())
    pos_y.append(r.random())

avsåtndsLista = AvståndsFormeln(pos_x, pos_y)

over1Eller0 = ÄrAvsådndetÖver1(avsåtndsLista,over1Eller0)

pi = Pi(over1Eller0,antalXOchYVärlden)
    
print(pi)
