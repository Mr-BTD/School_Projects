
#^ = varibler
#? = Exempel
# = Print och resten
#& = Förklaring
#~ = Bibolotek och funktioner
#! = if/else/elif och Condistion


#*_________________________________________________________________________________________________________________
#* Multiple assignment
#*_________________________________________________________________________________________________________________

#? Exempel 1

#^ name = 'bro'
#^ age =  21
#^ attractive = True


#^ name, age, attractive = 'bro', 21,True

# print (name)
# print (age)
# print (attractive)

#? Exempel 2

#^ Spongebob = 30
#^ Patrick = 30
#^ Sandy = 30
#^ Squidward = 30


#^ Spongebob = Patrick = Squidward = Sandy = 30

# print (Spongebob)
# print (Patrick)
# print (Sandy)
# print (Squidward)


#*_________________________________________________________________________________________________________________
#* String methods 

#^ name = 'Bro Code'

# print(len(name)) #& Hur lång name variabeln är 

# print(name.find("B")) #& Hittar inom Name variabeln vart en specific bokstav är. Startar fårn 0 och framot

# print (name.upper()) #& Gör så att hela namnet är bara stora bokstäver

# print(name.lower()) #& Gör så att hela namnet är bara små bokstäver

# print(name.capitalize()) #& Gör så att bara första bokstaven är stor

# print(name.isdigit()) #& Kommer tillbacka som Sant eller Falskt då det kollar om det finns någon sifra inom variabeln

# print(name.isalpha()) #& Finns det bara Bokstäver som finns i alfabetet

# print(name.count("o")) #& Räknar hur många av bokstäver en specific bokstav det finns.

# print(name.replace("o", "a"))
    #& Byter ut en specific bokstav inom en string variebel där
    #& Första argmentet ("o") är vilken du bokstav du byter ut
    #& Andra argmentet ("a") är vilken bokstav du byter ut med

# print(name*3) #& Vissar en string variebel ett specifik antal gånger

    
#*_________________________________________________________________________________________________________________

#* Type Casting (conventera)

#^ x = 1 
     #& int (hela tal)
#^ y = 2.0
     #& float (decimaler)
#^ z = "3"
     #& String ("")

# Conventera till string

#^ x = str(x)
#^ y = str(y)
#^ z = str(z)

# print(x)
# print(y)
# print(z*3)


#*_________________________________________________________________________________________________________________
#* User input


#& Användningen av input() ger programeriarenen tillgång till användare input 


    #^ name = input("What is your name?: ")
    #^ age = int(input("How old are you?: "))
    #^ height = float(input("How tall are you?: "))

    # print("Hello "+name+"\n")
    # print("You are "+str(age)+" years old\n")
    # print("You are "+str(height)+" cm tall\n")


#*_________________________________________________________________________________________________________________
#* Math funktioner


#~import math as m

#^ pi = 3.14
#^ x = 1
#^ y = 2
#^ z = 3

# print(round(pi)) #& Avrundar upp och ner en tal/int och float variabel 

# print(m.ceil(pi)) #& Avrunadar upp ett tal/int och float variabel 

# print(m.floor(pi)) #& Avrundar ner ett tal/int och float variabel

# print(abs(pi*-1)) #& Berättar hur långt ett tal/int och float variabel är ifrån 0

# print(pow(pi,2))
     #& Pow = potens då:
     #& Första argumentet är bassen
     #& Andra argumentet är exponeten 

# print(m.sqrt(pi)) #& Kavadrat roten (kan ej ha negativa tal)

# print(max(x,y,z)) #& Hitta den högsta värdet mellan tvår eller flera tal/int och float variabel

# print(min(x,y,z)) #& Hitta den minsta värdet mellan tvår eller flera tal/int och float variabel


#*_________________________________________________________________________________________________________________

#* String Slicing =  Create a substring by extracting elements from another string
#*                   indexing[] or slice()
#*                   [start:stop:step] or [start,stop,step]
 
#*                   Python antar alltid att om man har [] att om  det är ingeting mellan en 
#*                   braked ([/]) och colon (:) att det är  nol

#TODO____________________________________________________________________________________________________
#* Indexing 

#^ name = "Bro Code"

#^ first_name = name[:3] 
     #& [startar vid alltid vid 0 : slutar vid bokstaven tre] till en variabel first_name 
# print (first_name) 

#^ last_name = name[4:]
     #& [betyder att allt som startar vid index 4 och allting som går efter] till en variabel last_name 
# print (last_name)

