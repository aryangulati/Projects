import pyautogui,time 
# import time 

# while True:
#     time.sleep(3)
#     pyautogui.typewrite('I like to code .')

#     pyautogui.press('enter')

f=open("beemovie.txt",'r')

for word in f:
    pyautogui.typewrite(word)
    pyautogui.press('enter')Bee Movie Script - Dialogue Transcript
    