from django.shortcuts import render
from django.http import HttpResponse
from .textascii import asciigenerator

def main(request):
    return HttpResponse('Hello')

def textasciiart(request):
    response = asciigenerator(request)
    return HttpResponse(response)