#^ funky_name = name[0:8:2]
     #& Sista sifran vistar hur många bokstäver framot den går efter den första sifran 
     #? Exempel: 
     #?
     #?         Om vi har ett namen som heter Samuel, Om vi då har en Step på 2 så  tar den 
     #?         [S m e] då den tar varanat
     #?
# print(funky_name)
 
#^ reverse_name = name[::-1]
     #& Gör en bakvänt string
# print(reverse_name)

#TODO____________________________________________________________________________________________________
#* Slicing

#^ website1 = "http://google.com"
#^ website2 = "http://wekipedia.com"

#! slice = slice(7,-4)

# print(website1[slice])
# print(website2[slice])


#*_________________________________________________________________________________________________________________
#* if statement = a block of code that will execute if it's condition is true
#*_________________________________________________________________________________________________________________

#^ age = int(input("How old are you?: "))

#! if age == 100:
#     print("You are a centry years old!")
#! elif age >= 18:
#     print("You are a adult!")
#! elif age > 0:
#     print("You haven't been born yet!")
#! else:
#     print("You are a child!")


#*_________________________________________________________________________________________________________________
#* Logical operation (and, or, not) = used to check if two or more condition stastments are true


#^ temp = int(input("What temperature is it outside?: "))

#! if temp >=0 and temp <=30:
#     print("The temperature is Good today\n"
#           "GO outside!"
#     )
#! elif temp < 0 and temp > 30:
#     print("The temperature is Bad today\n"
#           "STAY inside!"
#     )
#! elif not(temp < 0 and temp > 30):
#     print("The temperature is Good today\n"
#           "GO outside!"
#     )


#*_________________________________________________________________________________________________________________
#* While loop = a statmanet that will execute it's block of code, as long as it's condition remains true


#? Exempel 1: infinity loop

#! while 1==1:
#    print("Help! I'm stuck in a loop!")

#? Exempel 2.1:

#^ name = ""

#! while len(name) == 0:
#!     name = str(input("Enter in your name: "))

# print("Hello "+name)

#? Exempel 2.2:

#^ name = None

#! while not name:
#!     name = input("Enter your name: ")
        
# print("Hello "+name)


#*_________________________________________________________________________________________________________________
#* For loop = a statement that will execute it's block of code a limited amount of times

#*            while loop = unlimited
#*            for loop = limited (i(en variabel som man räknar i)), 
#*            range(x) där x är hur många gånger man ska räkna i, x kan vara tre argrument då 
#*            Första argumetet är vilket tall man ska räka ifrån
#*            Andra argument är där man slutar
#*            Tredeje argumenet är hur mycket man ska räkna med 

#? Exempel 1

#! for i in range(10):
#     print (i+1)

#? Exempel 2

#! for i in range(50,100+1):
#    print(i)

#? Exempel 3

#! for i in range(50,100+1,2):
#    print(i)

#? Exempel 4

#! for i in "Bro Code":
#    print(i)

#? Exempel 5

#~ import time as t

#! for seconds in range(10,0,-1):
#     print(seconds)
#~   t.sleep(1)
# print("Happy New Year!")


#*_________________________________________________________________________________________________________________
#* Nested loops = The "inner loop" will finish all of it's iterations 
#*                before finishing one iteration of the "outer loops"


#^ rows = int(input("How meny rows?: "))
#^ colums = int(input("How meny colums?: "))
#^ symbol = input("Enter a symbol to use: ")

#! for i in range(rows):
#!     for j in range(colums):
#         print(symbol,end="")
#     print()


#*_________________________________________________________________________________________________________________
#* Loop control Statements =  Change a loops execution from it's normal sequential


# Break #& Used to terminate the loop entirely

# Continue #& Skips to the next intteration of the loop 

# Pass #& Does nothing acts as a placeholder 

#? Exempel 1 (Break)

#! while True:
     #^name = input("Enter your name: ")
     #!if name != "":
         #!break
    
#? Exempel 2 (Continue)

#^ phone_number = "123-456-7890"

#! for i in phone_number:
     #!if i == "-":
         #!continue
    # print(i, end="")

#? Exempel 2 (Pass)


#! for i in range(1,21):
    
    #! if i == 13:
        #! pass
    #! else:
        # print(i)
        
        
#*_________________________________________________________________________________________________________________
#* List = Used to store multiple items in a single variabel——
#*_________________________________________________________________________________________________________________


#^ food = ["pizza","hamburgers","hotdogs","spaghetti", "pudding"]
#            0        1           2           3           4       ....

# food[0] = "sushi" #& Du ändra vilken eliment i listan [index]

# print(food[0]) #& Inom [] så skriver du vilken index i listan du vill ta fram

# food.append("ice cream") #& lägg till en  eliment i listan

