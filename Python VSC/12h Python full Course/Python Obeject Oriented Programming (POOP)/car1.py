class Car:
    
    wheels = 4 #& class variable | Det är en variabel som alltid kommer att vara den sak som man anger
               #& Det kommer också att förlja med ovarsätt hur många kopior av en sorts klass man gör  
    
    def __init__(self, make, model, year, color):
        self.make = make    #& instance variable | Detta kommer att vara en variabel som kan ändras då  man måste ange den när mna skapar en kopia 
        self.model = model  #& instance variable | Detta är ALTTID ages inom skappar funktionen (__init__)
        self.year = year    #& instance variable
        self.color = color  #& instance variable
        