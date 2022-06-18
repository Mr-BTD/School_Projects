
def MenuLogic(Menu):
    try:
        Menu = str(Menu)

        if Menu.isalpha() == True:
            if Menu.lower() == "one":
                Menu = 1
                return Menu

            elif Menu.lower() == "two":
                Menu = 2
                return Menu

            elif Menu.lower() == "three":
                Menu = 3
                return Menu

            elif Menu.lower() == "four":
                Menu = 4
                return Menu

        elif Menu.isnumeric() == True:
            Menu = int(Menu)
            return Menu
    except ValueError:
        pass


Code = True
while Code == True:
    Userawser = str(input("input a number (1-4): "))

    Userawser = MenuLogic(Userawser)

    print(Userawser)
