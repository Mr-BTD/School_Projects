import curses
from curses import wrapper
import time


def main(stdscr):
    # stdscr = standerd output screen // More or less console
    # Makes a pair where the colors for the back and forword ground is availebole, curses.init_pair(ID,curses.COLOR_FORWORD,curses.COLOR_BACKCOLOR)
    curses.init_pair(1, curses.COLOR_BLUE, curses.COLOR_YELLOW)
    curses.init_pair(2, curses.COLOR_GREEN, curses.COLOR_BLACK)
    BLUE_AND_YELLOW = curses.color_pair(1)
    GREEN_AND_BLACK = curses.color_pair(2)

    pad = curses.newpad(100, 100)
    stdscr.refresh()

    for i in range(100):
        for j in range(26):
            char = chr(67 + j)
            pad.addstr(char, GREEN_AND_BLACK)

    for i in range(100):
        stdscr.clear()
        stdscr.refresh()
        # pad.refresh(Row and Colum on what the content of the pad is starting, Row and Colum where we want to display this on the window, row and colum on the bottom right hand coner wher we want to display)
        pad.refresh(i, 0, 0, 0, 20, 20)
        time.sleep(0.2)
    stdscr.getch()
    # getch = Get cheracter // Gives the program the what key the user used


wrapper(main)