# food.remove("hotdogs") #& tar bort en spcifik eliment, du veljer vilken inom ()

# food.pop() #& tar bort den sista elimenet

# food.insert(0,"cake") #& skriv över/lägg till en specific eliment på en spcifik index

# food.sort() #& Sorterar en lista i alfabetsårdning

# food.clear() #& Tar bort allt i en lista 


#! for x in food:
     #print(x)
    
    
#*_________________________________________________________________________________________________________________
#* 2D listing = a list of lists


#^ drinks = ["coffe","soda","tea"]
#^ dinner = ["pizza","hamburger", "hotdogs"]
#^ desert = ["cake","ice cream"]

#^ food = [drinks,dinner,desert]

# print(food) #& vill du ha hela listan

# print(food[0]) #& vill du ha en av listerna

# print(food[0][0]) #& vill du ha en spcifik sak inom en spcific lista 
 
    
#*_________________________________________________________________________________________________________________
#* tuple = Samma sak som en lista förutom att det går ej att ändra eller sortera 


#^ student = ("Bro",21,"male")
     #& Du gör en tuple genom att göra ett par () efter = 

# print(student.count("Bro")) #& Vissar hur många gånger en sak  vissar sig inom denna listan
# print(student.index("male")) #& Hittar vilket index en specific sak har 

#? Exempel:

#! for x in student:
    # print(x)
    
#! if "Bro" in student:
    # print("Bro is here")


#*_________________________________________________________________________________________________________________
#* sett = Collection which is unordered, unindexed. Inga dubleserade värden


#^ utenseils = {"fork","spoon", "knife"} 
    #& SKappar ett sett lista med att alla värden ska vara inom {}

#^ dishes = {"bowl","plate","cup","knife"}

# utenseils.add("napkin") #& Lägg till ett element i ett sett

# utenseils.remove("fork")#& Tar bort ett element i ett sett

# utenseils.clear() #& Tar bort alla eliment i settet

# utenseils.update(dishes) #& Lägger till de eliment som sett inom () till det Sett som blir uppdaterad 

# dinner_tabel  = utenseils.union(dishes) #& -11- Men gör det till en ny sett

# print(utenseils.difference(dishes))#& Vissar vad som är skillnaden mellan sett 1 (utensils) och 
                                                                    #&    sett 2 (dishes)

# print(utenseils.intersection(dishes))#& Vissar vad som är lika mellan sett 1 (utensils) 
                                                            #&    och sett 2 (dishes)

#! for x in utenseils:
    # print(x)
    
    
#*_________________________________________________________________________________________________________________
#* Dictionary =  A changeble, unordered collection of unique key:value pairs.
#*               Fast becuase they use hashing, alow us to access a value quickly


#^ capitals = {'USA':'Washington DC',
#^             'India':'New Dehli',
#^             'China':'Beijing',
#^             'Russia':'Moscow'}

# capitals.update({'Germany':'Berlin'}) #& lägg till en ny par inom katalogen 
                                        #& eller skriva över en nuvarande par inom katalogen genom
                                        #& update({vilken som ska ändra:vad som kan sättas in nytt})
 
# capitals.pop('China') #& Tar bort en spcifik par

# capitals.clear() #& Tar bort allt 

# print(capitals['Russia']) #& Vissar världet för ryssland som Nyckel 
                            #& (Om nyckeln inte finns så blir det ett error)

# print(capitals.get('Germany')) #& Vissar om det finns någon par med Tyskland som Nyckel 
                                 #& (kan vara vad som helst)
 
# print(capitals.keys()) #& Vissar vilka nycklar det finns

# print(capitals.values()) #& Vissar vilka världen det finns

# print(capitals.items()) #& Vissar vilka världen och nyckel par det finns
 
#! for key,value in capitals.items():
    # print(key,value)
    
    
#*_________________________________________________________________________________________________________________
#* index operator [] =  gives access to a sequence's element (str,list,tuples)


#^ name = "Bro Code!"

#? Exempel 1
#! if(name[0].islower()):
             #& I detta exemplet kollar vi då om  index 0 bokstaven är en liten bokstav
    
    #^ name = name.capitalize()
             #& Om det är sant så sätter vi den första bokstaven stor

#? Exempel 2

#^ first_name = name[:3].upper()
# print(first_name)
             #& I detta exemplet har vi en räkvid av bostav 0 till 3  delen av namnet till stora bokstäver

            
#^ last_name = name[4:].lower()
             #& I detta exemplet har vi en räkvid av bostav 4 till när det slutar delen av namnet och 
             #& gör bokstäverna små


#^ last_character = name[-1]
             #& Detta är ett exempel är man använder ett index av -1 
             #& för att komma ihop till det sista karaktären

