from django.contrib import admin
from django.urls import path
from .views import index
urlpatterns = [
    path('', index),
    path('contact', index),
    path('project', index),
    path('asciiart', index),
    path('about', index),
    path('test', index),
    path('selfdrivingcar',index),

]
