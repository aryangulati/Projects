from num2words import num2words


def language(language):
#     def english(co):
#         dict2={"US":"en","UK":"en_GB","IN":"en_IN"}
#         return dict2.get(co)
        
    dict={
    "Englishus":"en",
    "Englishuk":"en_GB",
    "Englishindia":"en_IN",
    "Arabic":"ar", 
    "German":"de",
    "Spanish":"es",
    "French":"fr",
    "Italian":"it", 
    "Japanese":"ja",
    "Kannada":"kn", 
    "Korean":"ko",
    "Norwegian":"no",
    "Polish":"pl",
    "Portuguese":"pt", 
    "Serbian":"sr",
    "Romanian":"ro", 
    "Russian":"ru",
    "Slovene":"sl",
    "Turkish":"tr",
    "Thai":"th",
    "Dutch":"nl", 
    }
    return dict.get(language,"language is not present")

number=int(input())
words=language(input().capitalize())
a=num2words(number,lang=words)
print(a)