#importing pygame
import pygame
#intialise the pygame  at begin of the program
pygame.init()
# create a window  what we draw on
#here u have to give the size of window 
win=pygame.display.set_mode((500,500))
# to give caption on the window screen 
pygame.display.set_caption("New Game")
#few attributes of our chachters
x = 50
y = 50
width = 40
height = 60
vel= 5

run= True
while run:
    pygame.time.delay(100)
    for event in pygame.event.get() :
        if event.type==pygame.QUIT:
            run = False

pygame.quit()            




