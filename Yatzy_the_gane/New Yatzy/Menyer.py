
#* Menus:

# Huvud Meny
def Huvud_Meny(Meny):
    print("\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n"
            "Spela Yatzy   (1 / Spela)\n"
            "Inställningar (2 / Inställningar\n"
            "Avsluta       (3 / Avsluta)\n"
          "\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n"
    )   
    Meny_Val_1 = int(input("Vad vill du Göra? "))
    
    if Meny_Val_1 == 1 or Meny_Val_1.lower() == "spela":
        Meny = 3
        return Meny
    elif Meny_Val_1 == 2 or Meny_Val_1.lower() == "Inställningar":
        Meny = 2
        return Meny

    elif Meny_Val_1 == 3 or Meny_Val_1.lower() == "Avsluta":      
        Meny = 4
        return Meny  
    elif Meny_Val_1 <=4: 
        Meny = 1      
        pass    
    

# Inställningar Meny
def Inställningar_Meny(Meny): 
    print("Inställningar Meny")
    pass
# Första Spel Meny
def Spel_Meny(Meny):
    print("Spel Meny")
    pass

# Quit Meny
def Quit_Meny(Meny):
    
    Vill_Du_Värkligen_Göra_Detta = input("\nVill du avsluta programet?\n")
    
    if Vill_Du_Värkligen_Göra_Detta.lower() == "ja" or Vill_Du_Värkligen_Göra_Detta.lower() == "yes": 
        quit()
    else: 
        Meny = 1
        return Meny




#*____________________________________________________________________________________________________________________________________________________________
#* Spel Menyer

def Kasta(Meny):
    pass
