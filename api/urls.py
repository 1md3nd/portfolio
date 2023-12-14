from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.main),
    path('textasciiart',views.textasciiart),
    path('getFontOptions',views.getFontOptions),
]
