import pygame


pygame.init()

WIN_SCALE = (500, 500)


WIN = pygame.display.set_mode(WIN_SCALE)


WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

pygame.display.set_caption("First Game!")

x = 250
y = 250
radius = 15
vel_x = vel_y = 10


run = True
while run:

    WIN.fill(BLACK)

    pygame.draw.circle(WIN, WHITE, (int(x), int(y)), radius)
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            run = False

    # * Movement
    userInput = pygame.key.get_pressed()
    if userInput[pygame.K_LEFT] and x > 0:
        x -= vel_x
    if userInput[pygame.K_RIGHT] and x < 500:
        x += vel_x

    if userInput[pygame.K_UP] and y > 0:
        y -= vel_y
    if userInput[pygame.K_DOWN] and y < 500:
        y += vel_y

    pygame.time.delay(20)
    pygame.display.update()