# print(first_name)
# print(last_character)
# print(last_name)
# print(name)


#*_________________________________________________________________________________________________________________
#*Function = a blck of code which is executed only when it is called
#*_________________________________________________________________________________________________________________


#~ def hello(first_name, last_name, age): 
     #& Måste  ha lika många argument där funktionen är kallad som där den är skappad inom ()
    
     #print("Hello "+first_name+" "+last_name)
     #print(" You are "+str(age)+ "years old")
     #print("Have a nice day!")

#^ first_name = "Bro"

# hello(first_name,"Code",21)


#*_________________________________________________________________________________________________________________
#* Return Statement = Functions send Python values/objects back to the caller
#*                    These values/objects are know as the function's return value


#~ def multiple(number1,number2):
    # return number1 * number2

# print(multiple(6,8)) #& Vissar vad 6 och 8 är i funktionen Multiple

#^ x = multiple(6,8)
# print(x) #& Visar funktionen Multiple (som multipliserar 6*8 med vadrandra) genom en variabel 


#*_________________________________________________________________________________________________________________
#* keyword arguments = arguments prexeded by an identifier when we pass thme to a function
#*                     The order of the arguments doesn't matter, unlike positional arguments
#*                     Python knows the name of the agruments that our function receives

#? Exempel (Positional arguments)

#~ def hello (first,midle,last):
    # print("hello "+first+" "+midle+" "+last)

# hello("Bro","Dude","Code") #& Kommer att printa ut "Hello Bro Dude Code"
# hello("Code","Dude","Bro") #& Kommer att printa ut "Hello Code Dude Bro"

#? Exempel 2 (Keyword argyments)

#~ def hello (first,middle,last):
    # print("hello "+first+" "+middle+" "+last)

# hello(first="Bro",middle="Dude",last="DudeCode") 
#& kommer att printa ut "Hello Bro Dude Code" Oavstett vilken årdning du ställer om namnen


#*_________________________________________________________________________________________________________________
#* Nested functions callls = function callls inside other function calls 
#*                           inner most function calls are resolved first
#*                           returned value is used as argument fo the next outer function

# num = input("Enter a whole positive number: ")
# num = float(num)
# num = abs(num)
# num = round(num)
# print(num)

# print(round(abs(float(input("Enter a positive number: ")))))


#*_________________________________________________________________________________________________________________
#* Scope = The region that a variabel is recognized
#*         a avariable is only available form inside a region it is crered
#*         A global and locally scoped versions of a variabel can be created

#^ name = "Bro"            
              #& Global scope (available inside & outside functions)

#~ def display_name(name):
#^     name = "Code"
                    #& local scope (available only inside this function)
#      print(name)

#display_name()
#print(name)

#& L E G B Regeln = det är en årdning som python går i när det gäller variablar med samma namn, Den går så här:
#& LOCAL = L, Enclosing = E, Global = G, Built-in = B.


#*_________________________________________________________________________________________________________________
#* *Args = Parameter that will pack all arguments into a tuple 
#*        useful so that a function can accept varying amount of arguments


#~ def add(*stuff):
#^     sum = 0
#      stuff = list(stuff)
#      stuff[0] = 0
#!     for i in stuff: 
#          sum += i
#      return sum


#print(add(1,2,3,4,5,6))


#*_________________________________________________________________________________________________________________
#* **kwags = parameter that will pack all arguments into a dictionary
#*           ussful so that a function can accept a varying amount of keyword arguments


#~def hello(**kwargs): 
    #& inom dessa () så kan  kwargs bytas ut till vad som helst, då det viktigaste är **

#? Exempel 1:
    #print("Hello " + kwargs["first"] + " " + kwargs["last"])

#? Exempel 2:    
    #print("Hello",end=" ")
    #!for key,value in kwargs.items():
        #print(value,end=" ")
        
#~hello(Title="Mr.", first="Bro", middle="Dude", last="Code")


#*_________________________________________________________________________________________________________________
#* str.format() = oprional method that gives users more control
#*_________________________________________________________________________________________________________________

#TODO______________________________________________________________________________________________________________
#*PART 1
#^animal = "cow"
#^item = "moon"

#? Exempel 1

#print("The {} jumped over the {}".format(animal, item)) 

#print("The {0} jumped over the {1}".format(animal, item)) #& positional agruments

#print("The {animal} jumped over the {item}".format(animal="cow", item="moon")) #& keyword agruments
                                                                               #& (Gör variablarna till komentarer)
#^text = "The {} jumped over the {}"
#print(text.format(animal, item))

