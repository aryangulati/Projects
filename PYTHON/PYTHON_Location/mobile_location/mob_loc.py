import phonenumbers 
from test_no import number 

from phonenumbers import geocoders

country_no = phonenumbers.parse(number,"CH")
print(geocoders.description_for_number(country_no, "en"))

# later ip address also 