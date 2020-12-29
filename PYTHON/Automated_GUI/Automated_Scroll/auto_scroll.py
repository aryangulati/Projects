import cv2 

cam =cv2.VideoCapture()

while True:

    ret,frame =cam.read()

    cv2.imshow('frame',frame)

    if cv2.waitkey(10)== ord('q'):
        break

cam.release()