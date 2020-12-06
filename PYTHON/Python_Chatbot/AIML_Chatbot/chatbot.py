import aiml
#this is the driver / BRAIN 
#create a kernel
#kernel is one which reads text /pattern and retierve info from library (brain)
kernel= aiml.Kernel() 

kernel.learn("std-startup.xml") #it reads aiml file and try to learn
kernel.respond("load aiml b")


while True:
    #all the text gonna take by input 
    input_text = input(">Human:  ")\
    #then kernel is going to read it and respond accordingly to the text input
    response=kernel.respond(input_text)
    print("AIML Bot> "+ response)