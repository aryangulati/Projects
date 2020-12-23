import smtplib
#simple mail transfer protocol




server=smtplib.SMTP('smtp.gmail.com',587)
server.starttls()
server.login('aryangulati2810@gmail.com','*****')
server.sendmail('aryangulati2810@gmail.com','aryangulati28100@gmail.com',"HI THIS IS MAIL FROM ARYAN PLEASE RESPOND ASAP")