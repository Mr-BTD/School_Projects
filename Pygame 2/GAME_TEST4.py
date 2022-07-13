import pygame
import os
pygame.init()

WIN_SCALE = (500, 500)
WIN = pygame.display.set_mode(WIN_SCALE)

stationary = pygame.image.load(os.path.join("Assets", "Hero", "standing.png"))

left = [pygame.image.load(os.path.join("Assets", "Hero", "L1.png")),
        pygame.image.load(os.path.join("Assets", "Hero", "L2.png")),
        pygame.image.load(os.path.join("Assets", "Hero", "L3.png")),
        pygame.image.load(os.path.join("Assets", "Hero", "L4.png")),
        pygame.image.load(os.path.join("Assets", "Hero", "L5.png")),
        pygame.image.load(os.path.join("Assets", "Hero", "L6.png")),
        pygame.image.load(os.path.join("Assets", "Hero", "L7.png")),
        pygame.image.load(os.path.join("Assets", "Hero", "L8.png")),
        pygame.image.load(os.path.join("Assets", "Hero", "L9.png"))
        ]
right = [None]*10
for picIndex in range(1, 10):
    right[picIndex-1] = pygame.image.load(os.path.join(
        "Assets", "Hero", "R" + str(picIndex) + ".png"))
    picIndex += 1


BLACK = (0, 0, 0)
x = y = 250
vel = 10
move_left = False
move_right = False
stepIndex = 0


def draw_game():
    global stepIndex
    WIN.fill(BLACK)
    if stepIndex >= 9:
        stepIndex = 0

    if move_left:
        WIN.blit(left[stepIndex], (x, y))
        stepIndex += 1

    elif move_right:
        WIN.blit(right[stepIndex], (x, y))
        stepIndex += 1
    else:
        WIN.blit(stationary, (x, y))


# Main loop
run = True
while run:

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            run = False

    draw_game()

    # Movement
    userInput = pygame.key.get_pressed()
    if userInput[pygame.K_LEFT]:
        x -= vel
        move_left = True
        move_right = False
    elif userInput[pygame.K_RIGHT]:
        x += vel
        move_left = False
        move_right = True
    else:
        move_left = False
        move_right = False
        stepIndex = 0

    pygame.time.delay(30)
    pygame.display.update()
