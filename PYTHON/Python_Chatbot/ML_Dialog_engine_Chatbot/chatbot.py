from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

bot=ChatBot("Dell bot") #Dell bot name object of bot

trainer= ChatterBotCorpusTrainer(bot)

trainer.train("chatterbot.corpus.english") #it train from english language

while True:
    query = str(input(">> "))
    print(bot.get_response(query))

    if "exit" in query:
        break


