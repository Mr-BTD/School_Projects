import random as r 

alfabetet = {1:'a', 2:'b', 3:'c', 4:'d',
                  5:'e', 6:'f', 7:'g', 8:'h',
                  9:'i', 10:'j', 11:'k', 12:'l',
                  13:'m',14:'n',15:'o',16:'p',
                  17:'q',18:'r',19:'s',20:'t',
                  21:'u',22:'v',23:'w',24:'x',
                  25:'y',26:'z',27: ' ',} 

Bokstavs_listan = []
Ord_listan = []

def Skapa_ord(hur_stort_ord,vilket_ord_vill_du_ha,alfabetet, Ord_listan):
    klart = False
    ord = ""
    hur_många_gånger = 0
    while not klart:
        ord = ""
        hur_många_gånger += 1
        for i in range(0,hur_stort_ord): 
            random_number = r.randint(1,27)
            
            ord = ord + alfabetet[random_number]
        
        # print(ord)    
        if ord == vilket_ord_vill_du_ha.lower():
        
            klart = True
            print(hur_många_gånger)
            for i in len(Ord_listan):
                print(Ord_listan[i])
            break 
        
        else:
        
            klart = False
            Ord_listan.append(ord)
            continue


vilket_ord_vill_du_ha = input("Hur ord vill du ha? ")
hur_stort_ord = int(len(vilket_ord_vill_du_ha))

Skapa_ord(hur_stort_ord,vilket_ord_vill_du_ha,alfabetet, Ord_listan)