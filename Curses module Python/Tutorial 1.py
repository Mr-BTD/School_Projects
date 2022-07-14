import curses
from curses import wrapper


def main(stdscr):  # stdscr = standerd output screen // More or less console
    stdscr.clear()
    # Three argument: (Row, Colum, "Text", Attributes 1 | Attribute 2)
    stdscr.addstr(10, 10, "Hello World")
    stdscr.addstr(15, 25, "My code is grate")
    # addstr = the way to  print text in a curses canvains/program

    stdscr.refresh()
    stdscr.getch()  # getch = Get cheracter // Gives the program the what key the user used


wrapper(main)
