class Pet:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def show(self):
        print (f"I am {self.name} and I am {self.age} years old")
    
    def speek(self):
        print("I don't know what I sat")

class Cat(Pet):
    def __init__(self, name, age, color):
        super().__init__(name, age)
        self.color= color
    
    def speak(self):
        print ("maow")

class Dog(Pet):
    
    def speak(self):
        print ("Bark!")


p = Pet("Tim", 19)
p.show()
c = Cat("Bill", 34)
c.show()