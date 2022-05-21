import curses 
from curses import wrapper

def main(stdscr):
    stdscr.clear()
    stdscr.reverse()
    stdscr.getch()
    
    
wrapper(main)
    