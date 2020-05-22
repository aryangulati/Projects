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
height = 40
vel= 20


isJump=False
jumpCount=10

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

    # make it dynmaic and move our character then we need to setup a list
    keys =pygame.key.get_pressed()
    # to check that if our keys is pressed we can use if statement 
    if keys[pygame.K_LEFT] and x > vel:
        #here we are just checking which has appreared from the list and using vel to increase or decrease it
        x-=vel
        #we have to move our char by the vel in the direction 

    if keys[pygame.K_RIGHT] and x< 1000-width-vel:
        x+=vel
    if not(isJump):
        #so they cant move up and down while jumping and too not jump while jumping
        if keys[pygame.K_UP] and y > vel:
            y-=vel 
        

        if keys[pygame.K_DOWN] and y< 600-height-vel:
            y+=vel
        #if keys[pygame.K_7]:
        #    x+=vel
        #    y+=vel   
        if keys[pygame.K_SPACE]:
            isJump=True
    else:
        if jumpCount>=-10:
            neg=1
            if jumpCount <0:
                neg=-1
            y-=(jumpCount**2)*0.5*neg


            jumpCount-=1

        else:
            isJump =False
            jumpCount =10
                    

    #to overcome the problem of continous drawing  charchter 
    # so we need to fill the win before drawing another one
    # so here parameters are color we have to match with background so using black that is 000 in RGB
    win.fill((0,255,0))
    #draw a rectangle u can draw any polygon 
    #it has first para meter surface that is on window and secondly color that is RGB 
    #then it takes x,y width and heights
    pygame.draw.rect(win,(255,0,0),(x,y,width,height))
    # to show some character or anything on window we have to refresh the display 
    pygame.display.update()    


#ends the program and closes window for us 
pygame.quit()





