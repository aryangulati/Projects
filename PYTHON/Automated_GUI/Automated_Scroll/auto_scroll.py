import cv2
import numpy as np
import pyautogui

cam =cv2.VideoCapture()

yellow_lower =np.array([22,99,0])
yellow_upper = np.array([45, 255, 255])


while True:

    ret,frame =cam.read()
    hsv =cv2.cvtColor(frame,cv2.COLOR_BGR2HSV)
    mask=cv2.inRange(hsv,yellow_lower,yellow_upper)
    cv2.imshow('frame',frame)
    cv2.imshow('frame',gray)
    cv2.imshow('frame',mask)

    if cv2.waitkey(10)== ord('q'):
        break

cam.release()
cv2.destroyAllWindows()