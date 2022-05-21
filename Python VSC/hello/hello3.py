import random

#* variablar 
user_wins = 0 
computer_wins = 0
games_draw = 0

#* list 
options = ["rock", "paper", "scissors"]

#* huvud loop
while True:
    user_input = input("Type Rock/Paper/Scissors or Q to quit: ").lower()

    if user_input == "q":
        break
    
    if user_input not in options: 
        continue

    random_number = random.randint(0,2)
    #* rock: 0, paper: 1, scissors: 2
    computer_pick = options[random_number]
    print ("Computer picked", computer_pick + ".")
    
    if user_input == "rock" and computer_pick == "scissors":
        print("You won!")
        user_wins += 1
        
    elif user_input == "paper" and computer_pick == "rock":
        print("You won!")
        user_wins += 1
    
    elif user_input == "sicssors" and computer_pick == "paper":
        print("You won!")
        user_wins += 1
    
    elif user_input == computer_pick:
        print("You draw")
        games_draw += 1

    else:
        print("You lost!")
        computer_wins += 1

#*resultat av loop
print("You won", user_wins, "times and draw", games_draw ,"times")
print("The computer won", computer_wins," times and draw", games_draw,"times.")
print ("Goodbye!") 