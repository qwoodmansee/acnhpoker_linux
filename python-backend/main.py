import socket
import time
import binascii
from os import system, name
import string
from flask import Flask, request, jsonify
from flask_cors import CORS

##############################################################################################################################
## OG ACNH Poker Code (modified to remove console stuff):
##############################################################################################################################
invOffset = '0xAC4723D0'
countOffset = '0xAC4723D4'

def clear(): 
    if name == 'nt': 
        time.sleep(2)
        _ = system('cls')  
        spawnItem() 
    else: 
        time.sleep(2)
        _ = system('clear') 
        spawnItem()

def is_hex(s):
     hex_digits = set(string.hexdigits)
     return all(c in hex_digits for c in s)

def formatID(x):
    IDStr = str(x)
    
    if( len(IDStr) > 4):
        print("input too large.")
        clear()
    if ( len(IDStr) <= 4 ):
        n0 = "0" * ( 4 - len(IDStr) )
        #print(n0 + IDStr)
        preString = n0 + IDStr
        first, second = preString[:int(len(preString)/2)], preString[int(len(preString)/2):]
        fString = second + first
        return fString

def sendCommand(s, content):
    content += '\r\n'
    s.sendall(content.encode())
    print(content)


def spawnItem(item_id, count):
    print("sending")
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    #change the connection info here.
    s.connect(("192.168.1.86", 6000))

    itemString = "0x" + formatID(item_id)
    pokeString = f"poke {invOffset} {itemString}"
    sendCommand(s, pokeString.format(invOffset, itemString)) 
    sendCommand(s, f"poke {countOffset} {hex(int(count) - 1)}") 

##############################################################################################################################
## API Code
##############################################################################################################################
app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return "<h1>Welcome to the ACNH Poker API.</h1><p> You can make requests to this API from any frontend application.</p>"


@app.route('/add', methods=['POST'])
def add_item():
    json = request.get_json(force = True)
    if not json or not 'itemId' in json or not 'itemCount' in json:
        abort(400)

    item_id = json['itemId']
    item_count = json['itemCount']

    if not is_hex(item_id):
        abort(400)
    elif not is_hex(str(item_count)):
        abort(400)
    else:
        spawnItem(item_id, str(item_count))
        return jsonify(success=True)


@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404


app.run(host="0.0.0.0")
