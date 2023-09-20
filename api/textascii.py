from django.shortcuts import render
import pyfiglet
import random

def asciigenerator(request):
	
    # getting all fonts provided by pyfiglet
    fonts = pyfiglet.FigletFont.getFonts()

    # getting form data
    text = request.GET.get('text', '')
    font = request.GET.get('font', 'slant')

    
    result = pyfiglet.figlet_format(text, font=font)

    return result