#& Så i parktiken så är inom dessa {} är det igentiligen bara några plats hållare där 
#& inom paranterserna i .format lägger du antingen en variabel eller en string. 

#TODO_______________________________________________________________________________________________________________
#*PART 2

#? Exempel 2

#^name = "Bro"
 
#print("Hello my name is {}".format(name))
#print("Hello my name is {:10}".format(name)) #& Detta gör så att variabeln får 10 karakterer att visa sin variabel
#print("Hello my name is {:<10}".format(name)) #& Ställ variabeln placering åt höger av de x anatal karatktärer 
#print("Hello my name is {:>10}".format(name)) #& Ställ variabeln placering åt vänster av de x anatal karatktärer
#print("Hello my name is {:^10}".format(name)) #& Ställ variabeln placering i mitten av de x antal karataktärer


#TODO_______________________________________________________________________________________________________________
#*PART 3

#? Exempel 3


#^number_1 = 3.14159
#^number_2 = 1000


#print("The number pi is {:.2f}".format(number_1)) #& Detta är ett exempel där man vissar hur man kan begränsa hur många desimaler en float vissar och avrundar på samma gång
#print("The number pi is {:,}".format(number_2)) #& Byter ut alla 0 till ett ,
#print("The number pi is {:b}".format(number_2)) #& Vissar tallet som binärt tal
#print("The number pi is {:o}".format(number_2)) #& Vissar talet som ett otctalt number
#print("The number pi is {:X}".format(number_2)) #& Vissar talet som ett hexadecimal number
#print("The number pi is {:e}".format(number_2)) #& Vissar talet som ett forskar number (E^något)


#*_________________________________________________________________________________________________________________
#* Random bibolitetket


#~import random as r

#^myList = ["rook", "papper","scissors"]
#^cards = [1,2,3,4,5,6,7,8,9,10,"J","Q","K","A"]

#x = r.randint(1,6) #& Randint ger ett tal ett number mellan två argument, då båda endarna är inränkande
#y = r.random() #& Ger ett random genirerat tal mella n 0-1 som en float  
#z = r.choice(myList) #& Get ett random genirerat sak inom en lista av saker du ger
#r.shuffle(cards) #& Blandar en lista av saker du ger.




#print(x)
#print(y)
#print(z)
#print(cards)


#*_________________________________________________________________________________________________________________
#* exception = Events detected during execution that interrupt the flow  of a program

#& try = Den kod som man försöker köra
#& 
#& except = Om något error kommer upp då gör något 
#&
#& ZeroDivisionError, ValueError, Exception = olika sorters error
#&
#& Finally = Sissta saken som händer inom try



#? Exempel:
#!try:
    #^numerator = int(input("Enter a number to divide: "))
    #^denominator = int(input("Enter a number to devide by: "))
    #~result = numerator/denominator
#!except ZeroDivisionError as e:
    #print(e)
    #print("You can not divide by ZERO! IDIOT!")
    
#!except ValueError as e:
    #print(e)
    #print("Ener only number please")
#!except Exception as e:
    #print(e)
    #print("somithing went wrong!:C ")
#!else:
    #print(result)
#!finally:
    #print("This will always execute")


#*_________________________________________________________________________________________________________________
#* Files and more about files| För varje del gör en ny file.txt or a folder
#*_________________________________________________________________________________________________________________

#*_________________________________________________________________________________________________________________
#* File ditection
#~import os

#^path = "C:\\Users\\Elev\\Desktop\\hi.txt"

#!if os.path.exists(path):
    #print("That location exists!")
    #!if os.path.isfile(path):
        #print("That is a file")
    #!elif os.path.isdir(path):
        #print("That is a directory")
    #!else:
        #print("That is not a file or directory")
#!else:
    #print("That location dosen't exists!")


#*_________________________________________________________________________________________________________________
#* File reading


FILLE = 'C:\\Users\\Elev\\Desktop\\Mina Visual Studio procjekt or Sublime or Atom\\Python VSC\\12h Python full Course\\text.txt'
 
#? Exempel 1 

#with open(FILLE) as file: #& detta öppnar den filen som är inom paratecerna () och ger den en variabel och sedan kör koden med file denanför, 
#    print(file.read())    #&om det intetat är klar så stänger den ner filen automatiskt
    
#? Exempel 1 

#!try:
    #!with open(FILLE) as file:
        #print(file.read()) 
#!except FileNotFoundError:
    #print("File was not found")
    
#print(file.closed) #& detta ger dig ett världe om file är ner eller öppen som en bool


#*_________________________________________________________________________________________________________________
#* How to write files


