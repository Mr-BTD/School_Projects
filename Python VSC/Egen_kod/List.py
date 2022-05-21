#Använd [] för att skapa en lista till en variabel:
courses =["History", "Math", "Compsicics", ]
courses_2 = ["Art","Education"]
nums =[1, 5, 2, 4, 3]
#*Lägga till saker
    
    # Lägga in en sak
courses.append("Art")

    # Insert (två agrument: 1) var du vill sätta sakern, 2) Vad för något), det skiver inte över något   
courses.insert(0, "Physics")

    # Sätta ihop listor
courses.extend(courses_2)

#Ta bort saker i en lista:

    # Först sättet: tar bort en specific sak i listan
courses.remove("Math")

    # Andra sättet: tar bort sista saken i listan
courses.pop("Math")

#* Sortera:

    # Göra listan bakofram 
courses.reverse()

    # Sortera Alfa
courses.sort()

    # Sortera i number årdning 
nums.sort()

    # Sortera i omvänd number årdning:
nums.sort(reverse=True)
    
    # Sortera listan utan att ändra orgenal listan.
sorted_courses = sorted(courses)

#* Ta ut något (print)

    # För att hitta en specific sak i lista så anväder man index (börjar på 0, -1 är alltid sista saken):
print(courses[0])

    # Ta ut mer än en sak [där du börjar : där du slutar före saken]:
print(courses[0:2])

    # Vissar hur många det är i listan:
print(len(courses))

    # Vissar minsta världet i listan:
print(min(nums))

    # Vissar maximalaste världet i listan:
print(max(nums))

    # Vissar summan av alla världen i listan: 
print(sum(nums))

    # För att vissa vilken plats i listan en specific sak ligger:
print(courses.index("Compsicics"))

#* Sant eller flaskt:

    # Bool
print("Art" in courses)

    #
