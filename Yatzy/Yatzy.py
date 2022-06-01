import random 
import pygame 


pygame.init()

WIDTH = 600
HEIGHT = 800
screen = pygame.display.set_mode([WIDTH, HEIGHT])
pygame.display.set_caption('Yatzy!')
timer = pygame.time.Clock()
fps = 60
font = pygame.font.Font('freesansbold.ttf',18)
backgrund = (128, 128, 128)
white = (255, 255, 255)
black = (0, 0, 0)
numbers = [0, 0, 0, 0, 0]
roll = False
rolls_left = 10
dice_selected = [False, False, False, False, False,]
selected_choice = [False, False, False, False, False, False, False, False, False, False, False, False, False]
possible = [False, False, False, False, False, False, False, False, False, False, False, False, False, False]
done =  [False, False, False, False, False, False, False, False, False, False, False, False, False, False]

def draw_stuff():
    global rolls_left
    roll_text = font.render('Click to Roll', True, white)
    screen.blit(roll_text, (85, 167))
    accept_text = font.render('Accept Turn', True, white)
    screen.blit(accept_text, (375, 167))
    rolls_text = font.render(f'Rolls Left this Turn {rolls_left}', True, white)
    screen.blit(rolls_text, (15, 15))
    pygame.draw.rect(screen, white, [0, 200, 225, HEIGHT-200])
    pygame.draw.line(screen, black, (0, 40), (WIDTH, 40), 3)
    pygame.draw.line(screen, black, (0, 200), (WIDTH, 200), 3)
    pygame.draw.line(screen, black, (155, 200),(155, HEIGHT), 3)
    pygame.draw.line(screen, black, (225, 200),(225, HEIGHT), 3)
    
    

class Dice:
    def __init__(self, x_pos, y_pos, num, key):
        global dice_selected
        self.x_pos = x_pos
        self.y_pos = y_pos
        self.num = num
        self.key = key
        self.selected = dice_selected[key]
        self.die = ''
        
        
        
    def draw(self):
        
        self.die = pygame.draw.rect(screen, white, [self.x_pos, self.y_pos, 100, 100], 0, 5)
        
        if self.num == 1:
            
            pygame.draw.circle(screen, black, (self.x_pos + 50, self.y_pos + 50), 10)
        
        if self.num == 2:
            
            pygame.draw.circle(screen, black, (self.x_pos + 20, self.y_pos + 20), 10)
            pygame.draw.circle(screen, black, (self.x_pos + 80, self.y_pos + 80), 10)
        
        if self.num == 3:
            
            pygame.draw.circle(screen, black, (self.x_pos + 20, self.y_pos + 20), 10)
            pygame.draw.circle(screen, black, (self.x_pos + 50, self.y_pos + 50), 10)
            pygame.draw.circle(screen, black, (self.x_pos + 80, self.y_pos + 80), 10)
        
        if self.num == 4:
            
            pygame.draw.circle(screen, black, (self.x_pos + 20, self.y_pos + 20), 10)
            pygame.draw.circle(screen, black, (self.x_pos + 20, self.y_pos + 80), 10)
            pygame.draw.circle(screen, black, (self.x_pos + 80, self.y_pos + 80), 10)
            pygame.draw.circle(screen, black, (self.x_pos + 80, self.y_pos + 20), 10)
            
        if self.num == 5:
            
            pygame.draw.circle(screen, black, (self.x_pos + 20, self.y_pos + 20), 10)
            pygame.draw.circle(screen, black, (self.x_pos + 20, self.y_pos + 80), 10)
            pygame.draw.circle(screen, black, (self.x_pos + 50, self.y_pos + 50), 10)
            pygame.draw.circle(screen, black, (self.x_pos + 80, self.y_pos + 80), 10)
            pygame.draw.circle(screen, black, (self.x_pos + 80, self.y_pos + 20), 10)
        
        if self.num == 6:
            
            pygame.draw.circle(screen, black, (self.x_pos + 20, self.y_pos + 20), 10)
            pygame.draw.circle(screen, black, (self.x_pos + 20, self.y_pos + 50), 10)
            pygame.draw.circle(screen, black, (self.x_pos + 20, self.y_pos + 80), 10)
            pygame.draw.circle(screen, black, (self.x_pos + 80, self.y_pos + 20), 10)
            pygame.draw.circle(screen, black, (self.x_pos + 80, self.y_pos + 50), 10)
            pygame.draw.circle(screen, black, (self.x_pos + 80, self.y_pos + 80), 10)
        if self.selected:
            pygame.draw.rect(screen, (255, 0, 0), [self.x_pos, self.y_pos, 100, 100], 4, 5)

    def check_click(self, coordinates):
        if self.die.collidepoint(coordinates):
            if dice_selected[self.key]:
                dice_selected[self.key] = False
            elif not dice_selected[self.key]:
                dice_selected[self.key] = True
                
    
