#importing pygame
import pygame
#intialise the pygame  at begin of the program
pygame.init()
# create a window  what we draw on
#here u have to give the size of window 
win=pygame.display.set_mode((1000,600))
# to give caption on the window screen 
pygame.display.set_caption("New Game")
#few attributes of our chachters
x = 50
y = 50
width = 40
height = 60
vel= 5

#start by making run variable
run= True

while run:
    #using delay so making clk in pygame so things don't happen quick
    pygame.time.delay(100)
    #anything (events )that happens in pygame
    #moving keys and  mouse positions and we can loop through all the events
    for event in pygame.event.get() :
        #we gonna check if we have clicked exit button on window
        #if we click exit button on window
        if event.type==pygame.QUIT:
            #break the loop
            run = False

#ends the program and closes window for us 
pygame.quit()





