import curses
from curses import wrapper
import time
# list of some things:

# List of all the colors:
# ? 1.  curses.COLOR_BLACK   = Black
# ? 2.  curses.COLOR_BLUE    = Blue
# ? 3.  curses.COLOR_CYAN    = Cyan (light greenish blue)
# ? 4.  curses.COLOR_GREEN   = Green
# ? 5.  curses.COLOR_MAGENTA = Magenta (purplish red)
# ? 6.  curses.COLOR_RED     = Red
# ? 7.  curses.COLOR_WHITE   = White
# ? 8.  curses.COLOR_Yellow  = Yellow

# List of Attributes: (some work and some don't, it differds of the oprativsystem)
# ? 1. curses.A_ALTCHARSET  = Alternate character set mode
# ? 2. curses.A_BLINK       = Blink mode
# ? 3. curses.A_BOLD        = Bold Mode
# ? 4. curses.A_DIM         = Dim mode
# ? 5. curses.A_INVIS       = Invisible or bland mode
# ? 6. curses.A_ITALIC      = Italic mode
# ? 7. curses.A_NORMAL      = Normal mode
# ? 8. curses.A_PROTECT     = Portected mode
# ? 9. curses.A_REVERSE     = Reverse background and foreground colors
# ? 10. curses.A_STANDOUT   = Standout mode
# ? 11. curses.A_UNDERLINE  = Underline mode
# ? 12. curses.A_HORIZONTAL = Horizontal highlight
# ? 13. curses.A_LEFT       = Left highlight
# ? 14. curses.A_LOW        = Low highlight
# ? 15. curses.A_RIGHT      = Right highlight
# ? 16. curses.A_TOP        = Top highlight
# ? 17. curses.A_VERTICAL   = Vertical highlight
# ? 18. curses.A_CHARTEXT   = Bit-mask to extract a character


def main(stdscr):  # stdscr = standerd output screen // More or less console
    # Makes a pair where the colors for the back and forword ground is availebole, curses.init_pair(ID,curses.COLOR_FORWORD,curses.COLOR_BACKCOLOR)
    curses.init_pair(1, curses.COLOR_BLUE, curses.COLOR_YELLOW)
    curses.init_pair(2, curses.COLOR_GREEN, curses.COLOR_BLACK)
    BLUE_AND_YELLOW = curses.color_pair(1)
    GREEN_AND_BLACK = curses.color_pair(2)

    for i in range(100):
        stdscr.clear()
        color = BLUE_AND_YELLOW

        if i % 2 == 0:
            color = GREEN_AND_BLACK

        stdscr.addstr(f"Count: {i}", color)
        stdscr.refresh()
        time.sleep(0.1)
    stdscr.getch()
    # getch = Get cheracter // Gives the program the what key the user used


wrapper(main)
