
import os as operativSystem
import random as Slump
import emoji as EM
from time import sleep


Difficulty = "Easy"


def PlayAgain():
    passa


def Game(Difficulty):  # * Första menyn för Spelet
    GameIsRunning = True
    Points = 0
    match Difficulty:
        case "Easy":
            Life = 5
            Range = 100

        case "Medium":
            Life = 5
            Range = 500

        case "Hard":
            Life = 1
            Range = 1000

    ComputerGuess = Slump.randint(1, Range)
    Turn = 0
    TrueTurn = 0

    while GameIsRunning:

        if Life > 0:
            if Turn == 5:
                Life -= 1
                print(f"You have {Life} Left")
                Turn = 0
            try:
                UserGuess = int(
                    input(f"What number I'm I thinking about between 1-{Range}? "))
            except ValueError:
                continue

            if ComputerGuess == UserGuess:
                Points += 1
                print(f"YOU WON, THE RIGHT AWNSER WAS {ComputerGuess}")

                PlayAgain = str(input("Do you want to play again? ")).lower()

                match PlayAgain:
                    case "yes":
                        return Game(Difficulty)
                    case "no":
                        return
                    case __:
                        return

            elif ComputerGuess > UserGuess:
                print("You got it to low")
                Turn += 1
                TrueTurn += 1
                continue

            elif ComputerGuess < UserGuess:
                print("You got it to high")
                Turn += 1
                TrueTurn += 1
                continue
        else:
            print("You lost")
            PlayAgain = str(input("Do you want to play again? ")).lower()

            match PlayAgain:
                case "yes":
                    return Game(Difficulty)
                case "no":
                    return
                case __:
                    return


Game(Difficulty)
