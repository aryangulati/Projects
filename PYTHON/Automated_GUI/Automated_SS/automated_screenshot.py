import pyautogui

im1 = pyautogui.screenshot()

im2 = pyautogui.screenshot('my_screenshot.png')


im = pyautogui.screenshot(region=(0,0,300,400))