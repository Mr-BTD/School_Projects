
from räknesätt import *

def What_menu(What_menu):
    if What_menu == 1:
        What_menu = Calulater(What_menu)
        
    elif What_menu == 2:
        pass
    
    elif What_menu == 3:
        What_menu = Normal_Calulater(What_menu)
    
    elif What_menu == 4:
        pass
        
    

def Calulater(What_menu):
    pass
    print ("\n============== Menu ==============\n"
           "1: Geobra\n"
           "2: Power/Squre rute of\n"
           "3: Normal\n"
           "4: Exit\n"
           "===================================\n")
    Option = int(input("What option do u want to use? "))
    
    if Option == 1 or Option.lower() == "geobra":
        What_menu = 2
        return What_menu
    
    elif Option == 2 or Option.lower() == "power/squre rute of":
        What_menu = 3
        return What_menu
    
    elif Option == 3 or Option.lower() == "normal":
        What_menu = 4
        return What_menu
    
    elif Option == 4 or Option.lower() == "exit":
        What_menu = 5
        return What_menu    
    pass
    
    
def Normal_Calulater():
    A = int(input("\nInput ur first number: "))
    B = int(input("Input ur second number: \n"))

    print ("\n============== Menu ==============\n"
           "1: +\n"
           "2: -\n"
           "3: *\n"
           "4: /\n"
           "5: Exit/E\n"
           "===================================\n")
    Ip = input("Choice what you want to do, 1 (addistion), 2 (subtrastion), 3 (multipliktation), 4 (division), 5 (Exit/E): \n")
    print 
    if Ip == "1" or Ip == "+":
        Add(A,B)
        
    elif Ip == "2" or Ip == "-":
        Sub(A,B)
        
    
    elif Ip == "3" or Ip == "*" or Ip == "x" or Ip == "X":
        Multi(A,B)
        
    
    elif Ip == "4" or Ip == "/":
        Div(A,B)
        
    
    elif Ip == "5" or Ip == "Exit" or Ip == "E" or Ip == "e":
        What_menu = 2
        return What_menu
    
    
def Geobra():
    pass

def Power_and_Squre_roots():
    pass

def Räknemeny(On_Of,What_menua):
    
    if On_Of == 1:
        On_Of = What_menu(What_menua)
    
    elif On_Of == 2:
        On_Of = None
        return On_Of
    