class Choice:
    def __init__(self, x_pos, y_pos, text, select, possible, done):
        self.x_pos = x_pos
        self.y_pos = y_pos
        self.text = text
        self.select = select
        self.possible = possible
        self.done = done
        
        
    def draw(self):
        pygame.draw.line(screen, black, (self.x_pos, self.y_pos), (self.x_pos + 225, self.y_pos), 2)
        pygame.draw.line(screen, black, (self.x_pos, self.y_pos + 30), (self.x_pos + 225, self.y_pos + 30), 2)
        if not self.done:
            if self.possible:
                my_text = font.render(self.text, True, (34, 140, 34))

            elif not self.possible:
                my_text = font.render(self.text, True, (255, 0, 0))
        else:
            my_text = font.render(self.text, True, black)
        screen.blit(my_text, (self.x_pos + 5, self.y_pos + 10))
        
        
def chech_possibilities(possible_list, numbers_list):
    possible_list[0] = True
    possible_list[1] = True
    possible_list[2] = True
    possible_list[3] = True
    possible_list[4] = True
    possible_list[5] = True
    possible_list[12] = True
    max_count = 0
    
    for index in range(1, 7):
        if numbers_list.count(index) > max_count:
            max_count = numbers_list.count(index)      
    
    if max_count >= 3:
        possible_list[6] = True
        if max_count >= 4:
            possible_list[7] = True
            if max_count == 5:
                possible_list[11] = True
        
    
    if max_count < 3:
        possible_list[6] = False
        possible_list[7] = False
        possible_list[8] = False
        possible_list[11] = False
    elif max_count == 3:
        possible_list[7] = False
        possible_list[11] = False
        checker = False
        for index in range(len(numbers_list)):
            if numbers_list.count(numbers_list[index])== 2:
                possible_list[8] = True
                checker = True
        if not checker:
            possible_list[8] = False
        
    elif max_count == 4:
        possible_list[11] = False
    
    lowest = 10
    highest = 0
    for index in range(len(numbers_list)):
        if numbers_list[index]< lowest:
            lowest = numbers_list[index]
        if numbers_list[index]> highest:
            highest = numbers_list[index]
    
    if (lowest + 1 in numbers_list) and (lowest + 2 in numbers_list) and (lowest + 3 in numbers_list) and (lowest) and (lowest + 4 in numbers_list):
        possible_list[10] = True
    else:
        possible_list[10] = False
    
    if ((lowest + 1 in numbers_list) and (lowest + 2 in numbers_list) and (lowest + 3 in numbers_list)) or \
        ((highest - 1  in numbers_list) and (highest - 2 in numbers_list) and (highest - 3 in numbers_list)):
        possible_list[9] = True
    else:
        possible_list[9] = False
    
    return possible_list
        
        
        
        

