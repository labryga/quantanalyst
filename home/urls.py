from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^home', Home.as_view()),
    url(r'^zahl', zahl),
]
