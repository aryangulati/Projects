import smtplib
#simple mail transfer protocol
import speech_recognition as sr
import pyttsx3

from email.message import EmailMessage



listen_bot= sr.Recognizer()

engine=pyttsx3.init()


def talk(text):
    engine.say(text)
    engine.runAndWait()

def get_info():
    try:
        with sr.Microphone() as source:
            print('Listening...')
            voice = listen_bot.listen(source)
            info =listen_bot.recognize_google(voice)
            print(info)
            return info.lower()

    except:
        pass


def send_email(receiver, subject, message):
    #connecting to server 
    server=smtplib.SMTP('smtp.gmail.com',587)
    #we are sending mail using Gmail 
    server.starttls() # transport layer security
    #providing credentials
    server.login('aryangulati2810@gmail.com','*****')
    # server.sendmail('aryangulati2810@gmail.com','aryangulati28100@gmail.com',"HI THIS IS MAIL FROM ARYAN PLEASE RESPOND ASAP")
    email = EmailMessage()
    email['From'] = 'aryangulati28100@gmail.com'
    email['To'] = receiver
    email['Subject'] = subject
    email.set_content(message)
    server.send_message(email)

email_list = {
    'myself': 'aryangulati28100@gmail.com',
    'aryan': 'itsaryangulati@gmail.com',
    
}

def get_email_info():
    talk('To Whom you want to send Email')
    name= get_info()
    receiver = email_list[name]
    print(receiver)
    talk("What is the subject of your email?")
    subject = get_info()
    talk('Tell me the text in your email')
    message =get_info()
    send_email(receiver, subject, message)
    talk('Hey lazy human. Your email is sent successfully')
    talk('Do you want to send more email?')
    send_more = get_info()
    if 'yes' in send_more:
        get_email_info()

get_email_info()
