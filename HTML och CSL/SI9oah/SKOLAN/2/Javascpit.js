function myFunction() 
			{
				// En tom textsträng
				var resultat = ""; 
				// Ett tal testas och adderas till resultat
				resultat = resultat + isNaN(123) + ": 123<br>"; 
				// En sträng av tal testas
				resultat = resultat + isNaN('123') + ": '123'<br>"; 
				// Text testas
				resultat = resultat + isNaN('Hello') + ": 'Hello'<br>"; 
				// Datum, tolkas som sträng
				resultat = resultat + isNaN('2005/12/12') + ": '2005/12/12'<br>"; 
				// Skriver ut variabeln resultat, på “platsen” som har id=demo. 
				document.getElementById("demo").innerHTML = resultat; 
			}