
from random import randint as ri
import json

a = json.dumps([ {"x": ri(1,400), "y": ri(1,400)} for i in range(30) ])

with open('stock.json', 'w') as wjson:
    wjson.write('{}'.format(a))

wjson.close()
