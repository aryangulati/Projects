#importing pygame
import pygame


#intialise the pygame  at begin of the program
pygame.init()


# create a window  what we draw on
#here u have to give the size of window 
win=pygame.display.set_mode((500,480))

# to give caption on the window screen 
pygame.display.set_caption("New Game")
#few attributes of our chachters

#two list of images are shown below
#load an image in pygame we can also flip the right image but we have a left to become easier 
#if u have put the images in some folder then u need to use pygame.image.load(pygame.path.join("your path",'R1.png'))
walkRight = [pygame.image.load('R1.png'), pygame.image.load('R2.png'), pygame.image.load('R3.png'), pygame.image.load('R4.png'), pygame.image.load('R5.png'), pygame.image.load('R6.png'), pygame.image.load('R7.png'), pygame.image.load('R8.png'), pygame.image.load('R9.png')]
walkLeft = [pygame.image.load('L1.png'), pygame.image.load('L2.png'), pygame.image.load('L3.png'), pygame.image.load('L4.png'), pygame.image.load('L5.png'), pygame.image.load('L6.png'), pygame.image.load('L7.png'), pygame.image.load('L8.png'), pygame.image.load('L9.png')]


# background image
bg = pygame.image.load('bg.jpg')


#standing image of our char in the game 
char = pygame.image.load('standing.png')

#clk variable or clockspeed in pygame
clock =pygame.time.Clock()

#intailise a class called player!!
class player(object):

    #this class can be used for making more man 

    def __init__(self,x,y,width,height):
        self.x=x
        self.y=y
        self.width=width
        self.height=height
        self.vel=5
        self.isJump=False
        self.jumpCount=10
        self.left=False
        self.right=False
        self.walkCount=0


    def draw(self,win):
            #we are replacing rectangle with char 
        if self.walkCount +1 >=27:
            #we have nine char images and frame rate for displaying each would be 3
            self.walkCount=0
        if self.left:
            win.blit(walkLeft[self.walkCount//3],(self.x,self.y)) 
            self.walkCount+=1  
        elif self.right:
            win.blit(walkRight[self.walkCount//3],(self.x,self.y)) 
            self.walkCount+=1   
        else:
            win.blit(char,(self.x,self.y))    
    


#removing all because we are making classes and objects
# x = 50
# y = 400
# width = 40 # if any pro change it to 64
# height = 40
# vel= 20

# left=False
# right=False

# walkCount=0


# isJump=False
# jumpCount=10
    








#making a function for a drawing window
def redrawGameWindow():
    #changing the variable so we can use it everywhere
    #global walkCount

    #to overcome the problem of continous drawing  charchter 
    # so we need to fill the win before drawing another one
    # so here parameters are color we have to match with background so using black that is 000 in RGB
    #win.fill((0,255,0))
    #instead of filling a it with color we are filling it with a picture
    win.blit(bg,(0,0)) #name of pic and where u wanna store it in the blit function
    #draw a rectangle u can draw any polygon 
    #it has first para meter surface that is on window and secondly color that is RGB 
    #then it takes x,y width and heights
    #pygame.draw.rect(win,(255,0,0),(x,y,width,height))

    man.draw(win)



    # to show some character or anything on window we have to refresh the display 
    pygame.display.update()    



#start by making run variable
run= True
man=player(300,410,64,64) #instattaion of class obj

while run:
    #using delay so making clk in pygame so things don't happen quick
    #pygame.time.delay(100)
    #their is a frame rate in game that shows as if picture are moving so setting itfor frame/sec
    clock.tick(27) #this set char fps to 27



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
    if keys[pygame.K_LEFT] and man.x > man.vel:
        #here we are just checking which has appreared from the list and using vel to increase or decrease it
        man.x-=man.vel
        #we have to move our char by the vel in the direction 

        #as we dont want to confuse the program so we making
        man.left =True
        man.right =False

    elif keys[pygame.K_RIGHT] and man.x< 500-man.width-man.vel:
        man.x+=man.vel
        man.left =False
        man.right =True

    else:
        man.left =False
        man.right =False
        man.walkCount=0


    if not(man.isJump):
        #so they cant move up and down while jumping and too not jump while jumping
        #we cant move down and up as their is no need of it!
       # if keys[pygame.K_UP] and y > vel:
        #    y-=vel 
        

        #if keys[pygame.K_DOWN] and y< 600-height-vel:
        #    y+=vel
        #if keys[pygame.K_7]:
        #    x+=vel
        #    y+=vel   
        if keys[pygame.K_SPACE]:
            #also while we are jumping we are not suppose to be moving
            man.left =False
            man.right =False
            man.walkCount=0
            man.isJump=True
    else:
        if man.jumpCount>=-10:
            neg=1
            if man.jumpCount <0:
                neg=-1
            man.y-=(man.jumpCount**2)*0.5*neg



            man.jumpCount-=1

        else:
            man.isJump =False
            man.jumpCount =10
            
    redrawGameWindow()


#ends the program and closes window for us 
pygame.quit()





