from Menu import *
Menu = 1

#* Quit the program = if  Menu = 0
#* Main Menu = if Menu = 1
#* Game Menu = if Menu = 2


Gameplay_on_or_of = input("You want to start this program? (yes/no) ")



while Gameplay_on_or_of == "yes":
    if Menu == 1:
        Menu,Gameplay_menu,Dice_value,Amount_of_dieces = Menu_M(Menu,Gameplay_menu,Dice_value,Amount_of_dieces)
        #* Gör det tillgängligt för spelaren att 
            
       
    elif Menu == 2: 
        Menu = Menu_G(Menu)
        if Gameplay_menu == 1:
            Menu_Cast(Dice_value,Amount_of_dieces)
    
    elif Menu == 3:
        Menu = Menu_M(Menu) 
    
    elif Menu == 0:
    
        Quit = input("Do you want to quit the program? (yes/no) ")
        
        if  Quit != "no":
            quit()
        else:
            Menu = 1

