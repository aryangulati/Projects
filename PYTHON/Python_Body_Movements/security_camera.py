import cv2 

cam =cv2.VideoCapture(0)

while True:
    ret,frame =cam.read()
    ret,frame1 =cam.read()


    if ret==True:
        # gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        diff =cv2.absdiff(frame,frame1)
        gray = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)
        #their are diff type of blurr but here we are using gaussian Blur
        blur= cv2.Gauss ianBlur(gray,(5,5),0)
        _, thresh = cv2.threshold(blur, 20, 255, cv2.THRESH_BINARY)
        dilated = cv2.dilate(thresh, None, iterations=3)
        contours, _ = cv2.findContours(dilated, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
        

        cv2.imshow("Absolute diffrence b/w both the frames", diff)  



    
    if cv2.waitKey(10)==ord("q"):
        break
cam.release()
cv2.destroyAllWindows()