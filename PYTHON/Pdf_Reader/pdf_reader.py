import pyttsx3 #python text to speech version 3
import PyPDF2 

pdf= open("Andriy_Burkov.pdf",'rb')

pdfreader = PyPDF2.PdfFileReader(pdf)

pages=pdfreader.numPages
print(pages)


dell= pyttsx3.init()

pages=pdfreader.getPage(7)

text=pages.extractText()

# dell.say("Hello How Can I help you")
dell.say(text)

dell.runAndWait()