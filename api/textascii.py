from django.shortcuts import render
from pyfiglet import Figlet
import random

def asciigenerator(request):
    figlet = Figlet()
	
    # getting form data
    text = request.GET.get('text', '')
    font = request.GET.get('font',None)
    if font is '':
        fonts = figlet.getFonts()
        font = fonts[0]
    print(font)
    figlet.setFont(font=font)
    result = figlet.renderText(text=text)
    return result

def allFonts():
    figlet = Figlet()
    result = figlet.getFonts()
    # try:
    # except figlet.FontNotFound:
    #     # Use a default font if the specified font is not found
    #     result = "No fonts"
    return result