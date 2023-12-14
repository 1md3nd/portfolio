from django.shortcuts import render
from django.http import HttpResponse
from .textascii import asciigenerator, allFonts
import json
def main(request):
    return HttpResponse('Hello')

def textasciiart(request):
    response = asciigenerator(request)
    return HttpResponse(response)

def getFontOptions(request):
    response = allFonts()
    response_json = json.dumps(response)
    return HttpResponse(response_json)