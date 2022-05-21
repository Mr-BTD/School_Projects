from cryptography.fernet import Fernet

#* write_key only run once for the program

def write_key():
    key = Fernet.generate_key()
    with open("key.key", "wb") as key_file:
        key_file.write(key)




def load_key():
    file = open("key.key", "rb")
    key = file.read()
    file.close()
    return key



key = load_key() 
fer = Fernet(key)

   
   
def view():
    with open('password.txt', 'r') as f:
       for line in f.readline():
           data = line.strip
           user, passw = data.split("|")
           print('User:', user,'Passwrod:', 
                 fer.decrypt(passw.encode()))


def add():
    name = input("Account Name: ")
    pwd = input("Password: ")
    
    with open("password.txt", "a") as f:
        f.write(name + "|" + fer.encrypt(pwd.encode()).decode() + "\n")


while True:
    mode = input(" Would u like to add a new password or view existing once (view, add), press q to quit?").lower()
    if mode == "q":
        break
    
    if mode == "view":
        view()
    elif mode == "add":
        add()
    else:
        print ("Invalid mode")
        continue