#& vid öpning av en file så finns det tre lägen:
#&            * r = read   | Används när man vill bara kolla på filen
#&            * w = write  | Används när man vill skirva i filen (detta över skrvier bara texten)
#&            * a = append | Används när man vill lägga till text till filen (detta över skrvier ej det som finns i filen)
#? Exempel: 
#^text = "Yooooooooo\n This is some text \n Have a good one!"

#!with open('test2.txt','w') as file:
    #file.write(text)


#*_________________________________________________________________________________________________________________
#* Copying files by code


#^FileText3 ='C:\\Users\\Elev\\Desktop\\Mina Visual Studio procjekt or Sublime or Atom\\Python VSC\\12h Python full Course\\text3.txt'

#^import shutil

#~ Basic funktion:

# copyfile() =  copies contents of a file
# copy()     =  copyfile() + permission mode + diestintion can be a directory
# copy2()    =  copy() + copies metadata ( file's creation and modification times)

#~shutil.copyfile(FileText3,'copy.txt') #src,dst (sorce, diestination)


#*_________________________________________________________________________________________________________________
#* Moveing files by code


#~import os

#^source = "text.txt"
#^diestination = "C:\\Users\\Elev\\Desktop\\text.txt"

#!try:
    #!if os.path.exists(diestination):
        #print ("there is alreadt a fuke there")
    #!else:
        #~os.replace(source,diestination)
        #print(source+ " was moved")
#!except FileNotFoundError:
    #print(source+" was not found")


#*_________________________________________________________________________________________________________________
#* Deleting files by code


#~import os
#~import shutil

#^path = "test.txt"
#^path_2 = "empty_folder"
#^path_3 = "folder" #& This should have one file in the folder

#!try:
    #os.remove(path)        #& Delete a file
    #os.rmdir(path_2)       #& Delete a empty directory
    #shutil.rmtree(path_3)   #& Delete a directory containg files
#!except FileNotFoundError:
    #print("That file was not found")
#!except PermissionError:
    #print("You do not have permission to delete that")
#!except OSError:
    #print("You can not delete that folder with that function")

#!else:
    #print(path_3+"was delete")


#*_________________________________________________________________________________________________________________
#* Modules = a file containing python code.  May contain functions, classes, etc.
#* Used with modular programing, witch is to separate a programing into parts 

# When to run the code under here, import  the Message.py to the Main foulder form one of the foulder abow 

#~import Messages #& This will import the Message moduler

#~import Messages as Message #& this will import the Messages moduler as Massage

#~import Messages as msg #& this will import the Messages moduler as msg

#~from Messages import Hello,Bye 

#~from Messages import * #& This will improt everything from the module

#!Messages.Hello()

#!Messages.Bye()

#!msg.Hello()

#!msg.Bye()

#!Hello()

#!Bye()

# Execute the Function help("modules") and you will have all the pre witen modules outputed.


#*_________________________________________________________________________________________________________________
#* Rock, Papper, Scissors

#~import random
#
#!while True:
#    
#^    choices = ["rock","paper","scissors"]
#^    player = None
#~    computer = random.choice(choices)
#    
#    
#!    while player not in choices:
#^        player = input("rock, paper, or scissors?: ").lower()
#
#!    if player == computer:
#        print("Compiter: ",computer)
#        print("Player: ",player)
#        print("Tie!")
#!    elif player == "rock":
#!        if computer == "paper":
#            print("Computer: ",computer)
#            print("Player: ",player)
#            print("You lose!")
#!        if computer == "scissors":
#            print("Computer: ",computer)
#            print("Player: ",player)
#            print("You win!")
#
#!    elif player == "scissors":
#!        if computer == "rock":
#            print("Computer: ",computer)
#            print("Player: ",player)
#            print("You lose!")
#!        if computer == "paper":
#            print("Computer: ",computer)
#            print("Player: ",player)
#            print("You win!")
#
#!    elif player == "paper":
#!        if computer == "scissors":
#            print("Computer: ",computer)
#            print("Player: ",player)
#            print("You lose!")
#!        if computer == "rock":
#            print("Computer: ",computer)
#            print("Player: ",player)
#            print("You win!")
#    
#^    Question = input("Do you want to play again? (y/n):")
#    
#!    if Question != "y":
#~        break
#!    else:
#~        continue
#print("Bye")


#*_________________________________________________________________________________________________________________
#* Quize 


