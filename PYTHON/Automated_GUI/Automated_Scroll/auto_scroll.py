import cv2
import numpy as np
import pyautogui

cam =cv2.VideoCapture(1)

yellow_lower =np.array([22,99,0])
yellow_upper = np.array([45, 255, 255])


while True:

    ret,frame =cam.read()
    hsv =cv2.cvtColor(frame,cv2.COLOR_BGR2HSV)
    mask=cv2.inRange(hsv,yellow_lower,yellow_upper)

    #here we are getting different type of yelloe mask
    #so we are using Countours/hierarchy (making boundary around colors)
    contours, hierarchy = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    #making for loop for seeing all noises !!(by putting condtion)
    

    cv2.drawContours(frame,contours,-1,(0,255,0),2)




    cv2.imshow('frame',frame)
    # cv2.imshow('frame',hsv)
    # cv2.imshow('frame',mask)

    if cv2.waitKey(10)== ord('q'):
        break

cam.release()
cv2.destroyAllWindows()