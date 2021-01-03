# cap = cv.VideoCapture(0, cv2.CAP_DSHOW)
import cv2
import numpy as np
import pyautogui

cam =cv2.VideoCapture(0 ,cv2.CAP_DSHOW)

yellow_lower =np.array([22,99,0])
yellow_upper = np.array([45, 255, 255])

#here we make a y (prev one) to keep check
y_prev=0

while True:

    ret,frame =cam.read()
    hsv =cv2.cvtColor(frame,cv2.COLOR_BGR2HSV)
    mask=cv2.inRange(hsv,yellow_lower,yellow_upper)
    #here we are getting different type of yelloe mask



    #to get rid of noise 
    #so we are using Contours/hierarchy (making boundary around colors)
    contours, hierarchy = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE) #chain method
    #making for loop for seeing all noises !!(by putting condtion)
    
    
    #drawing contours
    # cv2.drawContours(frame,contours,-1,(0,255,0),2)


    #let me look through contours we needed and remove 
    #unwanted contours that are small and not required 
    for c in contours: 
        area =cv2.contourArea(c)
        # print(area) selecting the wanted area out of small one
        if area >300:
            # print(area)
            # cv2.drawContours(frame,c,-1,(0,255,0),2)
            x,y,w,h =cv2.boundingRect(c)
            cv2.rectangle(frame,(x,y),(x+w,y+h),(0,255,0),2)

            if y<y_prev:
                # print('moving down')
                pyautogui.press('space')
            y_prev=y
    cv2.imshow('frame',frame)
   

    if cv2.waitKey(10)== ord('q'):
        break

cam.release()
cv2.destroyAllWindows()


