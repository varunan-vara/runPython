import sys

# Some code
print("Starting process...")

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def printStatus(self):
        print("Hi, I am {}, aged {}".format(name, age))

george = Person("George", 24)
george.printStatus()