#----------------------------------
#~def new_game():
#    
#^    guesses = []
#^    correct_guesses = 0
#^    question_num = 1
#    
#!    for key in questions:
#        print("--------------------------")
#        print(key)
#!        for i in options[question_num-1]:
#            print (i)
#^        guess = input("Enter (A, B, C, D):")    
#^        guess = guess.upper()
#^        guesses.append(guess)
#        
#^        correct_guesses += check_answer(questions.get(key),guess)
#        
#^        question_num += 1
#
# ~   display_score(correct_guesses, guesses)    
#        
#        
##----------------------------------
#~def check_answer(awnser, guess):
#    
#!    if  awnser == guess:
#        print("CORRECT")
#        return 1
#!    else:        
#        print("WRONG")
#        return 0
#
##----------------------------------
#~def display_score(correct_guesses, guesses):
#    print("--------------------------")        
#    print("RESULTS")
#    print("--------------------------")
#    
#    print("Awnser: ", end="")
#!    for i in questions:
#        print(questions.get(i), end=" ")
#    print()
#    
#    print("Guesses: ", end="")
#!    for i in guesses:
#        print(i, end=" ")
#    print()
#
#
#^    score = int((correct_guesses/len(questions))*100)
#    print("Your score is: "+str(score)+"%")
#    
##----------------------------------
#~def play_again():
#    
#^    response = input("Do you want to play again? (y/n): ")
#^    response = response.upper()
#    
#!    if response == "YES":
#        return True
#!    else:
#        return False
#
#
##----------------------------------
#
#^questions = {
#^    "Who created Python?": "A",
#^    "What year was Python created?": "B",
#^    "Python is tributed to witch comedy group?": "C",
#^   "Is the Earth round?": "A"
#^}
#
#^options =[["A. Guido van Rossum", "B, Elon Musk", "C. Bill Gates", "D. Mark Zuckerburg"],
#^          ["A. 1989", "B. 1990","C. 2000","D. 2016"],
#^          ["A. Lonely Island", "B. Smosh", "C. Monty Python", "D. SNL"],
#^          ["A. True","B. False", "C. Somtimes","D. What's Earth?"]]
#
#~new_game()
#
#!while play_again():
#~    new_game()
#    
#print("Byeeeeee!")


#*_________________________________________________________________________________________________________________
#* Object orentering programing 

#& Attributes = is/has | ex: name, age, hight
#& Methods = actions   | ex: eat, sleep, make Youtube videos  

#~from car(org) import Car
#
#^car_1 = Car("Chevy","Corvette",2021,"Blue") #& inom paranterserna så måste man ha med alla argument som man har sagt inom __init__ funktionen
#^car_2 = Car("Ford","Mustang",2022,"Red")
#
#? Exempel 1:
#
#print(car_1.make)
#print(car_1.model)
#print(car_1.year)
#print(car_1.color)
#
#~car_1.drive()
#~car_1.stop()
#
#? Exempel 2:
#
#print(car_2.make)
#print(car_2.model)
#print(car_2.year)
#print(car_2.color)
#
#~car_2.drive()
#~car_2.stop()


#*_________________________________________________________________________________________________________________
#* Class variable


#~from car1 import Car
#
#? Exempel 1 hur mna ändrar på  en klass variabel 
#
#^car_1 = Car("Chevy","Corvette",2021,"Blue")
#^car_2 = Car("Ford","Mustang",2022,"Red")
#
#^car_1.wheels = 2 #& Detta kommer att ändra klass variabeln i klassen (Car) från 4 -> 2 
#
#print(car_1.wheels)
#print(car_2.wheels)
#
#? Exempel 2 hur man ändrar på  en klass variabel
#
#~Car.wheels = 2 #& Man säger här att inom klassen car så är variabeln "wheels" = 2 


#*_________________________________________________________________________________________________________________
#* Inheritance (Sub classes/barnklasser)
#
##& För att får alla förmågor för  subklassen från huvud classen så sätter du (och huvud klassen emellan)
#
##* HUVUD KLASSEN
#
#~class Animal:
#    
#^    alive = True
#    
#!    def eat(self):
#        print("This animal is  eating")
#        
#!    def slumber(self):
#        print("This animal is sleeping")
#
#
#* BARN KLASSERNA
#
#~class Rabbit(Animal):
#    
#!    def run(self):
#        print("This Rabbit is running")
#        
#~class Fish(Animal):
#    
#!    def swim(self):
#        print("This Fish is swiming")
#
#~class Hawk(Animal):
#
#!    def fly(self):
#        print("This Hawk is flying")
#
#^rabbit = Rabbit()
#^fish = Fish()
#^hawk = Hawk()
#
#? Test 1
#
#print(rabbit.alive)
#print(fish.alive)
#print(hawk.alive)
#
#~rabbit.eat()
#~fish.eat()
#~hawk.eat()
#
#~rabbit.slumber()
#~fish.slumber()
#~hawk.slumber()
#
#? Test 2
#
#~rabbit.run()
#~fish.swim()
#~hawk.fly()


