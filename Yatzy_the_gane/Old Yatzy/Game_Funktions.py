import random as r
 

def Menu_Rules():
    pass

def Cast(Dice_value,Amount_of_dieces):

    amount_of_dieces = Amount_of_dieces
    while amount_of_dieces < 0:                            #? The index (Amount_of_dices) 
        Dice_value.insert(amount_of_dieces, r.randint(1,6))
        amount_of_dieces -= 1


def Point_check():
    pass

def Show_dice():
    for index, Dice_value in enumerate(Dice_value):
        print(f"Your value of the dice is {index+1} is {Dice_value[index]}")

def Keep_or_not(): #? Cast the dieces agian you do not want to keep (this can only do 2 time per rund/person)
    pass

def Cast_dice():
    pass

