import pyautogui


# Get the size of the primary
screenWidth,screenHeight = pyautogui.size() 

#position of mouse
cx,cy =pyautogui.position()

print(cx)
print(cy)

pyautogui.moveTo(170,67)
#move mouse position

pyautogui.click()

pyautogui.click(100,200)

pyautogui.click('button.png')
#find the buton that appear on the screen


# pyautogui.write('Hello',interval=0.25)

pyautogui.press('esc')


pyautogui.keyDown('shift') #press and hold it

