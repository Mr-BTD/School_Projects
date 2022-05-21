#*Object Orientated Programering i Python Exampel 1

class Dog:

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def get_name(self):
        return self.name
    
    def get_age(self):
        return self.age

    def set_age(self, age):
        self.age = age

    def add_one(self, x):
        return x + 1 

    def bark(self):
        print("Bark!")


d = Dog("Hej", 34)
print(d.name, d.age )


