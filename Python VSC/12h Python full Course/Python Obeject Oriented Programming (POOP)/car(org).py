
#& Self inom () beskiver att det är classen som gör den i detta fall Car
#& self. Beskiver att det är just den billen som skappas just nu
#& Man behöver ej sätta in något  istället för Self när man kallar en funktion som har self

class Car:
    
    def __init__(self, make, model, year, color): #& Detta är skaparen som skapar alla sorters billar (Cars)
        self.make  = make
        self.model = model
        self.year  = year
        self.color = color

    def drive(self):
        print("This "+self.model+" is driving")
    
    def stop(self):
        print("This "+self.model+" is stopped")
