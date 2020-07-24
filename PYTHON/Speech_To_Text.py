import speech_recognition as sr
import pyaudio
r=sr.Recognizer()#this willl recognise our audio 

with sr.Microphone() as source:#here we are intialisng our source to microphone we can also intialise to some file 
    print("Hey Do You wanna Speak I am listening : ")
    audio =r.listen(source) #listening to source and saving it to audio
    try:
        text =r.recognize_google_cloud(audio) #recogniser here will convert audio into text part
        print("Ohh I recorded your voice as text :{}".fromat(text))
    except:
        print("sorry can't hear you")