#*_________________________________________________________________________________________________________________
#* Multi-level inheritance = when a derived (child) class inherits another derived (child) class

#
#~class Organism:
#    
#^    alive = True
#    
#~class  Animal (Organism):
#    
#!    def eat(self):
#        print("This animal is eating!")
#        
#~class Dog (Animal):
#    
#!    def bark(self):
#        print("This dog is barking!") 
#
#
##? Exempel 1:
#
#^dog = Dog()
#print(dog.alive)
#~dog.eat()
#~dog.bark()

#& Så om man ska sammanfatta denna delen av classer så  är  Multi level inheritance när en class får ett 
#& familje träd och alla de före muteringarna går backot


#*_________________________________________________________________________________________________________________
#*Method overriding


#& En child klass kommer altid köra den function som är närmast klassen (inom den egna klass) om det finns samma 
#& function i både förelderklassen och barn klassen.

#~class Animal: # Parent class
#    
#!    def eat(self):
#        print("This animal is eating")
#
#~class Rabbit(Animal):  # Child class
#    
#!    def eat(self):
#        print("This rabbit is eating a carrot")
#    
#    
#    
#^rabbit = Rabbit()
#~rabbit.eat()


#*_________________________________________________________________________________________________________________
#*Method chaining = calling multiple methods sequentially each call 
#* preforms an action on the same object and returns self


#~class Car: # Perent class
#    
#!    def turn_on(self):
#        print("You start the engine")
#!        return self
#        
#        
#!    def drive(self):
#        print("You drive the car")
#!        return self
#        
#!    def brake(self):
#        print("You step on the brakes")
#!        return self
#    
#!    def turn_off(self):
#        print("You trun off the engine")
#!        return self
        
#^car = Car()

#? Två sätt att kalla hit en method

#? 1)

#car.turn_on()
#car.drive()


#? 2)

#car.turn_on().drive()

#car.turn_on()\
#     .drive()\
#     .brake()\
#     .turn_off()


#*_________________________________________________________________________________________________________________
#* super() funktion = Function used to give access to the methods of a parent class.
#*                    Retruns a temporary object of a parent class


#~class Rectangle: # Parent class
#    
#!    def __init__(self, length, width ): 
#!        self.width = width
#!        self.length = length
#        
#~class Square(Rectangle): # Child class
#!    def __init__(self, length, width):
#~        super().__init__( length, width)
#        
#!    def area(self):
#!        return self.length*self.width
#
#    
#~class Cube(Rectangle): # Child class
#    
#!    def __init__(self,length, width, height): 
#~        super().__init__( length, width)
#!        self.height = height
#    
#!    def volume(self):
#!        return self.length*self.width*self.height
#
#^square = Square(3, 3)
#^cube = Cube(3, 3, 3)
#~print(square.area())
#~print(cube.volume())


#*_________________________________________________________________________________________________________________
#* Prevents a user from crating a object of that class
#* + compls a user to overtide abstract methods in a child class

#* abstract class  = a class which contains one of more abstract methods
#* avstract method = a method that has a declaratuin but does not have an implementation.


from abc import ABC, abstractmethod

#class Vehicle(ABC): # Parent class
    
#~    @abstractmethod
#!    def go(self):
#        pass
#    
#~    @abstractmethod
#!    def stop(self):
#        pass
    
#class Car(Vehicle): # Child class #& denna klass måste överskriva alla abstractmetoder inom parent classen om clssen ska mutera från den
    
#!   def go(self):
#        print("You dive the car")
#        
#!   def stop(self):
#        print("This car is stopped")

#class Motorcycle(Vehicle): # Child class #& denna klass måste överskriva alla abstractmetoder inom parent classen om clssen ska mutera från den
    
#!    def go(self):
#        print("You are ride the motorcycle")
#
#!    def stop(self):
#        print("This motercycle is stopped")



#vehicle = Vehicle() #& för att skapa en generel skapelse av vehicle så kan det ej vara en abstract klass
#car = Car()
#motorcycle = Motorcycle()

#vehicle.go() #& för att kalla för methoden så måste man 1 ha en generel skapelse samt att det ej är en avstract method
#car.go()
#motorcycle.go()


#*_________________________________________________________________________________________________________________
#* How you can pass objects as arguments

class Car:
        
    coler = None
def change_coler(vehicle,coler): 
    
    vehicle.coler = coler
    
car_1 = Car()
car_2 = Car()
car_3 = Car()

change_coler(car_1,"red")
change_coler(car_2,"white")
change_coler(car_3,"blue")

print(car_1)
print(car_2)
print(car_3)















 