running = True
while running:
    timer.tick(fps)
    screen.fill(backgrund)
    roll_button = pygame.draw.rect(screen, black, [10, 160, 280, 30])
    accept_button = pygame.draw.rect(screen, black, [310, 160, 280, 30])
    
    draw_stuff()
    
    die1 = Dice(10,  50, numbers[0], 0)
    die2 = Dice(130, 50, numbers[1], 1)
    die3 = Dice(250, 50, numbers[2], 2)
    die4 = Dice(370, 50, numbers[3], 3)
    die5 = Dice(490, 50, numbers[4], 4)
    
    ones = Choice(0, 200, '1s', selected_choice[0], possible[0], done[0])
    twos = Choice(0, 230, '2s', selected_choice[1], possible[1], done[1])
    threes = Choice(0, 260, '3s', selected_choice[2], possible[2], done[2])
    fours = Choice(0, 290, '4s', selected_choice[3], possible[3], done[3])
    fives = Choice(0, 320, '5s', selected_choice[4], possible[4], done[4])
    sixes = Choice(0, 350, '6s', selected_choice[5], possible[5], done[5])
    upper_totall = Choice(0, 380, 'Upper score', False, False, True)
    upper_bonus = Choice(0, 410, 'Bounus if >= 63', False, False, True)
    upper_total2 = Choice(0, 440, 'Upper total', False, False, True)
    three_kind = Choice(0, 470, '3 of Kind', selected_choice[6], possible[6], done[6])
    four_kind = Choice(0, 500, '4 of Kind', selected_choice[7], possible[7], done[7])
    full_house = Choice(0, 530, 'Full house', selected_choice[8], possible[8], done[8])
    small_straight = Choice(0, 560, 'Sm. Straight', selected_choice[9], possible[9], done[9])
    large_straight = Choice(0, 590, 'Lg. Straight', selected_choice[10], possible[10], done[10])
    chance = Choice(0, 650, 'Chance', selected_choice[11], possible[11], done[11])
    yahtzee = Choice(0, 620, 'YAHTZEE!!!', selected_choice[12], possible[12], done[12])
    bounus = Choice(0, 680, 'Yahtzee bonus', False, False, True)
    lower_total1 = Choice(0, 710, 'Lower total', False, False, True)
    lower_total2 = Choice(0, 740, 'Upper total', False, False, True)
    grand_tota = Choice(0, 770, 'Grand total', False, False, True)
    possible = chech_possibilities(possible, numbers)



    die1.draw()
    die2.draw()
    die3.draw()
    die4.draw()
    die5.draw()
    ones.draw()
    twos.draw()
    threes.draw()
    fours.draw()
    fives.draw()
    sixes.draw()
    upper_totall.draw()
    upper_bonus.draw()
    upper_total2.draw()
    upper_total2.draw()
    three_kind.draw()
    four_kind.draw()
    full_house.draw()
    small_straight.draw()
    large_straight.draw()
    chance.draw()
    yahtzee.draw()
    bounus.draw()
    lower_total1.draw()
    lower_total2.draw()
    grand_tota.draw()
    
    
    
    
    
    
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        if event.type == pygame.MOUSEBUTTONDOWN:
            die1.check_click()
            die2.check_click()
            die3.check_click()
            die4.check_click()
            die5.check_click()
            
            if 0 <= event.pos[0]<= 155:
                if 200 <= event.pos[1]<= 380 or 470 <= event.pos[0]<= 680: 
                    if 200 < event.pos[1] <230:
                        clicked = 0
                         
                    if 230 < event.pos[1] <260:
                        clicked = 1
                         
                    if 260 < event.pos[1] <290:
                        clicked = 2
                         
                    if 290 < event.pos[1] <320:
                        clicked = 3
                         
                    if 320 < event.pos[1] <350:
                        clicked = 4
                         
                    if 350 < event.pos[1] <380:
                        clicked = 5
                         
                    if 470 < event.pos[1] <500:
                        clicked = 6
                    
                    if 500 < event.pos[1] <530:
                        clicked = 7
                    
                    if 530 < event.pos[1] <560:
                        clicked = 8
                    
                    if 590 < event.pos[1] <620:
                        clicked = 9
                    
                    if 620 < event.pos[1] <620:
                        clicked = 10
                    
                    if 620 < event.pos[1] <650:
                        clicked = 11
                    
                    if 650 < event.pos[1] <680:
                        clicked = 12
                         
            
            if roll_button.collidepoint(event.pos) and rolls_left > 0:
                roll = True
                rolls_left -= 1 
                
    
    if roll:
        for number in range(len(numbers)):
            numbers[number] = random.randint(1, 6)
        roll = False

        
    pygame.display.flip()
pygame.quit()
            
        




