import pygame
import os

pygame.init()

WIN_SCALE = (1000, 500)


WIN = pygame.display.set_mode(WIN_SCALE)
BACKGROUND_IMAGE = pygame.image.load(os.path.join('Assets', 'Background.png'))
BG = pygame.transform.scale(BACKGROUND_IMAGE, WIN_SCALE)


BLACK = (0, 0, 0)

pygame.display.set_caption("First Game!")

i = 0
width = 1000

run = True
while run:

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            run = False

    WIN.fill(BLACK)
    WIN.blit(BG, (i, 0))
    WIN.blit(BG, (width+i, 0))

    if i == -width:
        WIN.blit(BG, (width+i, 0))
        i = 0
    i -= 1

    pygame.time.delay(20)
    pygame.display.update()
