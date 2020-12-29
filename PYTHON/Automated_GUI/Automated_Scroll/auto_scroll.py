import cv2 
import numpy as np
import pyautogui

cam =cv2.VideoCapture()

yellow_lower =np.array([22,99,0])
yellow_upper = np.array([45, 255, 255])


while True:

    ret,frame =cam.read()

    cv2.imshow('frame',frame)

    if cv2.waitkey(10)== ord('q'):
        break

cam.release()